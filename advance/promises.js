// fetch('http://bhargav.com').then().catch().finally()
const one = new Promise(function(resolve,reject){ //JavaScript immediately creates a Promise object and returns it.
    // Do an async task
    // DB calls, cryptography, network
    setTimeout(function(){
        console.log('Async task is complete')
        // here the async function is completed but whhy then is not called
        resolve(); // now promise executed
    },1000)
}) 

one.then(function(){
    console.log("promise consumed");
});
/*one (pending)
      |
   resolve()
      |
one becomes fulfilled
      |
.then() runs successfully
      |
chain fulfilled*/

new Promise(function(resolve,reject){
    setTimeout(function(){
        console.log("Async task 2");
        resolve();
    },1000 )
}).then(function(){
    console.log("Async 2 resolved")
})


const three = new Promise(function(resolve,reject){
    setTimeout(function(){

        resolve({username:"Bhargav",email:"bhargav@gmail.com"})
        // can pass object,array,function etc
    },1000)
})

three.then(function(user){
    console.log(user)
})
/*three
   |
resolve({ username: "Bhargav" })
   |
.then(user) executes
   |
chain fulfilled */


const four = new Promise(function(resolve,reject){
    setTimeout(function(){
        let error=true
        if(!error){
            resolve({username:"sadineni",pass:"123"})
        }else{
            reject('Error:Something went wrong')
        }
    },1000)
})

// const username = four.then((user)=>{
//     console.log(user);
//     return user.username  // nothing returns 
//     // we can do chaining
// })
// console.log(username)

four
.then((user)=>{
    console.log(user);
    return user.username  
})
.then((username)=>{
    console.log(username)
})
.catch((e)=>{console.log(e)})
.finally(()=>{console.log("Promise is either resolve or rejected")})


/*
four.catch(function(e){
    console.log(e);
})
    gives error why find?
          four
         /    \
        /      \
   .then()     .catch()
      |
   .then()



four (rejected)
      |
.then() skipped
      |
.then() skipped
      |
rejected chain (no catch attached)  ❌
*/

const five = new Promise((resolve,reject)=>{
    setTimeout(function(){
        let error=true
        if(!error){
            resolve({username:"js",pass:"000"})
        }else{
            reject('Error:Something went wrong in js')
        }
    },1000)
})

// other than .then i want to use async and await


// async cannot handle errors directly
// async function consumeFive(){
//     const res = await five
//     console.log(res)
// }

// consumeFive()

// in above if any error occurs it cannot handle
//so use try catch block in it

async function consumeFive(){
    try {
        const res = await five
        console.log(res)
    } catch (error) {
        console.log(error)
    }
}

consumeFive()


async function getAllUsers(){
    fetch('')
}








