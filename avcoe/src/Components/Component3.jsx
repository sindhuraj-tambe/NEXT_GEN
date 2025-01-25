// src/KgToPoundConverter.js
import React, { useState } from 'react';


function Component3() {
    const [kilograms, setKilograms] = useState('');
    const [pounds, setPounds] = useState(null);

    const convertToPounds = (e) => {
        e.preventDefault();
        if (kilograms) {
            const convertedPounds = kilograms * 2.20462; // Conversion factor
            setPounds(convertedPounds.toFixed(2)); // Set pounds to two decimal places
        }
    };

    return (
        <div className="kg-to-pound-converter">
            <h1>Kilogram to Pound Converter</h1>
            <form onSubmit={convertToPounds}>
                <div className="input-container3">
                    <label htmlFor="kilograms">Weight (kg):</label>
                    <input
                        type="number"
                        id="kilograms"
                        value={kilograms}
                        onChange={(e) => setKilograms(e.target.value)}
                        required
                    />
                </div>
                <button type="submit">Convert to Pounds</button>
            </form>
            {pounds !== null && (
                <div className="result">
                    <h2>Your Weight: {pounds} lbs</h2>
                </div>
            )}
        </div>
    );
}

export default Component3;