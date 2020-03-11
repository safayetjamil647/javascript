let fruits=["apple", "banana"]
let first=fruits[0]
let last=fruits[fruits.length-1]
fruits.forEach(function(item,index,array){
    console.log(item,index)
})
console.log(fruits.length);
console.log(first);
console.log(last);