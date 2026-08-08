const user = {
    username:"bhargav",
    price:999,
    welcomeMessage: function(){
        console.log(`${this.username} welcome to website`)
        console.log(this)
    }
}

//this? here also should be some current context
user.welcomeMessage()
user.username="ram"
user.welcomeMessage()

console.log(this) // {} empty obj
// but in browser it shows window

// function chai(){
//     let username="bhargav"
//     console.log(this) // shows some thing
//     console.log(this.username) // fgives undefined
// }
// chai()

// const chai = function (){
//     let username="bhargav"
//     console.log(this) // shows something
//     console.log(this.username) // fgives undefined
// }

const chai = () => {
    let username="bhargav"
    console.log(this) // {} empty
    console.log(this.username) // fgives undefined
}
chai()

const add = (num1,num2)=>{
    return num1+num2
}

// add(2,3)
console.log(add(2,3))

// implicit return

// const add2 = (nums1,nums2) => nums1+nums2
const add2 = (nums1,nums2) => (nums1+nums2) // no need to retrn

// returnn obj
const add3 = (nums1,nums2) => ({name:"bhargav"})

console.log(add2(3,4))
console.log(add3(3,4))

// const arr=[1,2,3,4,5]

// arr.forEach(()=>())