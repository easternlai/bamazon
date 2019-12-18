var mysql = require("mysql");
var inquirer = require("inquirer");
var currentInventory = [];
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
    updateAndDisplay();
    startPrompt();
});


function updateAndDisplay(){
    console.log("Displaying all products:...");
    connection.query("SELECT * FROM products", function(err, res){
        currentInventory = [];
        for (i = 0; i < res.length; i++){
            console.log (res[i].item_id, ": ",res[i].product_name," - ", res[i].price);
            currentInventory.push(res[i].item_id + ": " + res[i].product_name);
        }
    });
}


function startPrompt(){
    inquirer.prompt([
        {
            type: "input",
            name: "userItem",
            message: "Which product do you want to buy?"
            
        },
        {
            type: "input",
            name: "userQuantity",
            message: "How many do you want to purchase?"
        }
    ]).then(function(inquireResponse){
        console.log(testArr);
        console.log(currentInventory);
    });
}

// * The first should ask them the ID of the product they would like to buy.
// * The second message should ask how many units of the product they would like to buy.
