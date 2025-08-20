const express=require('express')
const app=express()
let users = [
  "Shiva","Shivaaa"                         ////getAllUsers - return array of users names
];

app.get("/getAllUsers",(req,res)=>{
  res.json(users)
})

app.post("/insertUser",(req,res)=>{
  let name=req.query.name
  let index=users.indexOf(name)
  if(index==-1 && name!=""){
    users.push(name)
    res.send("Successfully Inserted")
  }else{
    res.send("Not Inserted")
  }
})

app.delete("/deleteUser",(req,res)=>{      //deleteUser?name=kk
  let name=req.query.name
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
  let oldName=req.query.oldName
  let newName=req.query.newName
  let index=users.indexOf(oldName)
  if(index!=-1){
    users[index]=newName
    res.send("Sucessfully Updated Name")
  }
  else{
    res.send("Not inserted")
  }
})

app.listen(4000)