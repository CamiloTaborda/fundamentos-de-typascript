(() => {
let prices = [1,2,3,4,5,6,7];
prices.push(8);

let products = ['hola', true];
products.push(false);

let mixed: (number | string | boolean | Object)[] = ['hola', true];
mixed.push(12);
mixed.push('asas');
mixed.push(true);
mixed.push({});
mixed.push([]);

let numbers = [1,2,3,4,5,6,7];
numbers.map(item => item * 2)
})();
