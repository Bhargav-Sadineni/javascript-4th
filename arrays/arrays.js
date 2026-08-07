const myArr = [0,1,2,3,4,5,true,"hitesh"]
const myHeros = ["a","b"]
const myArr2 = new Array(1,2,3,4)
// js arrays are resizable
// zero based indexing
// arrays copy makes shallow copies (both share same reference point) 
// deep copies do not share same reference 

console.log(myArr[0])


// Array methods
myArr.push(6)
console.log(myArr);
myArr.pop()
console.log(myArr)
myArr.unshift(10) // not good takes more time
console.log(myArr)
myArr.shift()
console.log(myArr)
console.log(myArr.includes(9));
console.log(myArr.indexOf(9))
console.log(myArr.indexOf(5))

const newArr = myArr.join()
console.log(myArr);
console.log(newArr)
console.log(typeof newArr)

// slice,splice
console.log("A ",myArr);

const myn1 = myArr.slice(1,3); // not change array
console.log(myn1)
console.log("B ",myArr)


const myn2 = myArr.splice(1,3); // removes that elements from array
console.log(myn2);
console.log("C ",myArr);

