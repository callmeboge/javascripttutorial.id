//IIFE -- Immediately Invoke Function Expression
// Merupakan Sebuah fungsi yang di deklarasikan sebagai ekpresi yang langsung di eksekusi setelah deklarasi

//Mengapa menggunakana IIFE?
// Saat mendeklarasikan sebuah variable atau fungsi pada javascript. Variable dan fungsi tersebut sebenarnya di deklarasikan pada scope global pada browser atau objek window.

var windowVar = 1;

console.log(window.windowVar)

function addWindowVar()
{
    return 1+ 9
}

console.log(window.addWindowVar())

// Semuanya berada pada global scope, berada pada scope yang sama.
// Bayangkan kita memiliki variable dan fungsi deklarasi yang banyak. Maka, program kita menjadi kurang efisien dan dapat menimbulkan bug, maupun tubrukan data. 

// Disinilah peran dari IIFE, karena fungsi akan dieksekusi langsung setelah proses deklarasi. 
// Fitur tersebut dimanfaatkan untuk memanajemen program menjadi lebih efisien dengan pengunaan lexical scope dan menghidarkan program mempolusi global spacennya.

// syntax umum 
// (function() expression)() //

//var testiife = (console.log('😂😂😂'))() //line code ini work dengan warning

var testiife2 = (function(a, b){
    return a + b +' 😂😭😭'
})(12, 12)

console.log(testiife2)

//name iife
//namun multiple tidak bisa dipanggil lagi setelah pemanggilan pertama

var testiife3 = (function multiple (){
    return 3*3
})()

console.log(testiife3)

//semicolon iife
//;(()=> { //piece of code})()

//; semicolon digunakan sebagai statement Terminator 
//untuk kasus 2 atau lebih file javascript di gabungngkan menjadi file js tunggal.

//Note. apabila kita tidak menambahkan ; maka program akan melemparkan error syntax

//ilustrasi
// file1.js
// |___ (function (){codecode})()

// file2.js
// |___ (function (){ codecode})()

//concatenation
// singleFile.js
// |___ (function (){codecode})() function (){codecode})() 
// error: kode ini akan melemparkan error syntax error

//action
 var avoidGlobalPolution = (function (){
     var origin = 0
     
     function omega(a, b){
         return a**a + b**b
     }
     
     console.log(omega(2,3))
 })()
 
 