// Data structure: Array

var list =["tiger","cat","dog","fish"];
console.log(list[2])


list.shift();
//Removes the first element from an array and returns it. If the array is empty, undefined is returned and the array is not modified.
list.pop();
// Removes the last element from an array and returns it. If the array is empty, undefined is returned and the array is not modified.

list.push("cats");
// Appends new elements to the end of an array, and returns the new length of the array.



var list =[
    ["cat","dog","bird","eagle"]
];
console.log(list[0][3]);
// here we have created an array and, created  another array inside of it
// to access the the array we will use list[here the array][here the index value of array].
