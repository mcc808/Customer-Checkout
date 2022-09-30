let user = prompt("Hello, What is your name?");
let product = prompt("Please enter product name:");
let price = prompt("Please enter the price:");
let quantity = prompt("Please enter the quantity:");

let jeans = 12.99;
//let jacket = 19.99;
//let shorts = 8.99;

let r1 = jeans * quantity;
//let r2 = jacket * quantity;
//let r3 = shorts * quantity; 

let subTotal = r1 + 0;

let tax = .0725 * subTotal;
let tx = tax.toFixed(2);

let final = subTotal + tax; 
let fin = final.toFixed(2);

document.write("<p>Hello " +user+ ", welcome!</p>");

document.write("<p>Items: " + " Qty: " + quantity + " Product: " + product + " @ " + "$" + price + " ea</p>" );

document.write("<p>Subtotal: " + "$" + subTotal + " </p>" );

document.write("<p>Tax: 7.25%: " + "$" + tx + " </p>" );

document.write("<p>Total: " + "$" + fin + " </p>" );






