function otp(n){
let a="";
    for(i=0;i<n;i++){
        a+=Math.floor(Math.random()*10)
    }
    return a;
}

module.exports={otp}