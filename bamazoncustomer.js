var mysql = require("mysql");
var inquirer = require("inquirer");
var connectionParameters = {
    host: "localhost",
    port: 3306,
    user: "root",
    password: "password",
    database: "bamazon_DB"
};

var connection = mysql.createConnection(connectionParameters);

connection.connect(function(err) {
    if(err) throw err;
    startPrompt();
});

function startPrompt(){

    console.log("Displaying all products:... \n");
    var currentInventory = [];
    var matchIndex;
    connection.query("SELECT * FROM products", function(err, res){
        
        for (i = 0; i < res.length; i++){
            currentInventory.push(res[i].product_name);
        }
        console.log("-----------------------------");
    
        inquirer.prompt([
            {
                type: "list",
                name: "userItem",
                choices: currentInventory,
                message: "Which product do you want to buy?"
                
            },
            {
                type: "input",
                name: "userQuantity",
                message: "How many do you want to purchase?"
            }
        ]).then(function(inquireResponse){
            for (i = 0; i < res.length; i++){
                if(inquireResponse.userItem === res[i].product_name){
                    matchIndex = res[i];
                }
            }
            if (matchIndex.stock_quantity > inquireResponse.userQuantity){
                connection.query("UPDATE products SET ? WHERE ?", 
                [
                    {
                        stock_quantity: matchIndex.stock_quantity - inquireResponse.userQuantity
                    },
                    {
                        item_id: matchIndex.item_id
                    }
                ], 
                    function (error){
                        if (error) throw err;
                        console.log("Your purchase total is: $" + (matchIndex.price * inquireResponse.userQuantity).toFixed(2));

                    }
                );
            }else{
                console.log("Sorry your purchase request exceeds our current inventory of " + matchIndex.stock_quantity + ".");
            }
        });

    });
}
