// function isPrime(num) {
//   if (num <= 1) {
//     return false
//   }
//   for (let i = 2; i < num; i++) {
//     if (num % i === 0) {
//     return false
//     }
//  }
//   return true
// }

// let arr=[]
// function allPrime(num){
//   for (let i=2;i<num;i++){
//     if(isPrime(i)){
//       console.log(i)
//       arr.push(i)
//     }
//   }
// console.log(arr)
// }
// allPrime(50)

  //__________//
// core module //
  //_________//
 
// const os= require("os")
// let plat=os.platform()
// console.log('platform: ',plat)

// console.log(`OS Type: ${os.type()}`);
// console.log(`OS Release: ${os.release()}`);
// console.log(`CPU Architecture: ${os.arch()}`);

// console.log('userinfo: ',os.userInfo())

// const fs= require("fs")

// fs.readFile('file1.txt','utf-8',function(err,result){
//   if(err){
//     console.log(err)
//   }
//   else{
//     console.log(result)
//   }
// })
0

// let myfile='file1.txt'
// let content='hii britehr iam Shiva'
// fs.writeFile(myfile,content,function(err){
//   if (err){
//     console.log(err)
//   }
//   else{
//     console.log("Success")
//   }

// })

// const addTwo=require("./sum")
// let sum=addTwo(4,5)
// console.log(sum)

// const http=require("http");
// const url=require("url");

// const fs=require("fs");
// let filename='file1.txt'
// let encoding='utf-8'
// fs.readFile(filename,encoding,function(err,result){
//   if(err){
//     console.log(err)
//   }
//   else{
//     console.log("success: ",result)
//     fs.readFile(result,encoding,function(err2,result2){
//       if(err2){
//         console.log(err2)
//       }
//       else{
//         console.log("successfully read",result2)
//       }
//     })
//   }

// })
const fs = require('fs');

fs.mkdir('./writefolder',function(err){
  if(err){
    console.log(err)
  }
    console.log("Succesfully created Folder")
})
let content='hii Shiva'
fs.writeFile('./writefolder/writefile',content,function(err){
  if (err){
    console.log(err)
  }
  else{
    console.log("Written sussessfully")
  }
})