function singsong(){
    console.log("DO");
    console.log("RE");
    console.log("MI");
}

singsong();
singsong();
singsong();
singsong();
singsong();
singsong();

function greet(fisrtname){
    console.log("hi",fisrtname);
    console.log(`firstname is: ${fisrtname}`);
}
function greet_more(fisrtname,lastname){
    console.log("hi",fisrtname,lastname[0]);
    console.log(`hi there ${fisrtname} ${lastname[0]}.`)
    console.log(`firstname is: ${fisrtname}`);
    console.log(`lastname is: ${lastname}`);

}


greet("nikunj")
greet()
greet_more('nikunj','goel');

function repeat(str,numtimes){
    let result='';
    for(let i=0;i<numtimes;i++){
        result+=str;

    }
    console.log(result);
}


repeat("my name is nikunj",6)

function add(x,y){
    let sum= x+y;
    return sum;
}

console.log(add(2,3));
console.log(add('2','3'));

function capitalize(str){
    str[0]=str[0].toUpperCase();
    return str;
}
console.log(capitalize("hello"))