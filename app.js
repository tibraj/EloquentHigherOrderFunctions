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
function every(array, predicate) {
    for(let element of array) {
        if(!predicate(element)) return false;
    }
    return true;
}

function secondEvery(array, predicate) {
    return !array.some(element => !predicate(element));
}

console.log(every([1,3,5], n => n < 10));
console.log(secondEvery([1,3,5], n => n < 10));
console.log(every([2,4,16], n => n < 10));
console.log(secondEvery([2,4,16], n => n < 10));
console.log(every([], n => n < 10));
console.log(secondEvery([], n => n < 10));

//Dominant Writing Direction
function dominantDirection(text) {
    let counted = countBy(text, character => {
        let script = characterScript(character.codePointAt(0));
        return script ? script.direction : "none";
    }).filter(({name}) => name != "none");
    if(counted.length == 0) return "ltr";
    return counted.reduce((a,b) => a.count > b.count ? a : b).name;
}

console.log(dominantDirection("Hello!"));