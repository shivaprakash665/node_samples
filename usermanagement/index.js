const http=require('http');
const url=require('url');
const port=3000;
const namesarray=[]

const server=http.createServer(function(req,res){
    
    const strUrl=req.url;
    if(strUrl.includes('insert')){
        let name=strUrl.split("=")[1];
        if(namesarray.includes(name)){
            res.end("name already exist");
        }
        else{
            namesarray.push(name)
            res.end("Inserted  " + name)
        }
    }else if(strUrl.includes('getAllNames')){
        res.end(namesarray.toString())


    }
    else if(strUrl.includes('updateName')){ //    /updatename?oldname=shiva&newname=athu
        let queryurl=strUrl.split("?")[1].split("=")[1]
        let oldname=queryurl.split("&")[0] //shiva
        let newname=strUrl.split("=")[2]
        let index=namesarray.indexOf(oldname)
        if (index==-1){
            res.end("Name not in list")
        }
        else{
            namesarray[index]=newname
            res.end(`${namesarray}`)
        }
        }
        

    else if(strUrl.includes('deleteName')){
        let name=strUrl.split("=")[1];
        let index=namesarray.indexOf(name);
        if(index == -1){
            res.end("name doesn't exist " + name)
        } else{
            namesarray.splice(index,1)
            res.end("Deleted  " + name)
        }
    }
    
})
server.listen(port,function(err){
    if(err){
        console.log(err)
    }else{
        console.log("success")
    }
})