//Write a code to print the numbers in the array
//Output: 1234567891011
var numsArr = [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
var new_string = "";
 
for (var i = 0; i <= 10; i++) {
 new_string += numsArr[i]; 
}
console.log(new_string);

// Output: 1,2,3,4,5,6,7,8,9,10,11


var numsArr1 = [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
var new_string1 = "";
 
for (var i = 0; i < 11; i++) {
 new_string1 += numsArr1[i] + "," ;
}
console.log(new_string1);

//Write a code to print from last to first with spaces (Make sure there is no space after the last element 1)
//Output: 11 10 9 8 7 6 5 4 3 2 1
var new_string2 = "";
 
for (var i = 10; i >= 0; i-- ) {
 new_string2 += numsArr1[i] + " ";
}
console.log(new_string2);

//Write a code to replace the array value — If the number is even, replace it with ‘even’.
//Output:[ 1, “even”, 3, “even”, 5, “even”, 7, “even”, 9, “even”, … ]
var numsArr2 = [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
for (var i = 0; i <=10; i++) {
 if(numsArr2[i] %2 == 0 )
 {
 numsArr2[i] = "even";
 }
}
console.log(numsArr2);
//Output: [ “even”, 2, “even”, 4, “even”, 6, “even”, 8, “even”, 10, … ]
var numsArr3 = [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
for (var i = 0; i <=10; i++) {
 if(numsArr3[i] %2 !== 0 )
 {
 numsArr3[i] = "even";
}
}
console.log(numsArr3);
//Write a code to add all the numbers in the array
var numsArr4 = [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
var sum=0;
for (var i = 0; i <=10; i++) {
 sum +=numsArr4[i];
}
console.log(sum);
//Write a code to add the even numbers only
var numsArr5 = [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
var sum1=0;
for (var i = 0; i <10; i++) {
 if(numsArr5[i]%2==0){
 sum1 += numsArr5[i]
 }
}
console.log(sum1);
//Write a code to add the even numbers and subract the odd numbers
var numsArr6 = [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
var sum2=100;
for (var i = 0; i <=10; i++) {
 if(numsArr6[i]%2==0)
 {
 sum2 += numsArr6[i];
 }
 else
 {
 sum2 -= numsArr6[i];
 }
}
console.log(sum2);
//Write a code to print inner arrays
var numsArr7 = [[1, 2, 3, 4, 5],[ 6, 7, 8, 9, 10, 11]];
for (var i = 0; i < numsArr7.length; i++){
 console.log( numsArr7[i]);
}
//Write a code to print elements in the inner arrays
var numsArr8 = [[1, 2, 3, 4, 5],[ 6, 7, 8, 9, 10, 11]];
var str_all="";
for (var i = 0; i < numsArr8.length; i++){
     var inner_array=numsArr8[i];
    for(j=0;j<inner_array.length;j++){
        str_all += inner_array[j];
    }

}
console.log(str_all);

//Write a code to replace the array value — If the index is even, replace it with ‘even’.
var numsArr9 = [[1, 2, 3, 4, 5],[ 6, 7, 8, 9, 10, 11]];
var str_all=0;
for (var i = 0; i < numsArr9.length; i++) {
 var inner_array = numsArr9[i];
 for(var j = 0 ; j < inner_array.length;j++ ){
    if(inner_array[j] %2 !== 0 )
    {
        inner_array[j] = "even";
     }
 }
      
}
console.log(numsArr9);
//Write a code to print elements in the inner arrays in reverse
var numsArr10 = [[1, 2, 3, 4, 5],[ 6, 7, 8, 9, 10, 11]];
var str_all1="";
for (var i = numsArr10.length-1; i >= 0; i--){
     var inner_array=numsArr10[i];
    for(j=inner_array.length-1;j>=0;j--){
        str_all1 += inner_array[j] + " ";
    }

}
console.log(str_all1);
//Write a code to add elements in the inner arrays based on odd or even values
var numsArr11 = [[1, 2, 3, 4, 5],[ 6, 7, 8, 9, 10, 11]];
var sum_odd=0;
var sum_even=0;
for (var i = 0; i < numsArr11.length; i++){
     var inner_array=numsArr11[i];
    for(j=0;j<inner_array.length;j++){
        if(inner_array[j] % 2 !=0){
            sum_odd += inner_array[j];
        }else{
            sum_even += inner_array[j];
        }
    }
}
console.log(sum_odd);
console.log(sum_even);


