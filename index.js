const cats = [
    "Milo", 
    "Otis", 
    "Garfield",
];
cats.length = 0;

cats.push('Milo', 'Otis', 'Garfield');
function destructivelyAppendCat(name) {
    return cats.push("Ralph");
}
function destructivelyPrependCat(name) {
    return cats.unshift("Bob");
}
function destructivelyRemoveLastCat(name) {
    return cats.pop("Bob");
}function destructivelyRemoveFirstCat(name) {
    return cats.shift("Milo");
}
function appendCat(name){
    const Cats = cats.slice();
    Cats.push(name);
    return Cats;
}
function prependCat(name){
    const Cats = cats.slice();
    Cats.unshift("Arnold");
    return Cats;
}
function removeLastCat(name){
    const Cats = cats.slice();
    Cats.pop("Arnold");
    return Cats;
}
function removeFirstCat(name){
    const Cats = cats.slice();
    Cats.shift("Milo");
    return Cats;
}