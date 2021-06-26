console.log('Hello, This is Exercise File')


var globalVar= 'this global space'
var alpha = 10

function getAccess() {
    console.log(globalVar, ' —— with this : ', this.globalVar)
    
    //return globalVar + ' access inside func'
    
    return globalVar += ' access inside func' 
}

function sum(alpha){
    return alpha += 5 //local copy local variable


//invocation proses —— call or invoke
var accessReturn = getAccess()
var Sum = sum(alpha)

console.log(accessReturn) //this global space access inside func
console.log(Sum) //output: 15

//call varaiable global again
console.log(globalVar)
console.log(alpha)