const http=require("http")
let {otp}=require("./otp.js")
let {query}=require("./query.js")
const url=require("url")

let server=http.createServer((req,res)=>{
    var parsed=url.parse(req.url);
    var up=parsed.query.split("&");
    var path=parsed.pathname

    res.setHeader('Content-Type', 'application/json');
    if(req.method=="GET"){
        let otpobj={"otp":otp(3)}
        res.statusCode = 200;
        res.write(JSON.stringify(otpobj));
    }
    else if(req.method=="POST" && path=="/register"){
        let obj={}
        obj["res"]="successfull register"
        obj["details"]=query(up)
        res.statusCode = 200;
        res.write(JSON.stringify(obj));
    }
    else if(req.method=="PUT"){
        res.statusCode = 200;
        res.write(JSON.stringify({massage:"This is PUT"}));
    }
    else if(req.method=="PATCH"){
        res.statusCode = 200;
        res.write(JSON.stringify({massage:"This is PATCH"}));
    }
    else if(req.method=="DELETE"){
        res.statusCode = 200;
        res.write(JSON.stringify({massage:"This is DELETE"}));
    }else{
    res.statusCode = 405;
    res.write(JSON.stringify({massage:"Method not allowed or error"}));
    }
    
    res.end();
});

server.listen(3000,()=>{
    console.log("connected")
})