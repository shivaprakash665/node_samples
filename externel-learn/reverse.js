function reverse(str){
  let arr=[]
  for (let i=str.length-1;i>=0;i--){
    arr.push(str[i])
    myString=arr.toString()
  }
  return myString
}


module.exports=reverse;