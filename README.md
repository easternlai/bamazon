# bamazon

## Technologies Used

1. Javascript
2. Node JS
3. Inquirer
4. NPM
5. Git Bash
6. MySQL

## Program Description

This is a node program presents a user with a list of items for purchase and their prices.  The user selects which Item they would like to purchase and is either told their total cost, or that the purchase could not be made because their in insufficient quantity.  

![success](https://github.com/easternlai/LIRI-Bot/blob/master/img/concertthis.JPG)

In this screenshot you can see that the user purchases an item and is returned their total cost.

![fail](https://github.com/easternlai/LIRI-Bot/blob/master/img/moviethis.JPG)

In this example the user is not able to purchase the item because there is not enough inventory to fulfill their order. 

![ran-out](https://github.com/easternlai/LIRI-Bot/blob/master/img/spotify.JPG)

In this final example, notice tha the user is first able to place an order, but when the program is run again and the user tries to place a larger order, the quantity has updated reflecting the previous transaction.  


The code below stores the current inventory into the array "currentInventory" so that the user is presented with a  list of available products. If this array was not created, the user experience would be the item numbers of each product be displayed and the user would have to manually enter the price.  
 
```
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
```