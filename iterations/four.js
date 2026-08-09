const nums = [1,2,3]

// const total = nums.reduce(function (acc,curr){
//     console.log(`acc:${acc} and currval : ${curr}`)
//     return acc+curr
// },0)

const total = nums.reduce((acc,curr)=> acc+curr,0)
console.log(total)

const cart = [
    {
        item:"js",
        price:99
    },
    {
        item:"py",
        price:919
    },
    {
        item:"ml",
        price:199
    },
    {
        item:"ai",
        price:999
    },
]

const totalPrice = cart.reduce((acc,curr)=> acc+curr.price,0)
console.log(totalPrice)