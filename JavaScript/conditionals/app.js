//if block demonstration

// console.log("ITS WORKING!!!");
// let random=Math.random();
// if(random<0.5){
//     console.log("YOUR NUMBER IS LESS THAN 0.5!!!");
    
// }
// else{
//     console.log("YOUR NUMBER IS GREATER(OR EQUAL) THAN 0.5!!!");
    
// }
// console.log(random);
// console.log("AFTER CONDITIONALS");




//else if block demonstration

// const dayofweek=prompt('ENTER A DAY').toLowerCase();
// if(dayofweek==='monday'){
//     console.log("UGHHH I HATE MONDAYS!");
// }
// else if(dayofweek==='saturday'){
//     console.log("YAY I LOVE SATURDAYSS!!");
// }
// else if(dayofweek==='friday'){
//     console.log("FRIDAYS ARE DECENT,ESPECIALLY AFTER WORK!!!");
// }
// else{
//     console.log("MEH");
// }



// const age=89;

// if(age<5){
//     console.log("You are a baby.You get in for free!!");
// }
// else if(age<10){
//     console.log("You are a child.You pay 10$!!");
// }
// else if(age<65){
//     console.log("You are a adult.You pay 20$!!");
// }
// else{
//     console.log("You are a senior.You pay 10$");
// }


const password=prompt("please eneter a new password");
if(password.length>=6){
    if(password.indexOf(' ')===-1){
        console.log("Valid Password!");
    }
    else{
        console.log("PASSWORD CANNOT CONTAIN SPACES");
    }
}
else{
    console.log("PASSWORD TOO SHORT! MUST BE 6+ CHARACTERS")
}

