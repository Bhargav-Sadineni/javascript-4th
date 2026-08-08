// for 

for (let i = 0; i <=5; i++) {
    console.log(i)
    if(i==5){
        console.log("number is 5")
    }
}

const arr=["s",true,"Bhargav",4,5]
for (let i = 0; i < arr.length; i++) {
    const element = arr[i];
    console.log(element)
}


// break and continue
for (let i = 1; i <=20; i++) {
    if(i == 5){
        console.log("detected 5");
        // break; // go out of loop
        continue; // leaves for this
    }
    console.log(`Value of i is ${i}`);
    
    
}