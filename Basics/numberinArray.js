
let arr=[1,2,3,4,5]
function array_present(num){
  if (arr.indexOf(num)===-1){
    console.log(`${num} is NOT present in this array`)
  }
  else{
    console.log(`${num} is present in this array`)
  }

}
array_present(9)
array_present(1)
array_present(2)
array_present(145)