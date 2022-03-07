//Fix the code to get the largest of three.

let aa = (f,s,t) => {
    if(f>s &&f>t){
    console.log(f)}
    else if(s>f && s>t){
    console.log(s)}
    else{
    console.log(t)}
   }
   aa(1,2,3);
//Fix the code to Sum of the digits present in the number

let n1 = 123;
function add(n){
    
let a = n.toString().split('').map(Number)
  
let sum =0;
for(var i=0;i<a.length;i++){
 sum +=a[i];
 }
 return sum;
}
console.log(add(n1));

//Fix the code to Sum of all numbers using IIFE function
const arri = [9,8,5,6,4,3,2,1];
(function(e) {
 let sum = 0;
 for (var i = 0; i < e.length; i++){
 sum += e[i];
 }
 console.log(sum);
})(arri);
//Fix the code to gen Title caps.

var arr1 = ["guvi", "geek", "zen", "fullstack"];
var ano = function(arro) {
 for (var i = 0; i < arro.length; i++) {
 console.log(arro[i][0].toUpperCase() + arro[i].substr(1));
 }
}
ano(arr1);

//Fix the code to return the Prime numbers

const newArray=[1,3,2,5,10];
const myPrime=newArray.filter(num=>{
 for(let i=2;i<num;i++){
 if(num%i===0)
 {
 return false;
 }else{
     return true;
 }
 }if(num===2){
    return true
 }
 
});
console.log(myPrime);
//Fix the code to sum the number in that array
const num = [10, 20, 30, 40,50,60,70,80,90,100] 
const sum =num.reduce((a, b) =>a + b);
console.log(sum);

//Fix the code to rotate an array by k times and return rotated array using IIFE function
var arr = [1, 2, 3, 6, 8, 6, 1, 9, 10, 12, 13];
var k = 3;
(function() {
 out = arr.slice(k , arr.length);
 var count = out.length;
 for (var i = 0; i < k ; i++) {
 out[count] = arr[i];
 count += 1;
 }
 console.log(out);})();

 //Fix the code to gen Title caps.
 var arr = ["guvi", "geek", "zen", "fullstack"];
(function() {
 for (var i = 0; i < arr.length; i++) {
 console.log(arr[i][0].toUpperCase() + arr[i].substr(1));
 }
})(arr);
//print all odd numbers in an array using IIFE function
var arr = [1, 2, 3, 5, 7, 79, 7, 2, 6, 9, 4];
(function() {
 for (var i = 0; i < arr.length; i++) {
 if (arr[i] % 2 !== 0) {
 console.log(arr[i]);
 }}
})();

//Fix the code to reverse.

(function(str){
    let str1 = str.split("").reverse().join("");
    console.log(str1); 
   })("abcd")

   //Fix the code to remove duplicates.
   var res = function(arr){
    let newArr = [];
    for(var i=0; i < arr.length; i++){
    
    if(arr.indexOf(arr[i]) === i) {
    newArr.push(arr[i]);
    } 
}
    console.log(newArr)
   }
   res(["guvi","geek","guvi","duplicate","geeK"])

// Fix the code to give the below output:
let arra =[[["firstname","vasanth"],["lastname","Raje"],["age",24],["role","JSWizard"]],
[["firstname","Sri"],["lastname","Devi"],["age",28],["role", "Coder"]]];
var final=[];
let newObject1={};
let newObject2={};
while(arra.length!=0)
{
 var outer_remove = arra.shift();
 
 while(outer_remove.length!=0)
 {if(arra.length === 1){
    var inner_remove = outer_remove.shift()
    var key = inner_remove[0]
    var value =inner_remove[1]
    newObject1[key]=value
 }
 else{
    var inner_remove = outer_remove.shift()
    var key = inner_remove[0]
    var value =inner_remove[1]
    newObject2[key]=value
 }
 }
 if(arra.length === 1){
    final.push(newObject1)
 }else{
    final.push(newObject2)
 }

}
console.log(final);
//Fix the code to give the below output:
var as=[12,34,5,6,2,56,6,2,1];
let temp = 0;
var s=as.reduce(function(a,c){
 if(a%2!=0 && c%2!=0)
 {
     temp = a+c
 return a+c;
 }else if(a%2!=0){
 return a 
 }else if(c%2!=0){
   return temp!=0 ? temp+c:c}
else if(temp != 0){
       return temp
   }else{
       return 0
   }
 });
console.log(s);
//Fix the code to give the below output:
aa = data=>{
    var a=data;
    var l='';
   for(i=0;i<a.length-1;i++){
   
    var s=a[i+1]
    var b=a[i]
    l+=s
    l+=b
    i=i+1
   }
   if((a.length%2)!=0){
    l+=a[a.length-1]
   }
   console.log(l);
   }
   aa("1234");
