// activity1 :task 1
const addnum=40+70;
console.log(addnum);
// task2
const subs_twonum=50-40;
console.log(subs_twonum);
// task3
const multip_twonum=20*2;
console.log(multip_twonum);
// task4
const divi_twonum=50/25;
console.log(divi_twonum);
// task 5
const reninder_twonum=40%3;
console.log(reninder_twonum);

// activity 2 task 6
let mynum=null;
mynum+=40;
console.log(`added number${mynum} to mynum variable which was null`);
// task 7
var subvar=0;
subvar-=30;
console.log(`substracted number fom variable subvar:${subvar}`); 

// activity 3 task 8
let compvar=20>4
console.log(`using > :${compvar}`);
let compvar1=20<4
console.log(`using < :${compvar1}`);
// task 9
let comp2=30>=40;
console.log(`using >= :${comp2}`);

let comp3=30>=40;
console.log(`using <= :${comp3}`);
// task 10
let comp4=30==40;
console.log(`using == :${comp4}`);

let comp5=30===40;
console.log(`using === :${comp5}`);
//activity4 task 11
let and2op=(20>10&&20>30) //both 2 condtions should be true
console.log(and2op);
// task 12
let or_op=(20>10||20>30) //any 1 condtions should be true
console.log(or_op);
// task 13
let not_op=(!20>30) 
console.log(not_op);
// activity5 task 14
let num=10;
let mynumm=(num>=0)?"positive":"negative";
console.log(mynumm);

// featured request solution
const myfunction=function(a,b){
      add=a+b;
      sub=a-b;
      mult=a*b;
      divi=a/b;
      reminder=a%b;
      console.log(`addition:${add}\nsubstraction:${sub} \nmultiplication:${mult}\ndivision:${divi}\nreminder:${reminder}`);

}
myfunction(3,8)









