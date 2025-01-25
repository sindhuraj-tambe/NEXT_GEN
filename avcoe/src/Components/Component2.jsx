import React, { useState } from 'react';


function Component2() {
    const [weight, setWeight] = useState('0');
    const [height, setHeight] = useState('0');
    const [bmi, setBmi] = useState('0');
    const [category, setCategory] = useState('0');

    const calculateBMI = (e) => {
        e.preventDefault();
        if (weight && height) {
            const heightInMeters = height / 100;
            const calculatedBmi = weight / (heightInMeters * heightInMeters);
            setBmi(calculatedBmi.toFixed(2)); 

           
            if (calculatedBmi < 18.5) {
                setCategory('Underweight');
            } else if (calculatedBmi >= 18.5 && calculatedBmi < 24.9) {
                setCategory('Normal weight');
            } else if (calculatedBmi >= 25 && calculatedBmi < 29.9) {
                setCategory('Overweight');
            } else {
                setCategory('Obesity');
            }
        }
    };

    return (
        <div className="bmi-calculator">
            <h1>BMI Calculator</h1>
            <form onSubmit={calculateBMI}>
                <div className="input-container">
                    <label htmlFor="weight">Weight (kg):</label>
                    <input type="number" id="weight" value={weight} onChange={(e) => setWeight(e.target.value)}required/>
                </div>
                <div className="input-container">
                    <label htmlFor="height">Height (cm):</label>
                    <input type="number" value={height} onChange={(e) => setHeight(e.target.value)}required />
                </div>
                <button type="submit">Calculate BMI</button>
            </form>
            
                <div className="result">
                    <h2>Your BMI: {bmi}</h2>
                    <h3>Category: {category}</h3>
                </div>
            
        </div>
    );
}

export default Component2;