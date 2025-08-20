const express=require('express')
const app=express()
app.use(express.json());
let users = [
  "Shiva","Shivaaa"                         ////getAllUsers - return array of users names
];

app.get("/getAllUsers",(req,res)=>{
  res.json(users)
})

app.post("/insertUser",(req,res)=>{
  let name=req.body.name
  let index=users.indexOf(name)
  if(index==-1 && name!=""){
    users.push(name)
    res.send("Successfully Inserted")
  }else{
    res.send("Not Inserted")
  }
})

app.delete("/deleteUser",(req,res)=>{      //deleteUser?name=kk
  let name=req.body.name
  let index=users.indexOf(name)
  if(index!=-1){
    users.splice(index,1)
    res.send(`User name ${name} Deleted`)
  }
  else{
    res.send("User doesn't exists")
  }
})

app.put("/updateUser",(req,res)=>{
  let oldName=req.body.oldName
  let newName=req.body.newName
  let index=users.indexOf(oldName)
  if(index!=-1){
    users[index]=newName
    res.send("Sucessfully Updated Name")
  }
  else{
    res.send("Not inserted")
  }
})

app.delete("/deleteAll",(req,res)=>{
  let length=users.length
  users.splice(0,length)
  res.send("Deleted all Users")
})

app.delete("/deleteArray",(req,res)=>{  //["shiva","Gopu"]
   let nametodelete=req.body.names
  for (let i=0;i<nametodelete.length;i++){
    name=nametodelete[i]
    let index=users.indexOf(name)
    if(index==-1){
      res.send("name doesnt exists")
    }
    else{
      users.splice(index,1)
    }
  }
})

app.listen(4000)