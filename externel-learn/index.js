// const sumofDigits=require('sum-of-digits').default;
// let sum=sumofDigits(89)
// console.log(sum)

// const twosum=require('sum-of-two-numbers')
// let sumoftwo=twosum(1,9)
// console.log(sumoftwo)


//Write program to find sum of 2 numbers and return it into  browser (sum of 5 and 6 is 11)

// const http=require('http');
// const url=require('url')
// const PORT=3000;
// const server=http.createServer(function(req,res){
//   const strurl=req.url
//   const queryString=strurl.split('?')[1]  
//   const twoparts=queryString.split('&')   // [num1=10] [num2=5]
//   const value1 = parseInt(twoparts[0].split('=')[1])  // "num1=10" → ["num1", "10"] → 10
//   const value2 = parseInt(twoparts[1].split('=')[1])  // "num2=20" → ["num2", "20"] → 20
//   let sum=0
//   sum=value1+value2
//   res.end(`sum of ${value1} & ${value2} is ${sum}`)
// })
// server.listen(PORT,function(err){
//   if(err){
//     console.log(err)
//   }
//   else
//     console.log('Successs')
// })


//Use function to find sum and return the result into browser
// const add=require('./sum')
// const http=require('http');
// const url=require('url')
// const PORT=3000;
// const server=http.createServer(function(req,res){
//   const strurl=req.url
//   const queryString=strurl.split('?')[1]  
//   const twoparts=queryString.split('&')   // [num1=10] [num2=5]
//   const value1 = parseInt(twoparts[0].split('=')[1])  
//   const value2 = parseInt(twoparts[1].split('=')[1]) 
  
//   let result=add(value1,value2)

//   res.end(`sum of ${value1} & ${value2} is ${result}`)
// })

// server.listen(PORT,function(err){
//   if(err){
//     console.log(err)
//   }
//   else
//     console.log('Successs')
// })

//Call previous program modules and display result in browser - Prime or not, odd or even, factorial, average of array


// const http=require('http');
// const url=require('url')
// const prime=require('./primeornot')
// const PORT=3000;
// const server=http.createServer(function(req,res){
//   const strurl=req.url
//   const queryurl=strurl.split('?')[1] 
//   const number=parseInt(queryurl.split('=')[1])
//   let result=prime(number)
//   if(result==true){
//     res.end(`the given number ${number} is Prime`)
//   }
//   else{
//     res.end(`the given number ${number} is Not a Prime`)
//   }
// })
// server.listen(PORT,function(err){
//   if(err){
//     console.log(err)
//   }
//   else
//     console.log('Successs')
// })


// Average of an Array

// const http=require('http');
// const url=require('url')
// const avg=require('./array')
// const PORT=3000;
// const server=http.createServer(function(req,res){
//   const strurl=req.url
//   let arr=[]
//   const queryurl=strurl.split('?')[1] // // num1=2&num2=3&num1=2&num2=3&num1=2&num2=3&num1=2&num2=3
//   const twoparts=queryurl.split('&') // "num1=2" "num1=2" "num1=2" "num1=2" "num1=2"
//   for(i=0;i<twoparts.length;i++){
//     const value=parseInt(twoparts[i].split('=')[1])
//     arr.push(value)
//   }
//   res.end(`the average of given array is ${avg(arr)}`)
// })
// server.listen(PORT,function(err){
//   if(err){
//     console.log(err)
//   }
//   else
//     console.log('Successs')
// })

//sum of three numbers

// const http=require('http');
// const url=require('url')

// const PORT=3000;
// const server=http.createServer(function(req,res){
//   const strurl=req.url //  /?num1=1&num2=2&num3=3
//   const queryurl=strurl.split('?')[1] // num1=1&num2=2&num3=3
//   const threeparts=queryurl.split('&')  // num1=1  num2=2  num3=3
//   const part1=parseInt(threeparts[0].split("=")[1])
//   const part2=parseInt(threeparts[1].split("=")[1])
//   const part3=parseInt(threeparts[2].split("=")[1])
//   let result=part1+part2+part3
//   res.end(`The sum of ${part1}+${part2}+${part3} = ${result}`)
// })

// server.listen(PORT,function(err){
//   if(err){
//     console.log(err)
//   }
//   else
//     console.log('Successs')
// })

// Reverse a String


  const http=require('http');
  const url=require('url')
  const reverseString=require("./reverse")
  const PORT=3000;
  const server=http.createServer(function(req,res){
  const strurl=req.url //  /?shiva
  const queryString=(strurl.split("?")[1]).toString()
  res.end(reverseString(queryString))

})

server.listen(PORT,function(err){
  if(err){
    console.log(err)
  }
  else
    console.log('Successs')
})
