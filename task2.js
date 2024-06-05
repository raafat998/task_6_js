



/*
1
Correct the syntax error
 [ 1,7  9  45, ]

 ["Str" "alex","moh"

 'the','fox' 'over' lazy, 'dog',  ]

-------------------------------------------------------------------------------------------------*/

// [ 1,7  ,9 , 45 ]

// ["Str" ,"alex","moh"]

// ['the','fox', 'over' ,lazy, 'dog'  ]


/*-------------------------------------------------------------------------------------------------
2
What the index of "Banana","Tomato"
var fruits=["Tomato","Banana","Watermelon"]
-------------------------------------------------------------------------------------------------*/


// var fruits = ["Tomato", "Banana", "Watermelon"];

// var bananaIndex = fruits.indexOf("Banana");
// var tomatoIndex = fruits.indexOf("Tomato");

// console.log("Index of Banana:", bananaIndex);
// console.log("Index of Tomato:", tomatoIndex);

/*-------------------------------------------------------------------------------------------------
3
Create an array represents your:
1- Favorite Food (5)
2- Favorite Sport (3)
3- Favorite Movie (4)
----------------------------------------------------------------------------------------------------*/
// var favoriteFoods = ["Pizza", "Sushi", "Pasta", "Tacos", "Ice Cream"];

// var favoriteSports = ["Soccer", "Basketball", "Tennis"];

// var favoriteMovies = ["Inception", "The Matrix", "The Shawshank Redemption", "Interstellar"];


/*-----------------------------------------------------------------------------------------------
4
Create a function called firstOfArray
that take an array as a parameter
and return the first element in an array

Ex: firstOfArray([1,4,5]) => 1
Ex: firstOfArray(["t","u","g","x"]) => "t"
---------------------------------------------------------------------------------------------------------*/
var arr1 = [1,5,7,4,9];
function firstOfArray (){
console.log(arr1[0]);
return
}
console.log(firstOfArray())
/*---------------------------------------------------------------------------------------------------------
5
Create a function called lastOfArray
that take an array as a parameter
and return the first element in an array

Ex: lastOfArray([1,4,5]) => 5
Ex: lastOfArray(["t","u","g","x"]) => "x"
-----------------------------------------------------------------------------------------------------------*/
// var arr2 = [1,5,7,4,9];
// function lastOfArray(arr) {
//   return arr[arr.length - 1];
// }
// console.log(lastOfArray(arr2));
/*----------------------------------------------------------------------------------------------------------
6
Using console make this array to be like this one (push, unshift, shift, pop)

var array = [0,5,7,9]
=> [1,3,4,6,8,9,10]
-----------------------------------------------------------------------------------------------------------*/

var array = [0, 5, 7, 9];


array.shift(); // [5, 7, 9]


array.shift(); // [7, 9]

array.unshift(6); //[6,7,9]
array.unshift(4); //[4,6,7,9]
array.unshift(3); //[3,4,6,7,9]
array.unshift(1); //[1,3,4,6,7,9]

array.splice(4, 0, 8); //[1, 3, 4, 6, 8, 7, 9]

array.splice(5, 1); // remove 7 [1, 3, 4, 6, 8, 9] 


array.push(10); // add 10 in the last  index [1, 3, 4, 6, 8, 9, 10]

console.log(array);

/*-------------------------------------------------------------------------------------------------------------
7
Using the console try to figure out what the thing thats (push, unshift, shift, pop) return to you

var array2 = [5,9,-7,3.5]
------------------------------------------------------------------------*/
var array3 = [5,9,-7,3.5];
array3.shift(); // [9,-7,3.5]
array3.unshift(4); // [4,9,-7,3.5]
array3.push(10); // [4,9,-7,3.5,10]
array3.pop();//[4,9,-7,3.5]



