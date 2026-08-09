const nums = [1,2,3,4,5,6,7,8,9,10]
console.log(nums)
const newNums = nums.map((num)=> num+10)
console.log(nums)
console.log(newNums)

// chaining
const nl = nums
            .map((num)=> num*10) // let here it return x
            .map((num)=>num+1) // happens x+1
            .filter((num)=> num>40)

console.log(nl)