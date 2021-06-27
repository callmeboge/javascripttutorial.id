// Anonymous function
// Sebuah fungsi yang tidak memiliki nama. Fungsi anonymous tidak dapat diakses langsung setelah di deklarasikan. untuk menggunakannya kemudian kita harus assignment kedalam variable

//cant use
console.log( function (a,b) { return a+b })

//can use
var add = function(a, b){
    return a() + b ;
}

//use anonymous function as argument to other function
setTimeout (function (){
    return 'anony function as argument'
}, 2000)

setTimeout (function (){
    console.log('anony function as argument')
}, 0)

console.log('code block')

console.log( add(function(){ return 10 }, 20) )

//anonymous function as expression IIFE
let iife = (function(){
  console.log('iife')
//  return 'iife'
})()

person = {
    firstName: 'John',
    lastName: 'Doe'
}

let personIIFE = (function (object){
    console.log(`${object.firstName}`)
})(person)
//shorthand anonymous function with arrow function
let iifeArrowFunc = (()=> {
    console.log('iife with arrow func')
})()

let substract = ((a, b) => (a - b))(5, 3)

console.log(substract)
//summary
//anony function adalah sebuah fungsi yang dideklarasikan tanpa nama not direct access
//bisa digunakan sebagai argumen pada fungsi lainnya
//bisa sebagai fungsi expression untuk iife or immediately invole function expression

hoistingFunc()

//syntax : not support for function hoisting
var hoistingFunc = function(){
    console.log('hoisting anony function')
}

function hoistingFunc()
{ 
    console.log('hoisting ordinary fufunc')
    
}