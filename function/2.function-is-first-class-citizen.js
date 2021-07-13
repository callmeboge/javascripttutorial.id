// function dalam js merupakan first class citizen/Object
// Maksudnya?
// 1. Fungsi dapat di assignment ke variable
// 2. Fungsi dapat di pass as argumen pada fungsi lainnya
// 3. Fungsi dapat di kembalikan sebagai nilai dari fungsi lainnya.

//1 fungsi assignment to variable
// fumgsi yang di deklarasikan pada js dianggap sebagai nilai sehingga bisa direferensikan ke variable.

function substrat (a, b){
    return a - b
}

var kurang = substrat
//note
//jika, variable assign invoke substrat () maka variable akan menyimpan hasil proses (return vvalue
//variable assign hanya nama fungsi sehingga struktur proses fungsi di refenrensi oleh var

console.log( kurang(20, 10) )

//2. fungsi pass as argument ke fungsi yang lain
function add(a, b){
    return a + b

}

function aritmatika(a, b, fn) {
    return fn(a,b)
}

//invoke proses
console.log (aritmatika(10, 10, add), aritmatika (10, 10, substrat))

//3 fungsi dikembalikan sebagai nilai oleh fungsi lainnya
function nestAdd() {
    
    return function(a, b){
        return a + b

    }
}

//akses 1
console.log( nestAdd()(20, 20)) 

//akses kedua 
var add = nestAdd()
console.log(add(20, 70))

//Fungsi dapat dikembalikan sebagai nilai dari fungsi lainnya (js fungsi diperlakukan seperti nilai)