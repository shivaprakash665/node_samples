let array=[1,2,-3,4,5,-2,18,-98]
function sumPositive(){
  let sum=0
  for(i=0;i<array.length;i++){
    if(array[i]>0){
      sum=sum+array[i]
    }
  }
  console.log(sum)
}
sumPositive()