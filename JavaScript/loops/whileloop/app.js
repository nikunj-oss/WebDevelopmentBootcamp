// let count=0;
// while(count<10){
//     count++;
//     console.log(count);
    
// }

// const secret="BabyHippo";
// let guess=prompt("enter the secret code");
// while(guess!==secret){
//     guess=prompt("enter the secret code");
// }
// console.log("congrats")

// let input=prompt("Hey,say something");
// while(true){
//     input=prompt(input);
//     if(input.toLowerCase()==="stop copying me "){
//         break;
//     }
// }
// console.log("YOU WIN!")

let maximum = parseInt(prompt("Enter the maximum number!"));
while (!maximum) {
    maximum = parseInt(prompt("Enter a valid number!"));
}

const targetNum = Math.floor(Math.random() * maximum) + 1;

let guess = prompt("Enter your first guess! (Type 'q' to quit)");
let attempts = 1;

while (parseInt(guess) !== targetNum) {
    if (guess === 'q'){
        break;
    }
    guess=parseInt(guess);
    if (guess > targetNum) {
        guess = prompt("Too high! Enter a new guess:");
        attempts++;
    } 
    else if(guess<targetNum) {
        guess = prompt("Too low! Enter a new guess:");
        attempts++;
    }
    else {
        guess = prompt("Invalid guess. Please enter a number or 'q' to quit");
    }
    

}

if (guess === 'q') {
    console.log("OK, YOU QUIT!")
} else {
    console.log("CONGRATS YOU WIN!")
    console.log(`You got it! It took you ${attempts} guesses`)
}