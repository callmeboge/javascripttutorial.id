// Sebuah fungsi berlaku seperti ekspresi saat di definisikan dalam scope IIFe block.
// fungsi ekspresi di definisikan dalam parentheses (). Semua variable di dalam block tidak dapat di akses dari luar
// Fungsi ekspresi dapat di assign pada variable. Namun, variable merujuk pada nilai bukan fungsi ekspresi

var iife = (// function as ekspresi
function (){
    
    var alpha = 0
    return 'laboge in the house'
})()

console.log(iife)//output 1: function definition
//output2: alpha not defined/or not accessible

//Name function IIFE
var iife = (function origin(){
    return 'origin function'
})()

console.log(iife)
//Selain, anonymous func kita juga dapat menggunakan name func pada iife. Hanya saja untuk name function hanya berlaku dalam block iife. name fungsi tetap tidak daat diakses dari luar iife.