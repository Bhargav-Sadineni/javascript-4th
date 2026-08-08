// singleton obj
const tinder = new Object()
console.log(tinder); // {}

tinder.id ="123abc"
tinder.name="bhargav"
tinder.isLoggedIn = false
console.log(tinder) 

const regular = {
    email:"abc@gmail.com",
    fullname:{
        userfullname:{
            firstname:"bhargav",
            lastname:"sadineni"
        }
    }
}
//console.log(regular.fullname.userfullname.firstname)

const obj1 = {
    1:"a",
    2:"b"
}
const obj2 = {
    3:"c",
    4:"d",
}

//const obj3 = {obj1,obj2} //{ obj1: { '1': 'a', '2': 'b' }, obj2: { '3': 'c', '4': 'd' } }
//const obj3 = Object.assign({},obj1, obj2) // recommended {} act as taget and all obj1,obj2 goes to {}
// same as Object.assign(obj1,obj2) // here obj1 act as target and obj2 act as source
const obj3 = {...obj1,...obj2}
console.log(obj3) 

const users = [
    {
        id:1,
        email:"abc@gmail.com"
    }, 
    {
        id:2,
        email:"def@gmail.com"
    }, 
    {
        id:1,
        email:"ghi@gmail.com"
    },   
]

console.log(users[1].email)
console.log(tinder);

console.log(Object.keys(tinder)) // its datatype is array
console.log(Object.values(tinder))
console.log(Object.entries(tinder))


console.log(tinder.hasOwnProperty('isLoggedIn'))


const course = {
    coursename:"js",
    price:"999",
    courseInstructor:"bhargav"
}

//course.courseInstructor
const {courseInstructor} = course

console.log(courseInstructor);
const { courseInstructor:instructor} = course
console.log(instructor)


//------react use-------------
// const navbar = (props.company) => {
// }
const navbar = ({company}) => {

}
navbar(company = "bhargav")


// api - menu card in restaurant
// backend values came in xml in old
// now json
// {
//     "name":"bhargav",
//     "course":"js",
//     "price":"free"
// }


[
    {},
    {},
    {}
]

/* api response- api random user me api
{"results":[{"gender":"male","name":{"title":"Monsieur","first":"Roger","last":"Brun"},
"location":{"street":{"number":9800,"name":"Rue Principale"},"city":"Cugy (Fr)","state":"Schwyz"
,"country":"Switzerland","postcode":1180,"coordinates":{"latitude":"-57.1423","longitude":"-50.4819"},
"timezone":{"offset":"+5:45","description":"Kathmandu"}},"email":"roger.brun@example.com",
"login":{"uuid":"d1bff3a7-b8bd-4cdf-a0af-3a480e1570ff","username":"purplewolf280","password":"0.0.000","salt":"UGSZXZ8i",
"md5":"326adb3166abef7f708a17566e0a1eb7","sha1":"fede80abc93134bccc7a4eca5e4d415e38a9be1f",
"sha256":"750f0eb93f8d9c29ec02540a81d0c8fc10233fd0dfdd0321d6ccdc3dd0347074"},"dob":{"date":"1983-04-24T17:11:18.384Z","age":43},
"registered":{"date":"2007-07-03T15:34:51.230Z","age":19},"phone":"079 034 09 96","cell":"079 324 37 08",
"id":{"name":"AVS","value":"756.2624.1283.02"},"picture":{"large":"https://randomuser.me/api/portraits/men/55.jpg",
"medium":"https://randomuser.me/api/portraits/med/men/55.jpg","thumbnail":"https://randomuser.me/api/portraits/thumb/men/55.jpg"},
"nat":"CH"}],"info":{"seed":"1fb2bbbaa4ebac4d","results":1,"page":1,"version":"1.4"}}
*/
// json formatter to understand it well