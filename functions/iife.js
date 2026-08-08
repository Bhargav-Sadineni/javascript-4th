// Immediately Invoked Function Expressions (IIFE)

// function chai(){
//     console.log(`DB Connected`);
// }
// chai()

(function chai(){ // named iife
    console.log(`DB Connected`);
})();

// (()=>{  // not working
//     console.log(`DB Connected 2`)
// })()

((name)=>{
    console.log(`DB Connected 2 ${name}`)
})("bhargav") // arguments are given here