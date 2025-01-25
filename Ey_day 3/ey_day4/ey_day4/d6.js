<!DOCTYPE html>
<html>
<head>
  <title>BMI and Electricity Bill Calculator</title>
</head>
<body>
  <h1>BMI Calculator</h1>
  <p id="bmi-result"></p>
  <p id="bmi-category"></p>
  <img id="bmi-image" src="" alt="BMI Category Image" style="width:300px; display:none;">

  <h1>Electricity Bill Calculator</h1>
  <p id="bill-result"></p>

  <script>
    function calculateBMI(weight, height) {
      const bmi = weight / (height * height);
      return bmi;
    }

    function categorizeBMI(bmi) {
      if (bmi < 18.5) {
        return 'Underweight';
      } else if (bmi >= 18.5 && bmi < 24.9) {
        return 'Normal weight';
      } else if (bmi >= 25 && bmi < 29.9) {
        return 'Overweight';
      } else if (bmi >= 30) {
        return 'Obese';
      }
    }

    // BMI Calculation
    let weight = 70;  
    let height = 1.75;
    
    let bmi = calculateBMI(weight, height);
    let category = categorizeBMI(bmi);

    document.getElementById("bmi-result").textContent = `Your BMI is: ${bmi.toFixed(2)}`;
    document.getElementById("bmi-category").textContent = `Category: ${category}`;

    // Display appropriate image based on BMI category
    let bmiImage = document.getElementById("bmi-image");
    if (category === 'Underweight') {
      bmiImage.src = "path/to/underweight-image.jpg"; // Replace with the actual image path
      bmiImage.style.display = "block";
    } else if (category === 'Overweight') {
      bmiImage.src = "path/to/overweight-image.jpg; 
      bmiImage.style.display = "block";
    } else {
      bmiImage.style.display = "C:\Users\Dell\EY_day 1\Ey_day 3\images\body-mass-index-illustration_1308-168768.jpg";
    }

    // Electricity Bill Calculation
    let units = parseFloat(prompt("Enter the number of units consumed:"));
    let pricePerUnit = parseFloat(prompt("Enter the price per unit in Rs:"));
    let bill = 0;

    if (units <= 100) {
      bill = 0;"
    } else if (units <= 200) {
      let excessUnits = units - 100;
      bill = excessUnits * pricePerUnit * 0.05;
    } else {
      bill = 100 * pricePerUnit * 0.05;
      let excessUnits = units - 200;
      bill += excessUnits * pricePerUnit * 0.10;
    }

    document.getElementById("bill-result").textContent = `The total electricity bill is: Rs ${bill.toFixed(2)}`;
  </script>
</body>
</html>
