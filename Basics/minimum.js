let array=[4,8,1,6,3,0,77]
function smallestArray(){
  minimum=array[0]
  for(i=0;i<array.length;i++){
    if (minimum>array[i]){
      minimum=array[i]
    }
  }
  console.log(minimum)
}
smallestArray()