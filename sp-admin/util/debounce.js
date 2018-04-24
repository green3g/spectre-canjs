/**
 * Prevents a function from being called many times in a row
 * @param {Function} inner The function to debounce (should return a Promise)
 * @param {Number} [ms=100] Number of milliseconds to wait before calling the function
 * @returns {Promise}
 */
export default function debounce (inner, ms = 100) {
    let timer = null;
    let resolves = [];
    return function (...args) {
        // Run the function after a certain amount of time
        clearTimeout(timer);
        timer = setTimeout(() => {
            // Get the result of the inner function, then apply it to the resolve function of
            // each promise that has been created since the last time the inner function was run
            const result = inner(...args);
            resolves.forEach((r) => r(result));
            resolves = [];
        }, ms);

        return new Promise((resolve) => resolves.push(resolve));
    };
}
