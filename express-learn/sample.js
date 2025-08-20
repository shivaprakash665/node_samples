const express=require('express')
const app=express()
app.use(express.json());

let users=[
  {
    id:1,
  name:"Shiva",
  age:19,
  marks:45,
  email:"shiva@gmail.com"
  },
  {
    id:2,
  name:"Gopu",
  age:21,
  marks:45,
  email:"gopu@gmail.com"
  }
]

app.get("/getAllUsers",(req,res)=>{
  res.json(users)
})

app.post("/insertUser",(req,res)=>{
  let user=req.body
  
  let email=user.email
  let index=users.map(user=>user.email).indexOf(email)
  if(index==-1){
    let lastid=users[users.length-1].id
    lastid=lastid+1
    user.id=lastid
    users.push(user)
    res.send("Sucessfully inserted")
  }
  else{
    res.send("Emailid Already Exists")
  }
})

app.get("/getUser",(req,res)=>{
  let id=parseInt(req.query.id)
})

app.listen(4000)