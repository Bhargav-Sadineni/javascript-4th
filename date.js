// Dates

let myDate =  new Date()
console.log(myDate)
console.log(myDate.toString())
console.log(myDate.toDateString())
console.log(myDate.toLocaleDateString())
console.log(typeof myDate) // obj

let myCreatedDate = new Date(2023,0,23)
console.log(myCreatedDate)
console.log(myCreatedDate.toString())

let myCreatedDate1 = new Date(2023,0,23,5,3)
console.log(myCreatedDate1.toLocaleString())

let myCreatedDate2 = new Date("2023-01-28")
console.log(myCreatedDate2.toString())
 let myCreatedDate3 = new Date("01-28-2006")
 console.log(myCreatedDate3.toLocaleDateString())


 let myTimeStamp = Date.now()

 console.log(myTimeStamp)
 console.log(myCreatedDate.getTime());
 console.log(Math.round(Date.now()/1000)); // in seconds
 

 let newDate = new Date()
 console.log(newDate)
 console.log(newDate.getMonth()+1)
 console.log(newDate.getDay())

 newDate.toLocaleString('default',{
    weekday:"long"
 })