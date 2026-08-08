// let a = 10;
// const b=20
// var c=30;

//var c =300
let a = 300;
if (true) {
    let a = 10;
    const b=20
    //var c=30; // same for c=30
    console.log("Inner:",a);
    
}
{} //scope
 
// console.log(a) right it should not print
// console.log(b) similar
//console.log(c) //prints 30
console.log(a)

function one(){
    const username = "bhargav"
    function two(){
        const website="youtube"
        console.log(username)
    }
    //console.log(website) // not defined
    two()
}
one()

//----------------------good--------------
// hoisting
console.log(addone(5)) // works
function addone (num){ // function
    return num+1
}
// addone(5)


console.log(addtwo(5)) // cannot access
const addtwo = function (num){ // expression
    return num+2
}
// addtwo(5)