/*----------------------------------------------------------------------------------
8
Create a function called middleOfArray
that take an array as a parameter
and return the middle element in an array if it is have an odd elemnets
and return the two middle elemnt in an array if it is have an even elemnets

Ex: middleOfArray([1,4,5]) => 4
Ex: middleOfArray(["t","u","g","x"]) =>"u and g"
--------------------------------------------------------------------------------------*/
function middleOfArray(arr) {
  var length = arr.length;
  var middleIndex = Math.floor(length / 2);

  if (length % 2 === 0) {
    return arr[middleIndex - 1] + " and " + arr[middleIndex];
  } else {
    return arr[middleIndex];
  }
}


console.log(middleOfArray([1, 4, 5])); 
console.log(middleOfArray(["t", "u", "g", "x"]));

/*-------------------------------------------------------------------------------------
9
Using assignment operator (=)
make the animals array have these animals
var animals = ['cat', 'ele', 'bird']
animals; => ['zebra', 'elephant']
** hint: animals[0]=something


var nums= [1,2,3,8,9]
nums => [5,-22,3.5,44,98,44]
-----------------------------------------------------------------------------------------*/
var animals = ['cat', 'ele', 'bird'];


animals[0] = 'zebra';
animals[1] = 'elephant';

animals.length = 2;

console.log(animals); //  ['zebra', 'elephant']

var nums = [1, 2, 3, 8, 9];


nums[0] = 5;
nums[1] = -22;
nums[2] = 3.5;
nums[3] = 44;
nums[4] = 98;

nums.push(44) ; // [5, -22, 3.5, 44, 98, 44]

console.log(nums);

/*-----------------------------------------------------------------------------------------
10
Create a function called indexOfArray
that accept an array and index
and return what this array have in this index

var nums= [1,2,3,8,9]
Ex: indexOfArray(nums,3) => 8
Ex: indexOfArray(nums,1) => 2
Ex: indexOfArray(nums,4) => 9

**try more cases by your self
-----------------------------------------------------------------------------------------*/
function indexOfArray(arr, index) {

  if (index >= 0 && index < arr.length) {
    return arr[index];
  } else {
    return "Index out of range";
  }
}

var nums = [1, 2, 3, 8, 9];

console.log(indexOfArray(nums, 3)); 
console.log(indexOfArray(nums, 1)); 
console.log(indexOfArray(nums, 4)); 

/*-----------------------------------------------------------------------------------------
11
Create a function called arrayExceptLast
that accept an array
and return the entire array except the last elemnt
** hint: search abou the function that will cut the array on MDN
var nums= [1,2,3,8,9]
Ex: arrayExceptLast(nums) =>  [1,2,3,8]

**try more cases by your self
----------------------------------------------------------------------------------------------*/
var nums= [1,2,3,8,9]
function arrayExceptLast(){
nums.pop();
console.log(nums)
return
}
console.log(arrayExceptLast())
/*---------------------------------------------------------------------------------------------
12
Create a function called addToEnd
that accept an array and value
and return the entire array with add this value to the end of this array

var nums= [1,2,3,8,9]
Ex: addToEnd(nums,55) =>  [1,2,3,8,55]

**try more cases by your self
------------------------------------------------------------------------------------------------*/
var nums3= [1,2,3,8,9]
function addToEnd(){
nums3.push(55);
console.log(nums3)
return
}
console.log(addToEnd())
//-----------------------------------------------------------------------------------------------
// all the exercises below should solved 2 times: 1- for loop 2- while lopp
/*----------------------------------------------------------------------------------------------
13
Create a function called sumArray
that accept an array
and return the summation of all elemnt in this array

var nums= [1,2,3,8,9]
Ex: sumArray(nums) => 23

** solve it one time using for loop and another using while loop
**try more cases by your self
---------------------------------------------------------------------------------------------------------*/
var num5= [1,2,3,8,9]
function sumArray(){
  var sum = 0; 

  // for (var i = 0; i < num5.length; i++) { 
  //   sum += num5[i];
  // }

  i=0;
  while(i < num5.length){
    sum += num5[i];
    i++
  }

  return sum; 
}
console.log(sumArray())
/*--------------------------------------------------------------------------------------------------------
14
Create a function called minInArray
that accept an array
and return the minimum value inside this array

var nums= [1,2,3,8,9]
Ex: minInArray(nums) => 1

** solve it one time using for loop and another using while loop
**try more cases by your self
-----------------------------------------------------------------------------------------------*/
var num7= [1,2,3,8,9];
function minInArray(){
  let minNum = num7[4];

    // for(i=0;i<num7.length;i++)
    // {
      
    //   if(num7[i]<minNum){
    //     minNum = num7[i];
    //   }
    // }

    i=0;
    while(i<num7.length){
      if(num7[i]<minNum){
        minNum = num7[i];
      }
      i++
    }

    return minNum;
}
console.log(minInArray());



