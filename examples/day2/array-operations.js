let items = [8, 1, 5, 4, 3, 2, 6, 7];
console.log('**** Array Items ****');
console.log(items);
// to add a new element
items.push(15);
console.log('**** Array Items ****');
console.log(items);
// to remove an element, 2nd argument is to specify the number of elements from that index
// 1st argument is the starting point
items.splice(items.length - 3, 1);
console.log('**** Array Items ****');
console.log(items);
// filter
let filteredItems = items.filter((value) => value < 5);
console.log('Filtered Items: '+filteredItems);
// reduce: iterates over the elements in the array and returns the accumulated result
let result = items.reduce((previous, current) => previous + current);
console.log('Reduce result = '+result);
// sort: it is to sort the elements, based on 0 or +ve or -ve it will arrange
let sortedResult = items.sort((a, b) => a - b); 
console.log('Sorted result = '+sortedResult);
let sortInDesc = items.sort((a, b) => b - a);
console.log('Sorted in Descending: '+sortInDesc);
