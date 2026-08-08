const isLoggedIn = true
if(isLoggedIn){
    
}
// < ,>,<=,>=,==,!=,===,!==
if(2=='2'){
    console.log("hello")
}
const temparature =41
if(temparature>40){
    console.log("tempartaue is too hot")
}else{
    console.log("temparature is very cool")
}

const score=200
if(score>100){
    const power="fly"
    console.log(`User power:${power}`)
}

// short hand notation
const balance=1000
if(balance>500) console.log("test"),console.log("test2");
//not at all readable

if(balance<500){
    console.log("less than 500");
    
}else if(balance<750){
    console.log("balance less than 750");
}else{
    console.log("balance greater than 750")
}


const userLoggedIn = true;
const debitCard = true;
if(userLoggedIn && debitCard && 2==2){
    console.log("allow access");    
}

if(2!=3 || 2==2 || 1==3){

}