/*----------------------------------------------------------------------------------------------
15
Create a function called removeFromArray
that accept an array and elemnt to remove
and return the array after remove this elemnt from it

var nums= [1,2,3,8,9]
Ex: minInArray(nums,8) => [1,2,3,9]

** solve it one time using for loop and another using while loop
**try more cases by your self
----------------------------------------------------------------------------------------------------*/
function removeFromArray(arr, element) {
  let resultArray = [];
  
  // for (let i = 0; i < arr.length; i++) {
  //   if (arr[i] !== element) {
  //     resultArray.push(arr[i]);
  //   }
  // }
  let i = 0;
  
  while (i < arr.length) {
    if (arr[i] !== element) {
      resultArray.push(arr[i]);
    }
    i++;
  }
  
  
  return resultArray;
}

var nums = [1, 2, 3, 8, 9];
console.log(removeFromArray(nums, 8)); // Output: [1, 2, 3, 9]
console.log(removeFromArray(nums, 1)); // Output: [2, 3, 8, 9]

/*-----------------------------------------------------------------------------------------------------------
16
Create a function called oddArray
that accept an array
and return an array have only the odd elemnts

var nums= [1,2,3,8,9]
Ex: oddArray(nums) => [1,3,9]

** solve it one time using for loop and another using while loop
**try more cases by your self
----------------------------------------------------------------------------------*/
var nums8= [1,2,3,8,9]
function oddArray(arr){
  let resultArray = [];
  // for(i=0;i<arr.length;i++){
  //   if(arr[i] % 2 !== 0){
  //     resultArray.push(arr[i]);
  //   }
  // }

  i=0;
  while(i<arr.length){
    if(arr[i] % 2 !== 0){
           resultArray.push(arr[i]);
        }
        i++
  }
  return resultArray;
}
console.log(oddArray(nums8));
/*--------------------------------------------------------------------------------
17
Create a function called aveArray
that accept an array
and return the average of the numbers inside this array

var nums= [1,2,3,8,9]
Ex: aveArray(nums) => 4.6

var nums2= [1,2,3,8,9,77]
Ex: aveArray(nums) => 16.6

** solve it one time using for loop and another using while loop
**try more cases by your self
--------------------------------------------------------------*/

var num9= [1,2,3,8,9]
function aveArray(){
  var sum = 0; 

  // for (var i = 0; i < num5.length; i++) { 
  //   sum += num5[i] / num9.length;
  // }

  i=0;
  while(i < num5.length){
    sum += num5[i]  / num9.length;
    i++
  }

  return sum; 
}
console.log(aveArray())
/*------------------------------------------------------
18
Create a function called shorterInArray
that accept an array of strings
and return the shortest string inside this array (first)

var strings= ["alex","mercer","madrasa","rashed2","emad","hala"]
Ex: shorterInArray(strings) => "alex"

** solve it one time using for loop and another using while loop
**try more cases by your self
-------------------------------------------------------------------------*/
var strings= ["alex","mercer","madrasa","rashed2","emad","hala"];
newString=[];
shortString=strings[5];
function shorterInArray(){

  // for (var i = 0; i < strings.length; i++){
  //   if(strings[i]<shortString){
  //     shortString=strings[i]
  //   }
  // }

    i=0;
    while ( i < strings.length) {
      if(strings[i]<shortString){
            shortString=strings[i]
      }
      i++
    }
  return shortString
}
console.log(shorterInArray())

