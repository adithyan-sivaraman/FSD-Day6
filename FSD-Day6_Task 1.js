https://medium.com/@reach2arunprakash/guvi-zen-simple-debugging-tasks-adcdc2d3249d

// original code
// Fix the code to get the largest of three.
aa = 
aa = (f,s,t) => {
    let f,s,t;
    console.log(f,s,t);
    if(f>s &&f>t){
    console.log(f)}
    else if(s>f && s>t){
    console.log(s)}
    else{
    console.log(t)}
   }
   aa(1,2,3);

//    debugged code
aa = (f,s,t) => {

    console.log(f,s,t);
    if(f>s &&f>t){
    console.log(f)}
    else if(s>f && s>t){
    console.log(s)}
    else{
    console.log(t)}
   }
   aa(1,2,3);


//orginal code
//Fix the code to Sum of the digits present in the number
   let n = 123;
console.log(add(n));
function add(n)
{
let sum = 10;
for(var i=0;i<n.length;i++){
 sum+=n[i]
 }
 return sum;
}

// debugged code
   let n = 123;
console.log(add(n.toString()));
function add(n)
{
let sum = 0;

for(var i=0;i<n.length;i++){

 sum+=parseInt(n[i])
 }
 return sum;
}

// original code
// Fix the code to Sum of all numbers using IIFE function
const arr = [9,8,5,6,4,3,2,1];
(function() {
 let sum = 0;
 for (var i = 0; i <= arr.length; i++);{
 sum += arr[i];
 }
 console.log(sum);
 return sum;
})();

//debugged code 
const arr = [9,8,5,6,4,3,2,1];
(function() {
 let sum = 0;
 for (var i = 0; i < arr.length; i++){
 sum += arr[i];
 }
 console.log(sum);
 return sum;
})();

//original code
// Fix the code to gen Title caps.
var arr = [“guvi”, “geek”, “zen”, “fullstack”];
var ano = function(arro) {
 for (var i = 0; i <= arro.length; i++) {
 console.log(arro[i][0].toUpperCase() + arro[i].substr(1));
 }
}
ano();
//debugged code

var arro = ["guvi", "geek", "zen", "fullstack"];
var ano = function(arro) {
  for (var i = 0; i < arro.length; i++) {
    console.log(arro[i][0].toUpperCase() + arro[i].substr(1));
  }
}
ano(arro);

//original code 
//Fix the code to return the Prime numbers
const newArray=[1,3,2,5,10];
const myPrime=newArray.filter(num=>{
 for(let i=2;i<=num;i++){
 if(num%i===0)
 {
 return true;
 }
 }
 return num===1;
});
console.log(myPrime);

//debugged code
const newArray=[1,3,2,5,10];
const myPrime=newArray.filter(num=>{
 for(let i=2;i<num;i++){
 if(num%i===0)
 {
 return false;
 }
 }
 return num!==1;
});
console.log(myPrime);

//original code 
// Fix the code to sum the number in that array
const num = [10, 20, 30, 40,50,60,70,80,90,100] 
const sum = (a, b) =>
 a + b
const sum = num.reduce(sum)
console.log(sum);

// debugged code 
const num = [10, 20, 30, 40,50,60,70,80,90,100] 

const sum = num.reduce((a,b)=>{return a+b;})
console.log(sum);


//original code 
//Fix the code to reverse.
(function(str){
    str1 = str.split(“ “).reverse().join(“”);
    console.log(str1); 
   })(“abcd”)
//debugged code

(function(str){
    str1 = str.split("").reverse().join("");
    console.log(str1); 
   })("abcd")

   //original code
   //Fix the code to remove duplicates.
   var res = function(arr){
    for(var i=0; i < arr.length; i++){
    newArr = [];
    if(newArr.indexOf(arr[i]) == -1) {
    newArr.push(arr[i]);
    } }
    console.log(newArr)
   }
   res([“guvi”,”geek”,”guvi”,”duplicate”,”geeK”])
   
   //debugged code
   var res = function(arr){
    newArr = [];
   for(var i=0; i < arr.length; i++){
   
   if(newArr.indexOf(arr[i].toLowerCase()) == -1) {
   newArr.push(arr[i]);
   } 
     
   }
   console.log(newArr)
  }
  res(["guvi","geek","guvi","duplicate","geeK"])

  
  //original code 
//Fix the code to give the below output:
// Sum of odd numbers in an array

  var as=[12,34,5,6,2,56,6,2,1];
  var s=as.reduce(function(a,c){
   if(c%2!=0)
   {
   return a+c;
   }
   return a;});
  console.log(s);

  //debugged code 
  
  var as = [12, 34, 5, 6, 2, 56, 6, 2, 1];
var s = as.reduce(function(a, c) {
  if (c % 2 !== 0) {
    return a + c;
  }
  return a;
},0);
console.log(s);

//original code 
//Fix the code to gen Title caps.
var arr = [“guvi”, “geek”, “zen”, “fullstack”];
(function() {
 for (var i = 0; i <= arr.length; i++) {
 console.log(arr[0][i].toUpperCase() + arr[i].substr(1));
 }
})();

//debugged code 
var arr = ["guvi", "geek", "zen", "fullstack"];
(function() {
 for (var i = 0; i < arr.length; i++) {
 console.log(arr[i][0].toUpperCase() + arr[i].substr(1));
 }
})();


//original code
//print all odd numbers in an array using IIFE function
var arr = [1, 2, 3, 5, 7, 79, 7, 2, 6, 9, 4];
(function() {
 for (var i = 0; i < arr.length; i++) {
 if (arr[i] % 2 === 0) {
 console.log(arr[i]);
 }}
})();

//debugged code

var arr = [1, 2, 3, 5, 7, 79, 7, 2, 6, 9, 4];
(function() {
 for (var i = 0; i < arr.length; i++) {
 if (arr[i] % 2 !== 0) {
 console.log(arr[i]);
 }}
})();
