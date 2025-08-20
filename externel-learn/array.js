function arrayAverage(arr){
  let sum=0
  for (i=0;i<arr.length;i++){
    sum=sum+arr[i]
  }
  let average=sum/arr.length
  return average
}

module.exports=arrayAverage