// activity1 taask1
for (let i = 1; i <= 10; i++) {
    console.log(i); 
}

// task 2
for (let i = 1; i <= 10; i++) {
    result = i * 5;
    console.log(result); 
}
// activity 2 task 3
let i = 1;
let sum = 0;
while (i < 10) {
    sum += i;
    i++
}
console.log(sum);

// task4

let num=1;
let res=0;
while(num<=10){
    res=11-num;
    console.log(res);
    num++
}
// activity 3 task 5
 let val=1;
do{
    console.log(val);
    val++

}while(val<=10)

    // task 5
    let factnum=4;
    let fact=1;
    do{
        fact*=factnum;
        
        factnum--;

    }while(factnum>0)

console.log(fact);

// activity 4 task 7
for(let i=1;i<=5;i++){
    for(let j=1;j<=i;j++){
        console.log('*');
    }
    console.log('');
}

// activity 5 task 8

for(let i=1;i<=10;i++){
    if(i==5){
        continue;
    }
    console.log(i);
}
// task 9
for(let i=1;i<=10;i++){
    if(i==7){
        break;
    }
    console.log(i);
}