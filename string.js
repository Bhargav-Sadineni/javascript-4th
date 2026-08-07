const name = "bhargav"
const repoCount=50

// it is not reccomended
console.log(name+repoCount+" Value") 

// use backtick use this same as above but it is reccomended
// String interpolation
console.log(`Hello my name is ${name} and my repo count is ${repoCount}`);

const gameName = new String("sadineni") // in console it appears as object

console.log(gameName[0]);
console.log(gameName.__proto__) // to see methods of strings

console.log(gameName.length);
console.log(gameName.toUpperCase()); // does not change original value
console.log(gameName.charAt(4));
console.log(gameName.indexOf('n'))

const newString = gameName.substring(0,4)
console.log(newString)
console.log(gameName.substring(5,2))

const another = gameName.slice(-7,4)
console.log(another)

const newString1 = "     ram      "
console.log(newString1);
console.log(newString1.trim())

const url = "https://bhargav.com/bhargav%20sadineni"

console.log(url.replace('%20','-'))

console.log(url.includes('bhargav'))

const x = "bhargav-sadineni"
console.log(x.split('-'))