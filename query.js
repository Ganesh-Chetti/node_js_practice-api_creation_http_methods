function query(up){
    let newobj={};
    for(i=0;i<up.length;i++){
        newobj[up[i].split("=")[0]]=up[i].split("=")[1]
    }
    return newobj;
}
module.exports={query}