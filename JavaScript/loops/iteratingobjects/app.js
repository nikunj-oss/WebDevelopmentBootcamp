const testscores={
    kennan:80,
    damon:67,
    kim:50,
    shawn:100,
    marlon:50,
    dwayne:37,
    nadia:10,
    elvira:20,
    dieadra:48,
    vonnie:89
}

for(let person in testscores){
    console.log(`${person} scores ${testscores[person]} in exam`)
}

console.log(Object.keys(testscores));
console.log(Object.values(testscores));
console.log(Object.entries(testscores));

let total=0;
let length=0;
for(let scores of Object.values(testscores)){
    console.log(scores);
    total+=scores; 
    length=scores.length;
}
console.log(total)
console.log(length)