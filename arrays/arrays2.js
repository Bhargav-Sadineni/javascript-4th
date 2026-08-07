const marvel = ["cap","thor","spy"]
const dc = ["Batman","Superman","Flash"]

//marvel.push(dc)
//console.log(marvel) //[ 'cap', 'thor', 'spy', [ 'Batman', 'Superman', 'Flash' ] ]

//console.log(marvel[3][0])

//const all=marvel.concat(dc)
//console.log(marvel)//[ 'cap', 'thor', 'spy' ]
//console.log(all);//[ 'cap', 'thor', 'spy', 'Batman', 'Superman', 'Flash' ]

const all_heroes = [...marvel,...dc]
console.log(all_heroes)

const another = [1,2,3,[4,5,6],7,[6,7,[4,5]]]

const real = another.flat(Infinity)
console.log(real)

console.log(Array.isArray("Bhargav"))
console.log(Array.from("Bhargav"))
console.log(Array.from({name:"bhargav"})) // interesting if not able to make returns empty

let score1=100
let score2=200
let score3=300

console.log(Array.of(score1,score2,score3))