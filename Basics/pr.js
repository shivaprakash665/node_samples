// let array=[1,2,3,4,5,6,7,8,9,0,9]
// function isprime(num){
//   if (num<=1){
//     return false
//   }
//   for(let i=2;i<=Math.sqrt(num);i++){
//     if(num%i===0){
//       return false
//     }
    
//   }
//   return true
// }
// function allPrime(array){
//   for (let i=2;i<array.length;i++){
//     if(isprime(array[i])){
//       console.log(array[i])
//     }
//   }
// }
// allPrime(array)


// function check(num){
//   let array=[1,2,3,4,5,6,7,8,9]
//     if(array.indexOf(num)==-1){
//       console.log('Number not present')
//     }
     
//     else{
//       console.log("Present")
//     }
// }
// check(1)


// function arrayName(name1){
  
// let array=['shiva','kjdn','hdgf']
//   array.pop()
//     console.log(array)
// }
// arrayName()

// let nameArray=[]
// let ageArray=[]
// let marksArray=[]
// function studentList(name,age,marks){
//   let sum=0
//   if((age>=18 && age<=30) && (marks>=0 &&marks <=50)){
    
//   nameArray.push(name)
//   marksArray.push(marks)
//   ageArray.push(age)
//   }
//   console.log(marksArray,ageArray,nameArray)
//   for(i=0;i<marksArray.length;i++){
//     sum=sum+marksArray[i]
  
// }
// console.log(sum)
// }
// studentList('shiva',30,45)
// studentList('shiva',30,45)
// studentList('shiva',30,10)

// function reverseString(string){
//   let str=string.toLowerCase()
//   let reverse=""
//   for(let i=str.length-1;i>=0;i--){
//     reverse=reverse+str[i]
//   }
//   if(str==reverse){
//   console.log('palindrome')
//   }
//   else{
//     console.log('Not')
//   }
// }
// reverseString('MalaYALam')

function largest(arr){
  let largeNum=arr[0]
  for (let i=0;i<arr.length;i++){
    if (arr[i]>largeNum){
      largeNum=arr[i]
    }
  }
  console.log(largeNum)
}
largest([1,2,3,7,4,5,6])