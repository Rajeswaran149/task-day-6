alert("I'm invoked!");

alert("I'm JavaScript!");
alert('Hello') // this line is not having semicolon
alert("World")
alert(3 +1+ 2); // this is multiple line code and its working

//Fix the below to alert Guvi geek

let admin=9, fname=10.5; 
fname = "Guvi";
lname = "geek";
admin = fname+lname;
alert( admin ); // "Guvi geek"

//let fname=10.5; 
fname = "Guvi";
lname = "geek";
 name = fname+lname;
alert(  `hello ${name}` );

let a = prompt("First number?");
let b = prompt("Second number?");
alert(a + b);

//If you run the below scritpt you will get "Code is Blasted"

var aa = ("2" > "12");
//Don't touch below this
if (aa) {
 alert("Code is Blasted");
}
else
{
 alert("Diffused"); 
}

//How to get the success in console.

let a1 = prompt("Enter a number?");
//Don't modify any code below this
if (a1) {
 console.log( 'OMG it works for any number inc 0' );
}
else
{
 console.log( "Success" );
}
//How to get the correct score in console.
let value = prompt(`How many runs you scored in this ball`);
if (value === 4) {
      console.log("You hit a Four");
} else if (value === 6) {
      console.log("You hit a Six");
} else {
      console.log("I couldn't figure out");
}

//  Fix the code to welcome the Employee

let login = 'Employee';
let message = (login == 'Employee') ? "welcome the Employee":
  (login == 'Director') ? 'Greetings' :
  (login == '') ? 'No login' :'';
console.log(message);

//Fix the code to welcome the boss

let message1=2;
if (message1==null || message1==2 || message1==undefined )
{
  message1 = "welcome boss";
}
else
{
  message1 = "Go away";
}
  console.log(message1);

//Fix the code to welcome the boss

let message2="";
let lock = 2;
//Dont change any code below this 
if (message2==null || message2==lock || message2==undefined )
{
  message2 = "Go away";
}
else
{
 message2 = "welcome";
}
  console.log(message2);

  //Fix the code to welcome the boss
//Dont change any code below this
let message3="";
let lock1 = 2;
if (message3==lock1 && message3==" " || message3==undefined )
{
  message3 = "Go away";
}
else
{
 message3 = "welcome";
}
console.log(message3);
// //Change the code to print


let i = 3;
while (i>0) {
  console.log( i-- );
}
//Change the code to print 1 to 10 in 4 lines
let num ="";
let count=0;
for(let i=1;i<11;i++){
    if(count===2){
        num += i+"\n"
       count =0
    }else{
        num += i;
        count +=1
    }
}
console.log(num);
//Change the code to print even numbers
//You are allowed to modify only one character 
let even ="";
for (let num = 2; num <= 20; num += 1) {
    if(num%2==0){
        even +=num+"\n";
    }
    
  }
  console.log(even);
  //Change the code to print all the gifts
  let gifts = ["teddy bear", "drone", "doll"];
for (let i = 0; i < 3; i++) {
  console.log(gifts[i]);
}
//Fix the code to disarm the bomb.
let countdown = 100;
while (countdown >= 0) {
  countdown--;
  if(countdown == 0)
  {
   console.log("bomb triggered");
  }
}
//Whats the msg printed and why?
var lemein = "0";
var lemeout = 0;
var msg = "";
if (lemein) {
 msg += "hi";
 }
if (lemeout) {
 msg += "Hello";
}
console.log(`0 is falsy value."0" is truthy value,so printed : ${msg}`);