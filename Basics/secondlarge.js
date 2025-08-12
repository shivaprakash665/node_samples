function secondLarge(num){
 let largest=num[0]
 let secondLargest=[]
 for (i=0;i<num.length;i++){
  if(largest<num[i]){
    secondLargest=largest
    largest=num[i]
    
  }
 }
 console.log('largest: ',largest)
 console.log('secondLargest: ',secondLargest)
}
secondLarge([1,3,96,112,7,4,0,4,77,3])