https://medium.com/@reach2arunprakash/www-guvi-io-zen-4fa483a7d359


//original code 
// Write a code to print the numbers in the array

// Output: 1234567891011
var numsArr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
var new_string = “”;

for (var i = 1; i < 11; i--) {
    new_string += numsArr[i]
}
console.log(new_string);

//debugged code
var numsArr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
var new_string = "";

for (var i = 0; i < numsArr.length; i++) {
    new_string += numsArr[i]
}
console.log(new_string);

//original code 
// Write a code to print the numbers in the array

// Output: 1,2,3,4,5,6,7,8,9,10,11
var numsArr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
var new_string = “”;

for (var i = 1; i < 11; i++) {
    new_string += numsArr[i] + , 
}
console.log(new_string);

//debugged code
var numsArr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
var new_string = "";

for (var i = numsArr.length - 1; i >= 0; i--) {
    new_string += numsArr[i] + " ";
}
console.log(new_string)

//original code
// Write a code to print from last to first with spaces (Make sure there is no space after the last element 1)

// Output: 11 10 9 8 7 6 5 4 3 2 1
var new_string = “”;

for (var i = 11; i > 0; i — ) {
    new_string += numsArr[i] + “ “
}
console.log(new_string);

//debugged code
var new_string = "";
var numsArr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];

for (var i = numsArr.length - 1; i >= 0; i--) {
    new_string += numsArr[i] + " ";
}
console.log(new_string.slice(0, new_string.length - 1));


// original code
// Write a code to replace the array value — If the number is even, replace it with ‘even’.
// Output:[ 1, “even”, 3, “even”, 5, “even”, 7, “even”, 9, “even”, … ]

var numsArr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
for (var i = 0; i <= 10; i++) {
    if (numsArr[i] % 2 == 0) {
        numsArr[i] = odd
    }
}
console.log(numsArr);

//debugged code 
var numsArr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
for (var i = 0; i < numsArr.length; i++) {
    if (numsArr[i] % 2 == 0) {
        numsArr[i] = "even";
    }
}
console.log(numsArr);

//original code 
// Write a code to add all the numbers in the array

// Output: 66

var numsArr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
for (var i = 0; i <= 10; i++) {
    var sum;
    sum += numsArr[i]
}
console.log(sum);

//debugged code 
var numsArr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
var sum = 0;
for (var i = 0; i < numsArr.length; i++) {

    sum += numsArr[i]
}
console.log(sum);

// original code

// Write a code to add the even numbers only
// Output: 30

var numsArr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
var sum = 0;
for (var i = 0; i < 10; i++) {
    if (numsArr[i] % 2 == 0);
    sum += numsArr[i]
}
console.log(sum);

//debugged code
var numsArr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
var sum = 0;
for (var i = 0; i < numsArr.length; i++) {
    if (numsArr[i] % 2 == 0) {
        sum += numsArr[i];
    }
}
console.log(sum);

//original code
// Write a code to add the even numbers and subract the odd numbers
// Output: 94

var numsArr = [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
var sum=100;
for (var i = 0; i <=10; i++) {
 if(numsArr[i]%2!=0);
 {
 sum += numsArr[i]
 }
 else
 {
 sum -= numsArr[i]
 }
}
console.log(sum);

//debugged code
var numsArr = [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
var sum=100;
for (var i = 0; i <numsArr.length; i++) {
 if(numsArr[i]%2===0)
 {
 sum += numsArr[i];
 }
 else
 {
 sum -= numsArr[i];
 }
}
console.log(sum);

//original code
// Write a code to print inner arrays
// Output:

// Array(5) [ 1, 2, 3, 4, 5 ]
// Array(6) [ 6, 7, 8, 9, 10, 11 ]

var numsArr = [[1, 2, 3, 4, 5][ 6, 7, 8, 9, 10, 11]];
for (var i = 0; i < numsArr.length; i++); {
 console.log( numsArr[i])
}

//debugged code
var numsArr = [[1, 2, 3, 4, 5], [6, 7, 8, 9, 10, 11]];
for (var i = 0; i < numsArr.length; i++) {
  console.log(numsArr[i]);
}

//original code 

// Write a code to print elements in the inner arrays
// Output: 1234567891011

var numsArr = [[1, 2, 3, 4, 5],[ 6, 7, 8, 9, 10, 11]];
var str_all=0;
for (var i = 0; i < numsArr.length; i++) {
 var inner_array = numsArr[i];
 for(var j = 0 ; j < inner_array.length;i++ )
     str_all +=inner_array[j]
}
console.log(str_all);

//debugged code
var numsArr = [[1, 2, 3, 4, 5],[ 6, 7, 8, 9, 10, 11]];
var str_all="";
for (var i = 0; i < numsArr.length; i++) {
 var inner_array = numsArr[i];
 for(var j = 0 ; j < inner_array.length;j++ )
     str_all +=inner_array[j]
}
console.log(str_all);

//original code

// Write a code to print elements in the inner arrays in reverse
// Output: 11 10 9 8 7 6 5 4 3 2 1

var numsArr = [[1, 2, 3, 4, 5],[ 6, 7, 8, 9, 10, 11]];
var str_all=0;
for (var i = 0; i < numsArr.length; i++) {
 var inner_array = numsArr[i];
 for(var j = inner_array.length; j < 0 ;j-- )
     str_all +=inner_array[j]
}
console.log(str_all);

//debugged code
var numsArr = [[1, 2, 3, 4, 5],[ 6, 7, 8, 9, 10, 11]];
var str_all=""
for (var i = numsArr.length-1; i >=0; i--) {
 var inner_array = numsArr[i];
 for(var j = inner_array.length-1; j >= 0 ;j-- )
     str_all +=inner_array[j]+" "
}
console.log(str_all.slice(0,str_all.length-1));