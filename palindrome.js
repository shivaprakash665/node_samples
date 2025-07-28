function palindrome(a){
  let lower=a.toLowerCase()
  let splitted=lower.split('')
  let reversed=splitted.reverse().join('')
  if(lower==reversed){
    console.log("Palindrome")
  }
  else{
    console.log("Not palindrome")
  }
}
palindrome("MALAYALAM")