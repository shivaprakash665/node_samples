
let sum1=0
let avg=0
function sum(){
  let Array1=[1,2,5,8,7,4,1]
for(let i=0;i<=Array1.length-1;i++){
  sum1=sum1+Array1[i]
}
console.log('sum is: ',sum1)
}




function Average(){
  let Array1=[1,2,5,8,7,4,1]
  sum2=0
  for(let i=0;i<=Array1.length-1;i++){
  sum2=sum2+Array1[i]
  avg=sum2/Array1.length
}
console.log('Average is : ',avg)
}



function sumEven(){
  let Array1=[1,2,5,8,7,4,1]
  sum=0
  for(let i=0;i<=Array1.length-1;i++){
    if (Array1[i]%2==0){
      sum=sum+Array1[i]
    }
  }
  console.log('sum of even numbers',sum)
}



function sumOdd(){
  let Array1=[1,2,5,8,7,4,1,7]
  sum=0
  for(let i=0;i<=Array1.length-1;i++){
    if (Array1[i]%2!==0){
      sum=sum+Array1[i]
    }
  }
  console.log('sum of odd numbers',sum)
}

function isPrime(num){
  if(num<=1){
    return false
  }
  for (let i=2;i<num;i++){
    if(num%i==0){
      return false
    }
  }
  return true
  }

function checkPrime(){
let Array1=[1,2,5,8,7,4,1,7]
for(let i=0;i<Array1.length;i++){
  if(isPrime(Array1[i])){
    console.log("prime")
  }
  else{
    console.log("Not Prime")
  }
}
}



sum()
Average()
sumEven()
sumOdd()
checkPrime()