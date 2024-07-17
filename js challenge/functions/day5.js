// activitty1:task1
function cheacknum(num) {
  if (typeof num != 'number') {
    console.log("Error: input must be a number");
  }
  if (num % 2 == 0) {
    console.log("even number");
  }
  else {
    console.log("odd number");
  }
}
cheacknum("hello")

// task 2
function findsqr(num) {
  if (typeof num != 'number') {
    console.log("Error:input a number");
  }
  else {
    result = num * num;
    console.log(`square of ${num} is ${result}`);
  }

}
findsqr(10)
// activity 2task3
function maxfind(num1, num2) {
  if (typeof num1 != 'number' && typeof num2 != 'number') {
    console.log("Error:input a number");
  }
  else {
    if (num1 > num2) {
      console.log(`${num1} is greater than ${num2}`);
    }
    else if (num2 > num1) {
      console.log(`${num2} is greater than ${num1}`);
    }
  }
}
maxfind(20,40)

// task 4
function concat(str1, str2) {
  result=str1+str2;
  console.log(result);
}
concat("hello","world")
//  activity3 task5
const sum=(num1,num2)=>{
result=num1+num2
console.log(result);
}
sum(20,40)

// task 6
const charisin=(str,char)=>{
      result=str.includes(char)
      console.log(result);

}
charisin("hello","h")

//activity4 task 7
function para(num1,num2=1){
  result=num1*num2
  console.log(result);
}
para(5)
para(19,9)

// task 8

function nameage(name,age=18){
    console.log(`hello${name} you are wellcome| you are${age} years old`);
}

nameage("abhishek",19)
nameage("abhishekagian")

// activity 5 task 9