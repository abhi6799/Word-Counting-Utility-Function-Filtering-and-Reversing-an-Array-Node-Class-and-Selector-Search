/**
 * This utility function should create a shallow copy of the reversed array,
 * filtered down to just the elements from the given array that pass the test
 * implemented by the provided callbackFn function.
 *
 * Parameters:
 *  array: The array will be a numeric array and can also be empty.
 *  callbackFn: A function to execute for each element in the array. It should
 *  return a truthy value to keep the element in the resulting array, and a falsy
 *  value otherwise. The function is called with the following
 *      arguments:
 *          element - The current element being processed in the array.
 *          index - The index of the current element being processed in the array.
 *  for example the callbackFn can filter odd or even numbers.
 *
 * @param {Array} array the array
 * @param {Function} callbackFn the callback function
 * @return {Array} the filtered and reversed array.
 */
// export const filterAndReverse = (array, callbackFn) => {
//     return array;
// }

let ar=[1,2,3,4,5,6,7,8];
function check(value,index) {
    
    if(value%2==0){
        return true;
    }
  
}

const filterAndReverse = (array, callbackFn) => {
    let filteredArray=[];
    for (let i = 0; i < array.length; i++) {
       if(callbackFn(array[i],i)){
       
           filteredArray.push(array[i])
       }
        
    }
    array=[];
   for (let i = 0; i < filteredArray.length; i++) {
       array[i]=filteredArray[filteredArray.length-i-1]
   }
   return array
}
filterAndReverse(ar,check);

// Example callback function to filter even numbers
const isEven = (number) => number % 2 === 0;
 
// Example array of numbers
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
 
// Use the filterAndReverse function
const result = filterAndReverse(numbers, isEven);
 
// Display the output
console.log('Filtered and Reversed Array:', result);
