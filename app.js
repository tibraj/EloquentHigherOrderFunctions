//Flattening
let arrays = [[1,2,3], [4,5], [6]];
console.log(arrays.reduce((flat, current) => flat.concat(current), []));

//Your Own Loop
function loop(start, test, update, body) {
    for(let value = start; test(value); value = update(value)) {
        body(value);
    }
}

loop(3, n => n > 0, n => n - 1, console.log);
//Everything

//Dominant Writing Direction