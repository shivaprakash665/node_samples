const express=require('express')
const app=express()

app.get('/hii',function(req,res){
  res.send('Hello World')
})

app.get("/square",(req,res)=>{  //http://localhost:3000/square&num=6
  let num=parseInt(req.query.num)
  let square=num*num
  res.send(`${square}`)
})

app.get("/sum",(req,res)=>{   // http://localhost:3000/sum&num1=6&num2=3
  let num1=parseInt(req.query.num1)
  let num2=parseInt(req.query.num2)
  let sum=num1+num2
  res.send(`${sum}`)
})

app.get("/concat",(req,res)=>{
  let num1=req.query.num1
  let num2=req.query.num2
  res.send(num1+num2)
})

app.listen(3000)