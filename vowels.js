
function countVowels(){
  let vowels=['a','e','i','o','u']
let string='Shiva'
  count=0
  splitted=string.split('')
  for(let i=0;i<splitted.length;i++){
    for(let j=0;j<vowels.length;j++){
      if(splitted[i]==[vowels[j]]){
        count=count+1
      }
    }
  }
  console.log(count)
}
countVowels()