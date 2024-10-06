const { mlToTsp, tspToTbsp, tbspToOz, ozToCup, setupEventListeners } = require('../js/main.js');

describe('Unit Conversion Functions', () => {
    test('mlToTsp should convert ml to tsp correctly', () => {
        expect(mlToTsp(10)).toBe('2.03'); // 10 ml = 2.03 tsp
    });

    test('tspToTbsp should convert tsp to tbsp correctly', () => {
        expect(tspToTbsp(3)).toBe('1.00'); // 3 tsp = 1 tbsp
    });

    test('tbspToOz should convert tbsp to oz correctly', () => {
        expect(tbspToOz(2)).toBe('1.00'); // 2 tbsp = 1 oz
    });

    test('ozToCup should convert oz to cups correctly', () => {
        expect(ozToCup(8)).toBe('1.00'); // 8 oz = 1 cup
    });

    // New test for event listener
    test('Form submission updates result div', () => {
        // Set up DOM
        document.body.innerHTML = `
            <form id="conversion-form">
                <input type="number" id="ml" value="100">
                <button type="submit">Convert</button>
            </form>
            <div id="result"></div>
        `;

        // Set up the event listeners
        setupEventListeners();

        // Mock form submission
        const form = document.getElementById('conversion-form');
        form.dispatchEvent(new Event('submit'));

        // Check the result
        const resultDiv = document.getElementById('result');
        expect(resultDiv.innerHTML).toBe('100 ml = 20.29 tsp = 6.76 tbsp = 3.38 oz = 0.42 cups');
    });
});
