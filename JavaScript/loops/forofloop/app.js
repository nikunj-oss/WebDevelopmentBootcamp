const subreddits=['cringe','books','chickens','soccer','funny','pics','gunners'];
for(let i=0;i<subreddits.length;i++){
    console.log(`visit reddit.com/r/${subreddits[i]}`);
}
for(let sub of subreddits){
    console.log(`visit reddit.com/r/${sub}`)
}

const seatingChart = [
    ['Kristen', 'Erik', 'Namita'],
    ['Geoffrey', 'Juanita', 'Antonio', 'Kevin'],
    ['Yuma', 'Sakura', 'Jack', 'Erika']
]

for(let row of seatingChart){
    for(let child of row){
        console.log(child)
    }
}


for(let char of "hello world"){
    console.log(char);
}