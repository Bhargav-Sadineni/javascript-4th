// for of

// array specific loops

// ["","",""]
// [{},{},{}]

const arr = [1,2,3,4,5]
for (const val of arr) {
    console.log(val)
}

const s = "bhargav"
for (const c of s) {
    console.log(`Each char is ${c}`)
}

// Maps
const map = new Map()
map.set('IN',"India")
map.set('fr',"france")
map.set('sl',"sri lanka")
map.set('IN',"India")
//console.log(map)

for (const key of map) {
    console.log(key)//[ 'IN', 'India' ] [ 'fr', 'france' ] [ 'sl', 'sri lanka' ]
}
for (const [key,value] of map) {
    console.log(key,':-',value);
}

const obj = {
    'game1':"ff",
    'game2':"pubg"
}
// for (const [key,avlue] of obj) {
//     console.log(key,':-',value);
// }//obj is not iterable


// ------------------------------------------------------------

for (const key in obj) {
    console.log(`${key}:-${obj[key]}`)
}

for(const i in arr){
    console.log(`value at index ${i} is ${arr[i]}`)
}

for(const key in map){ // not iteratable
    console.log(key);
}

//-----------------------------------------------------

myarr=["bhargav","ram","sadineni"]
// myarr.forEach( function (item) {
//     console.log(item)
// } )

myarr.forEach((item)=>{
    console.log(item)
})

function print(item){
    console.log(item)
}

myarr.forEach(print)

myarr.forEach( (item,index,arr)=>{
    console.log(item,index,arr)
})

const coding = [
    {
        language:"javascript",
        file:"js"
    },
    {
        language:"java",
        file:"java"
    },
    {
        language:"python",
        file:"py"
    }
]

coding.forEach((item)=>{
    console.log(item.language);
})