//Function in javascript
// 1. Membagi code program jadi bagian yang kecil
// 2. Kode program menjadi reusable 
// 3. Kode Terstruktur dan Efisien

// Struktur Funcrrion
// Umumnya fungsi di deklarasikan dengan struktur
//> kata kunci function ,
//> nama fungsi /identifier, >
//> kurung diikuti 
// >daftar parameter >
//>badan fungsi

//Syntax
// function namaFunction(daftar parameter) {
    //badan fungsi
// }

// khusus list parameter, function mendukung deklarasi tanpa parameter, 1 parameter dan banyak parameter
// apabila deklarasi banyak parameter kita cukup memisahkan tiap parameter dengan menggunakan tanda baca koma(,)

//I
function withoutParameter() { //tanpa parameter
    console.log('mark1 is valid')
    
}

//II 
function oneParameter(one) {
      console.log('mark2 is valid')
        console.log('Params : ' + one)
}

//III 
function multiParameter(one, two, three) {
      console.log('mark3 is valid')
        console.log('Params : ' + one + two + three)
}

//invoke /call
//proses p3manggilan fungsi disebut proses invocation
withoutParameter()
oneParameter(10)
multiParameter(10, 20, 30)

//fungsi selalu mengembalian undefined sampai return value ditentukan secara tertulis

function returnWithoutParameter() { //tanpa parameter
    console.log('mark1 is valid')
    
    //explicit return 
    return 1
}

var storeReturnWithoutParameter = returnWithoutParameter()
console.log('Result: ', storeReturnWithoutParameter)

//Parameter dan argument
//Parameter digunakan saat mendeklarasikan function
//argument digunakan sebagai nilai untuk parameter yang kemudian digunakan dalam badan fungsi

// deklarasifungsi 
//function multiParameter(one, two, three) /parameter

// call fungsi
//multiParameter(1, 'dua', true) //argument

//arguments
// arguments merupakan objek yang hanya dapat diakses dari dalam function. Arguments digunakan untuk akses semua argument yang yang di pass pada pemanggilan fungsi
function getAccessArguments() {
    console.log(arguments, typeof arguments[0], typeof arguments[2], typeof arguments, arguments instanceof Array, arguments instanceof Object )
    
}

getAccessArguments(1, 'dua', true) //object arguments

//arguments property dapat diakses dengannotasi array like. Namun, bukan instansiasi dari Array type(test with instanceof)

//function hoisting
// function hoisting merupakan mekanisme pada javascript yang memungkinkan untuk memanggil fungsi sebelum di deklarasikan.
// proses dibelakang layar yg terjadi, mesin javascript akan memindahkan semua deklarasi fungsi ke awal program baik dalam fungsi maupun dalam dokument js.
//invoke
hoistingFunc()

//deklarasi
function hoistingFunc(alpha =2 ) {
    console.log( 'ini fungsi hohoisting', alpha)
}