console.log("Hello");
console.log(5+6);

console.log(29+3.5);
console.log(2025-1969);
console.log ('Oneika')
console.log(Math.random()); //create random numbers between 0 and 1
console.log(Math.random());
console.log(Math.random());
console.log(Math.floor(Math.random())); //round to the nearest ten
console.log(Math.floor(Math.random()*50));//round to the nearest ten

var myName ='Oneika';
console.log(myName); //output Oneika

var favoriteFood = "pizza";
var numOfSlices = 8;
console.log(favoriteFood,numOfSlices);

let meal='curry';
console.log(meal);//value is constant 

console.log(meal);
console.log("Hello World");
let button = document.getElementById("btnHi");
button.addEventListener("click", function(e) {
    alert("Hi there!");
});
<!Doctype html> 
<html lang="en"> 
<head> 
<meta charset="UTF-8"> 
<meta name="viewport" content="width=device-*width,initial-scale=1.0"> 
<title>Exam Prep</title> 
<link rel="stylesheet" href="index.css"> 
</head> 
<body> 
<div class="container"> 
<h1>SOCS<h1> 
<h2> Currency Calculator</h2> <br> 
<br> 
<div class="divider"></div> 
 <input type="radio" name="transaction" value="buy" checked id="buy"><label 
for="buy">Buy</label> 
 <input type="radio" name="transaction" value="sell" id="sell"><label 
for="sell">Sell</label> 
 <p>Amount</p> 
 <input type="text" id="amount" value="0" placeholder="Enter the 
amount"><br> 
 <br> 
 <label for="From Currency">From Currency</label><br> 
 <br> 
 <select id="fromCurrency" name="Currency"> 
 <option value ="usd">US Dollars</option> 
 <option value="cad">Can Dollars</option> 
 <option value="gbp">GBP Dollars</option> 
 <option value ="eur">Euro Dollars</option> 
 <option value ="jmd">Jamaican Dollars</option> 
</select><br> 
 <br> 
 <label for="To Currency">To Currency</label><br> 
 <br> 
 <select id="toCurrency" name="Currency"> 
 <option value ="jmd">Jamaican Dollars</option> 
 <option value ="usd">US Dollars</option> 
 <option value="cad">Can Dollars</option> 
 <option value="gbp">GBP Dollars</option> 
 <option value ="eur">Euro Dollars</option> 
 </select> <br> 
 <br> 
 <button id="convert">Convert</button> 
 <p id="Total">Total:</p> 
 
 <footer> 
 <p> ID #20232625 </p> 
 </footer> 
</div> 
<script src="index.js"></script> 
</body> 
body{
 background-color: white; 
 display: flex; 
 justify-content: center; 
 align-items: center; 
 height: 100vh; 
} 
.container{ 
 background-color:lightgreen; 
 padding: 2px; 
 border-radius:10px; 
 
} 
h1{ 
 color: black; 
 text-align: left; 
} 
h2{ 
 color: black; 
 text-align: left; 
} 
.divider{ 
 border-top: 2px solid; 
 color:blue 
} 
footer{ 
 text-align: center; 
} 
button{ 
 width: 90%; 
} 
function ConvertCur() { 
 if (isNaN(amount)) { 
 alert("Please enter a valid amount."); 
 return; 
 } 
 // Exchange rates to 1 JMD (Jamaican Dollar) 
 const ratesToJMD = { 
 usd: 156.00, 
 cad: 117.60, 
 gbd: 198.80, 
 eur: 171.70, 
 jmd: 1 
 }; 
 // Convert from source currency to JMD 
 const amountInJMD = amount * ratesToJMD[from]; 
 // Convert from JMD to target currency 
 const result = amountInJMD / ratesToJMD[to]; 
 document.getElementById("Total").textContent = 
 `Total: ${result.toFixed(2)} ${to.toUpperCase()}`; 
} 
function ConvertCurV2(amount, from, to, isBuy) { 
 let dollarAmount = parseFloat(amount); 
 let result = 0; 
 if (isNaN(amount)) { 
 console.log(amount); 
 return; 
 } 
 // Exchange rates to 1 JMD (Jamaican Dollar) 
 const sellratesToJMD = { 
 usd: 156.00, 
 cad: 117.60, 
 gbp: 198.80, 
 eur: 171.70, 
 jmd: 1 
 }; 
 const buyratesToJMD = { 
 usd: 144.00, 
 cad: 105.60, 
 gbp: 187.00, 
 eur: 156.80, 
 jmd: 1 
 }; 
 let ratesToUse = (isBuy) ? buyratesToJMD : sellratesToJMD; 
 // Convert from source currency to JMD 
 const amountInJMD = amount * ratesToUse[from]; 
 // Convert from JMD to target currency 
 result = amountInJMD / ratesToUse[to]; 
console.log(result) 
document.getElementById("Total").textContent = 
`Total: ${result.toFixed(2)} ${to.toUpperCase()}`; 
} 
const amount = parseFloat(document.getElementById("amount").value); 
const from = document.getElementById("fromCurrency").value; 
const to = document.getElementById("toCurrency").value; 
document.getElementById("convert").addEventListener("click", function (e) { 
 const amount = parseFloat(document.getElementById("amount").value); 
 const from = document.getElementById("fromCurrency").value; 
 const to = document.getElementById("toCurrency").value; 
 let radios = document.querySelectorAll('input[name="transaction"]:checked') 
 let value = radios.length > 0 ? radios[0].value : null; 
 let isBuy = (value == "buy") // ? true : 
false;//document.getElementsByName("transaction").values(); 
 console.log(value); 
 ConvertCurV2(amount, from, to, isBuy); 
}); 
