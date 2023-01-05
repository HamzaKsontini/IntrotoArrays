function emptyArray() {
    var emptyArray=[]
    return emptyArray
   }

   function numbersArray() {
    var numbersArray= [1, 2, 3, 4, 5]
     return  numbersArray
 }  

 function booleansArray() {
    var  booleansArray= [true, true, true]
      return booleansArray
  }  

  function stringsArray() {
    var stringsArray=['Hamza', 'ksontini']
      return stringsArray
  }  

  function arrayLength(array) {
   
    return array.length
}  



function firstElement(array) {
    return array[0]
 }  

 function lastElement(array) {
    return array[array.length-1]
 }  

 function getNthElement(array, number) {
    return array[number]
 }  

 function push(array, element) {
    array[array.length]=element ;
    return array
 }  

 function pop(array) {
    array.splice(array.length-1)
    return array
 }  

 function unshift(array, element) {
    array.splice(0,0,element)
    return array
 }  

 function shift(array) {
    array.splice(0,1)
    return arrau
 }  

 function reassignLast(array, element) {
    array[length-1]=element
    return array
 }  
Or array.splice(array.length-1)

 function reassignNthElement(array, index, element) {
    array[index]=element
    return array
 }  

 Advanced 

 function indexOf(array, element) {
    return array.indexOf(element) 
 }  


 function addElement(array, index, element) {
    array.splice(index,0,element)
    return array 
 }  

 function removeElement(array, index) {
    array.splice(index,1)
    return array
 }  

 function concatArrays(array, array2,array3) {
    return array.concat(array2,array3)
 }
 
 
 function joinStrings(array, string) {
    return array.join(string)
 }  


 function applySplit(string, splitter) {
    return string.split(splitter)
 }  

 function getElementsAfter(array, index) {
   return array.slice(index+1)
 }  

 function getElementsBefore(array, index) {
    return array.slice(0,index)
 }  


 function getAllElementsButFirst(array) {
    return array.slice(1)
 }  

 function getAllElementsButLast(array) {
    return array.slice(0,array.length-1)
 }  

 

 