/*-------------------------------------------------------------------------------
19
Create a function called repeatChar
that accept a string and char
and return the times that this char repeat inside this string

var string= "alex mercer madrasa rashed2 emad hala"
Ex: repeatChar(string,"a") => 6
Ex: repeatChar(string,"z") => 0

** solve it one time using for loop and another using while loop
**try more cases by your self
-----------------------------------------------------------------------------*/
var string= "alex mercer madrasa rashed2 emad hala"
function repeatChar(str, char=prompt('enter a letter :')) {
  let count = 0;

  // for (let i = 0; i < str.length; i++) {
  //   if (str[i] === char) {
  //     count++;
  //   }
  // }


//   let i = 0;
//     while(i < str.length){
//       if (str[i] === char) {
//         count++;
//       }
//     i++
//     }
    
//   return count;
// }
// console.log(repeatChar(string));

/*----------------------------------------------------------------------------------------
20
Create a function called evenIndexOddLength
that accept an array of strings
and return a new array that have the string with odd length in even index

var strings= ["alex","mercer","madrasa","rashed2","emad","hala"]
Ex: evenIndexOddLength(strings) => ["madrasa"]

** solve it one time using for loop and another using while loop
**try more cases by your self
------------------------------------------------------------------------*/
var strings3= ["alex","mercer","madrasa","rashed2","emad","hala"];
function evenIndexOddLength(){
  // for(let i=0;i<strings3.length;i++){
  //   if(strings3.length%2 == 0){
  //     strings3.pop();
  //   }
  // }
   i=0
  while(i<strings3.length){
      if(strings3.length%2 == 0)
     {
      strings3.pop();
     }
      i++
  }
  return strings3
}
console.log(evenIndexOddLength())
/*--------------------------------------------------------------
21
Create a function called powerElementIndex
that accept an array of number
and return a new array that have the elemnt power by the index of it self

var nums= [44, 5, 4, 3, 2, 10]
Ex: powerElementIndex(nums) => [0, 5, 16, 27, 16, 100000]

** solve it one time using for loop and another using while loop
**try more cases by your self
--------------------------------------------------------------------------------------------------------------------*/
var nums11= [44, 5, 4, 3, 2, 10];
newNum=[];
function powerElementIndex(){

  //  for (var i = 0; i < nums11.length; i++){
  //   nums11[i]= nums11[i]*nums11[i];
  //  }

     i=0;
     while ( i < nums11.length) {
      nums11[i]= nums11[i]*nums11[i];
      i++
     }
  return nums11
}
console.log(powerElementIndex())
}
/*-------------------------------------------------------------------------------------------------------------------
22
Create a function called evenNumberEvenIndex
that accept an array of nums
and return a new array that have the even number in even index

var nums= [5,2,2,1,8,66,55,77,34,9,55,1]
Ex: evenNumberEvenIndex(nums) => [2,8,34]

** solve it one time using for loop and another using while loop
**try more cases by your self
-------------------------------------------------------------------------------------------------------------*/
var nums10= [5,2,2,1,8,66,55,77,34,9,55,1]
function evenNumberEvenIndex(arr) {
  let newNum = []; 

  // for (let i = 0; i < nums10.length; i++) {
  //   if (i % 2 === 0 && nums10[i] % 2 === 0) { 
  //     newNum.push(nums10[i]); 
  //   }
  // }
  
  
  

  return newNum;
}
  console.log(evenNumberEvenIndex());
