
// function countVowels(string){
//   let vowels=['a','e','i','o','u']
//   count=0
//   splitted=string.split('')
//   for(let i=0;i<splitted.length;i++){
//     for(let j=0;j<vowels.length;j++){
//       if(splitted[i]==[vowels[j]]){
//         count=count+1
//       }
//     }
//   }
//   console.log(count)
// }
// countVowels("shiva")

function countVowels(string){
  let vowels=['a','e','i','o','u']
  let count=0
   let str = string.toLowerCase();
  for(let i=0;i<str.length;i++){
    if(vowels.includes(str[i])){
      count=count+1
    }
  }
  console.log(count)
}
countVowels('shivaa')

