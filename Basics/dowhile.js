function dowhile(name,age,marks){
  let name_Array=[]
  let ageArray=[]
  let marksArray=[]
  while(age>=18 && age<=30 && marks>=0 && marks<=50){
    name_Array.push(name)
    ageArray.push(age)
    marksArray.push(marks)
    break;
  }
  console.log(name_Array,ageArray,marksArray)
}
dowhile('Shiva',20,30)