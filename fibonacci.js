function fibonacci(num){
 let a=0
 let b=1
 if(num<=0){
  console.log('Invalid')
 }
 else if(num==1){
  console.log(a)
 }
 else{
  console.log(a)
  console.log(b)
  for(i=2;i<num;i++){
  c=a+b
  a=b
  b=c
  console.log(c)
  }
 }
}
fibonacci(2)