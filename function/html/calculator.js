const calculator = (function(){
    function add(a, b){
    return a + b
}

function substrat (a, b){
    return a - b
}

return { add, substrat }
})()
