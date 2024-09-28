// array

const myArr = [0, 1, 2, 3, 4, 5]
const myHeors = ["shaktiman", "naagraj"]

const myArr2 = new Array(1, 2, 3, 4)
// console.log(myArr[1]);

// Array methods

// myArr.push(6)
// myArr.push(7)
// myArr.pop()

// myArr.unshift(9)
// myArr.shift()

// console.log(myArr.includes(9));
// console.log(myArr.indexOf(3));

// const newArr = myArr.join()

// console.log(myArr);
// console.log( newArr);


// slice, splice

console.log("A ", myArr);

const myn1 = myArr.slice(1, 3) // Doesnt manupliate original arrays starts from 1st range and end at last range and prints the vlaue btw it

console.log(myn1);
console.log("B ", myArr);


const myn2 = myArr.splice(1, 3) // initial array is manupliated, meaning the value which are input are printed and removed from orignal array.
console.log("C ", myArr);
console.log(myn2);