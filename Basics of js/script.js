// alert (" Hello Backend");

let arr = [1,2,3,4,5]

// FOREACH

arr.forEach(function(value){
    console.log(value)
})
arr.forEach((v)=>{
    console.log(v+66)
})

// MAP 🤖

arr.map((value)=>{
  console.log(value +12)
})
var c = arr.map((e)=>{
  return 1232;
})
console.log(c)
var d = arr.map((e)=>{
  return e*2;
})
console.log(d)

//  FILTER


let Newarr = [132,53,26,34,,4734,34234,42,23,3,6,4,6,3,235,45,2135,3,5,4,6,425,]

let r = Newarr.filter((val)=>{
  if(val>4){return true}
  else return false
})
console.log(r);

let t = Newarr.filter((e)=>{
  return e>=9
})
console.log(t)

// FIND ;

var ans = arr.find((val)=>{
  return val == 3;
})
console.log(ans)

//INDEX OF .........................

// OBJECT

let obj = {
  Name:'Gyanaranjan Patra',
  Age:20,
  Degree:'Btech'
}

console.log(obj);
console.log(obj['Name'])
console.log(obj.Age)

obj.Age = 99;
console.log(obj.Age)
Object.freeze(obj);    // After Freezing The Object We Can Not Change The value Agin . 
obj.Age = 20;
console.log(obj.Age);


// FUNCTION 

let length = arr.length;
console.log(length)

let abct = function(){

}

let l = abct.length // We Also can Find The Length Of a Function,Parameters are The Lenght Of the function

console.log(l)

let g = function(a,d,f,g,h,h,h,h,h,h,h){

}
let len = g.length
console.log(len)

// ASYNC JAVASCRIPT CODING

// var gyan = await fetch(`https://randomuser.me/api/`);
// var res = await gyan.json()
// console.log(res);
const URL = 'https://randomuser.me/api/'
const fetchData = async ()=>{
  try{
    var data = await fetch (URL);
    var res = await data.json();

    console.log(res);
    console.log(res.results[0]);

  }catch{
    console.error('errrrrrrr0000000r')
  }
}

fetchData();