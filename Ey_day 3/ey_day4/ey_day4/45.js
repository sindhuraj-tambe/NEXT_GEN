let units = parseFloat(prompt("3rs"));
let pricePerUnit = parseFloat(prompt("8rs"));


let bill = 0;


if (units <= 100) {
    bill = 0; 
} else if (units <= 200) {
    
    let excessUnits = units - 100;
    bill = excessUnits * pricePerUnit * 0.05;
} else {
    
    bill = 100 * pricePerUnit * 0.05;
    
    let excessUnits = units - 200;
    bill += excessUnits * pricePerUnit * 0.10;
}


alert("The total electricity bill is: Rs " + bill.toFixed(2));

  
  a