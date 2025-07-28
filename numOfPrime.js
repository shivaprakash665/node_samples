function primeNum(num){
  for(let i=2;i<num;i++){
    if(num%i!==0){
      console.log(i)
    }
  }
}
primeNum(7)