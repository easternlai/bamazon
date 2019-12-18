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
            console.log(inquireResponse.userItem);


        });
    });
}

// * The first should ask them the ID of the product they would like to buy.
// * The second message should ask how many units of the product they would like to buy.
