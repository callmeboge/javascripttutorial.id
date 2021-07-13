//Constructor fungsi
// adalah fungsi regular yang digunakan untuk membuat object pada javascript.

//convention shape of constructor function
//1. nama fungsi regular yang digunakan di awali dengan huruf kapital.
//2. instansiasi object bernasis constructor function menggunakan new keyword

function Person(firstName, lastName){
    this.firstName = firstName
    this.lastName = lastName

    this.fullName = function (){ 
        return this.firstName + ' ' + this.lastName
    }
}

const person1 = new Person('La', 'Boge')
const person2 = new Person('La', 'Boge')

//console.log(person1,person2, person1.fullName, person2.fullName)

//return from constructor function
//syarat kata kunci return dalam constructor function
//1. return value harus berupa objek. Jika, nilainya adalah objek maka konstruktur functiom akan memgembalikan objek dari pada this konteks
//2. return value lain selain objek, maka return keyword akan dibiarkan oleh konstruktur functiom

//mark 1
//function Store(owner, type){
    //contoh: new.target property
   // console.log(new.target) //function definisi
    
  //  this.owner = owner
   // this.type = type
    
  //  return { address: 'pk 8 no 55'} //return object dari pada 'this'
 // return 'address: pk 8 no 55'// di ignore
// }

//const store1 = new Store('Laboge', 'Retail')
//console.log(store1)

// memanggil constructor function tanpa operator 'new'
// Saat memanggil property constructor function tanpa operator new, maka akan mengembalikan error TypeError cant read property of undefined

//const store2 = Store('Laboge', 'Retail')
//console.log(store2, store2.type)

//Solusi untuk problem diatas, kita dapat menggunakan property new.target.
//biasanya digunakan untuk memastikan sebuah constructor func di panggil dengan keyword new.
//apabila, menggunakan keyword new maka new.target akan bernilai dengan function definisi dari function.
//contoh
//const store3 = new Store('Laboge', 'Retail')
//console.log(store3) //object

//implementasi 'new.target' for flexible of constructor function
//contoh 1; show error if not use 'new'
//function Store(owner, type){
    //if conatructor function not use 'new'
  //  if(! new.target){
    //    throw TypeError('Tidak dapat menggunakan constructor func tanpa operator new')
    //}
  //  this.owner = owner
   // this.type = type
// }

//const store4 = Store('Laboge', 'eceran')
//console.log(store4)

//contoh 2; flexible add new operator
function Store(owner, type){
    //if conatructor function not use 'new'
    if(! new.target){
        return new Store(owner, type)
    }
    
    this.owner = owner
    this.type = type
}
const store5 = Store('Oma', 'grosir');
console.log(store5)