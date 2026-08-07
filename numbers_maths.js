const score = 400
console.log(score)

const balance = new Number(100) //100% number
console.log(balance);

console.log(balance.toString().length)
console.log(balance.toFixed(2))

const other = 23.8966
const other1=1123.6754
console.log(other.toPrecision(3))
console.log(other1.toPrecision(2)) // 

const hunders = 1000000
console.log(hunders.toLocaleString('en-IN'))

//------------------------------------------------------------------------------
console.log(Math); // use inspect to know all properties about it
console.log(Math.abs(-4))
console.log(Math.round(4.6))
console.log(Math.ceil(4.2))
console.log(Math.floor(4.2))
console.log(Math.min(2,4,1,6)) //  sim max
console.log(Math.sqrt(4))

console.log(Math.random()) // between 0 to 1
console.log((Math.random()*10)+1);
console.log(Math.floor(Math.random()*10)+1)

const min = 10
const max = 20
(Math.random()*(max-min+1))+min