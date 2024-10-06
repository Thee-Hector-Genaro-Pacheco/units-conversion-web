// Conversion functions (pure logic)
function mlToTsp(ml) {
    return (ml / 4.929).toFixed(2);
}

function tspToTbsp(tsp) {
    return (tsp / 3).toFixed(2);
}

function tbspToOz(tbsp) {
    return (tbsp / 2).toFixed(2);
}

function ozToCup(oz) {
    return (oz / 8).toFixed(2);
}

// Function to add event listeners to the DOM
function setupEventListeners() {
    const form = document.getElementById('conversion-form');

    if (form) {
        form.addEventListener('submit', function (e) {
            e.preventDefault();
            const ml = parseFloat(document.getElementById('ml').value);
            
            // Perform conversions
            const tsp = mlToTsp(ml);
            const tbsp = tspToTbsp(tsp);
            const ounces = tbspToOz(tbsp);
            const cups = ozToCup(ounces);
            
            // Display the result
            document.getElementById('result').innerHTML = 
                `${ml} ml = ${tsp} tsp = ${tbsp} tbsp = ${ounces} oz = ${cups} cups`;
        });
    }
}

// If running in a browser environment, set up event listeners
if (typeof document !== 'undefined') {
    document.addEventListener('DOMContentLoaded', setupEventListeners);
}

// Export functions for testing
module.exports = { mlToTsp, tspToTbsp, tbspToOz, ozToCup , setupEventListeners};
