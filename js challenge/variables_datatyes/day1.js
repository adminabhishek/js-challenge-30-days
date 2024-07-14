// activity 1:task 1
var num =30;
console.log("value of the num is",num);

// task 2
let str = "this is string"
console.log(str);

// activity 2: task 3
const bool=true;
console.log(bool);

// activity 3:task 4
var Numbertype; //log value is undefined
var numbertype=30; //log value is number
const mystr="this is string";
var mybool=true
var myobj={
    // this is object type
}
var myarray=["this","is","array"] //array is of object type 

console.log( typeof(Numbertype));
console.log( typeof(mystr));
console.log( typeof(mybool));
console.log( typeof(myobj));
console.log( typeof(myarray));

// activity 4:task 5
let myvar=20;
console.log("first assigned value",myvar);
myvar=38;
console.log("secomd assigned value",myvar);

// activity 5:task 6
const myvalue=20
//myvalue =39 //remove this comment to see error
console.log(myvalue);// Uncaught TypeError TypeError: Assignment to constant variable.(*value can not be changed*)

// feature request

// primitive data types 
let stringvar="this is string "
let numbervar=40;
let booleanvar=true;
let undefinedvar;
let nullvar=null;
// let symbolvar = symbol('symbol');
let bigint=222222222223333333n;
// non-primitive data types 
let objectvar={name:"abhishek",age:19};
let arrayvar=[12,3,4,5,6,6,];
let functionvar=function() {
    return "this is a afunction" ;
};
let datevar=new Date();
let regexvar=/ab+c/;

console.log(`stringvar: value=${stringvar} ,type=${typeof(stringvar)}`);
console.log(`numbervar: value=${numbervar} ,type=${typeof(numbervar)}`);
console.log(`booleanvar: value=${booleanvar} ,type=${typeof(booleanvar)}`);
console.log(`undefinedvar: value=${undefinedvar} ,type=${typeof(undefinedvar)}`);
console.log(`nullvar: value=${nullvar} ,type=${typeof(nullvar)}`);
console.log(`bigint: value=${bigint} ,type=${typeof(bigint)}`);
console.log(`objectvar: value=${objectvar} ,type=${typeof(objectvar)}`);
console.log(`arrayvar: value=${arrayvar} ,type=${typeof(arrayvar)}`);
console.log(`functionvar: value=${functionvar()} ,type=${typeof(functionvar)}`);
console.log(`datevar: value=${datevar} ,type=${typeof(datevar)}`);
console.log(`regexvar: value=${regexvar} ,type=${typeof(regexvar)}`);

// 2. reassignment demo
let letvar="initial vlaue"
console.log(`initial value of letvar${letvar}`);
letvar="reassigned value"
console.log(`final value of letvar${letvar}`);
 
const constvar="initial value of constvar"
console.log(`initail  value of constvar=${constvar}`);
try{
    constvar="reassigned value ";

}catch(error){
    console.log(`error while trying to reassining value to constvar:${error.message}`);
}

