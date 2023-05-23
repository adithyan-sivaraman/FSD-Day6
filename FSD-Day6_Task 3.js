//original code
// Find the culprit

// fix.html

<!DOCTYPE html>
<html>
<body>
 <script>
 alert( “I’m JavaScript!’);
 </script>
 Whats the error in this ?
</body>
</html>

// fixed code 

<!DOCTYPE html>
<html>
<body>
 <script>
 alert( "I'm JavaScript!");
 </script>
 Whats the error in this ?
</body>
</html>

//original code
// Find the culprit and invoke the alert

// fix.html

<!DOCTYPE html>
<html>
<body>
 <script src=”script.js”></script>
</body>
</html>
// scripts.js

alert(“I’m invoked!”);

//fixed code
<!DOCTYPE html>
<html>
<body>
 <script src="script.js"></script>
</body>
</html>

// scripts.js

alert("I'm invoked!");

//original code
// Fix the below to alert Guvi geek

// fix.html

<!DOCTYPE html>
<html>
<body>
 <script src=”script.js”></script>
</body>
</html>
// script.js

let admin=9, fname=10.5; 
fname = "Guvi";
lname = "geek"
admin = fname+lname;
alert( admin ); // "Guvi geek"


//fixed code
// fix.html

<!DOCTYPE html>
<html>
<body>
 <script src="script.j"></script>
</body>
</html>
// script.js

let admin=9, fname=10.5; 
fname = "Guvi";
let lname = "geek"
admin = fname+" "+lname;
alert(admin); // "Guvi geek"

//original code
// fix.html
<!DOCTYPE html>
<html>
<body>
 <script src=”script.js”></script>
</body>
</html>
// script.js

let fname=10.5; 
fname = "Guvi";
lname = "geek"
let name = fname+lname;
alert( 'hello ${name}' );

//fixed code

// fix.html

<!DOCTYPE html>
<html>
<body>
 <script src="script.js"></script>
</body>
</html>
// script.js

 
let fname = "Guvi";
let lname = "geek"
let name = fname+" "+lname;
alert( 'hello ${name}' );

//original code
// Fix the below to alert sum of two numbers

// fix.html

<!DOCTYPE html>
<html>
<body>
 <script src=”script.js”></script>
</body>
</html>
// script.js

let a = prompt("First number?");
let b = prompt("Second number?");
alert(a + b);

//fixed code

// fix.html

<!DOCTYPE html>
<html>
<body>
 <script src="script.js"></script>
</body>
</html>
// script.js

let a = prompt("First number?");
let b = prompt("Second number?");
alert(parseInt(a)+parseInt(b));


//original code

If you run the below scritpt you will get “Code is Blasted”

// Explain Why the Code is blasted and how to diffuse it and get “Diffused”.

// fix.html

<!DOCTYPE html>
<html>
<body>
 <script src=”script.js”></script>
</body>
</html>
// script.js

var a = "2" > "12";
//Don't touch below this
if (a) {
  console.log("Code is Blasted")
}
else
{
  console.log("Diffused") 
}

//fixed code
// fix.html

<!DOCTYPE html>
<html>
<body>
 <script src="script.js"></script>
</body>
</html>
// script.js

var a = 2 > 12;
//Don't touch below this
if (a) {
  console.log("Code is Blasted")
}
else
{
  console.log("Diffused") 
}

//original code

// Fix the code to welcome the Employee

// fix.html

<!DOCTYPE html>
<html>
<body>
 <script src=”script.js”></script>
</body>
</html>
// script.js

let login = 'Employee';
let message = (login == 'Employee') ? :
  (login == 'Director') ? 'Greetings' :
  (login == '') ? 'No login' :
  '';
console.log(message);

// fixed code


// fix.html

<!DOCTYPE html>
<html>
<body>
 <script src="script.js"></script>
</body>
</html>
// script.js

let login = 'Employee';
let message = (login == 'Employee') ? 'Welcome' :
  (login == 'Director') ? 'Greetings' :
  (login == '') ? 'No login' :'';

  //original code

//   Fix the code to welcome the boss

// fix.html

<!DOCTYPE html>
<html>
<body>
<script src=”script.js”></script>
</body>
</html>
// script.js

let message;
let lock = 2;
//Dont change any code below this 
if (null || lock || undefined )
{
  message = "Go away";
}
else
{
 message = "welcome";
}
  console.log(message);


// fixed code

// fix.html

<!DOCTYPE html>
<html>
<body>
 <script src="script.js"></script>
</body>
</html>
// script.js

let message;
let lock = 2;
// Don't change any code below this
if (lock || null || undefined) {
  message = "Go away";
} else {
  message = "Welcome";
}
console.log(message);


//original code

// Change the code to print

// 3

// 2

// 1

// fix.html

<!DOCTYPE html>
<html>
<body>
 <script src=”script.js”></script>
</body>
</html>
// script.js

//You can change only 2 characters
let i = 3;
while (i) {
  console.log( --i );
}

//fixed code

// fix.html

<!DOCTYPE html>
<html>
<body>
 <script src="script.js"></script>
</body>
</html>
// script.js

//You can change only 2 characters
let i = 3;
while (i) {
  console.log(i--);
}

//original code
// Change the code to print even numbers

// fix.html

<!DOCTYPE html>
<html>
<body>
 <script src=”script.js”></script>
</body>
</html>
// script.js

//You are allowed to modify only one character 
for (let num = 2; num <= 20; num += 1) {
  console.log(num)
}

//fixed code

// fix.html

<!DOCTYPE html>
<html>
<body>
 <script src="script.js"></script>
</body>
</html>
// script.js

//You are allowed to modify only one character 
for (let num = 2; num <= 20; num += 2) {
  console.log(num)
}
