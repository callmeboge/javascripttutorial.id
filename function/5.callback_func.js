//callback function
//fungsi yang digunakan sebagai argumen pada fungsi lainnya untuk penggunaan selanjutnya dalam fungsi.

function cb_args(){
    console.log('callback 1')
}

function cb_args_1(){
    console.log('callback 2')
}

function cb_args_2(){
    console.log('callback 3')
}

function cb_args_3(param1, cb1, cb2){
    cb1()
    cb2()
    
    console.log(param1)
}

//invoke / call proses
//sync func with callback func
//proses is blocking code === sync, normal javascript proses

cb_args_1()
cb_args_2()
cb_args()

cb_args_3('ini argumenta biasa', cb_args, cb_args_1) //penggunaan callback function dengan name function

function cb_args_async(){
    setTimeout
}