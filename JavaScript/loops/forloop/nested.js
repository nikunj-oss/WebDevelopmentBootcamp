for(let i=1;i<=10;i++){
    console.log(`i is ${i}`);
    for(let j=1;j<4;j++){
        console.log(`     j is ${j}`)
    }
}

const seatingChart = [
    ['Kristen', 'Erik', 'Namita'],
    ['Geoffrey', 'Juanita', 'Antonio', 'Kevin'],
    ['Yuma', 'Sakura', 'Jack', 'Erika']
]

for (let i = 0; i < seatingChart.length; i++){
    console.log(`ROW#${i+1}`);
    const row=seatingChart[i];
    for(let j=0;j<row.length;j++){
        console.log(row[j]);
    }


}