// activity 1 task 1
let cheaknumber=function(a){
    if(a>0){
       console.log(`the number:${a}is positive`);
    }
    else if(a<0){
        console.log(`the number:${a}is negative`);
    }
    else if(a==0){
        console.log("given number is zero");
    }
    else{
        console.log("error");
    }
}
cheaknumber(23)
cheaknumber(-23)
cheaknumber(0)
// task 2
let persionage=function(age){
    if(age>=18){
        console.log("persion is able to vote");
    }
    else{
        console.log("not elligible for voting");
    }
}
persionage(20)
persionage(12)
//activity 2 task 3
let largest=function(a,b,c){
    if(a>b&&a>c){
        console.log(`${a} :is greater`);
    }
    if(b>a&&b>c){
        console.log(`${b} :is greater`);
    }
    if(c>a&&c>b){
        console.log(`${c} :is greater`);
    }
}
largest(3,5,7);
// activity 3 task 4
let day=function(n){
    switch(n)
    {case 1:
        console.log("monday");
     break;
     case 2:
        console.log("tuesday");
     break;
     case 3:
        console.log("wednesday");
        break;
     case 4:
        console.log("thursday");
     break;
     case 5:
        console.log("friday");
     break;
     case 6:
        console.log("saturday");
     break;
     case 7:
        console.log("sunday");
     break;
     default:
        console.log("somthing error happend");

    }
}
day(7);

// task 5
let score=function(val){
    let grade;
    switch(true){
       case val>=90:
          grade ="A";
          break;
       case val>=80:
          grade ='b';
          break;
       case val>=70:
          grade ='c';
          break;
       case val>=60:
          grade ='d';
          break;
       default:
        console.log("error");
    
    }
console.log(`grade for the:${val} is ${grade}`);
}
score(60)
// activity 4task 6
let num=23;
let result=(num%2===0)?'even':'odd';
console.log(result);

// activity 5task 7
function leapyear(year){
    let leap=(year%4===0&&year%100!==0||year%400===0)
    if(leap==true)
    console.log(`year:${year} is leap year:yes`)
    else
     console.log(`year:${year} is leap year:no`)
}
leapyear(2023)
