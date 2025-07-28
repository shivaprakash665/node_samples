let nameArray=[]
let ageArray=[]
let marksArray=[]
function student_array(name,age,mark){
  if (age>=18 && age<=30 && mark>=0 && mark <=50){
    ageArray.push(age)
    marksArray.push(mark)
    nameArray.push(name)
  }
  else{
    console.log("U didnt satisfy all of the Requirements")
  }
  console.log(nameArray,ageArray,marksArray)

  
}
function averageofnum(){
  let sum=0
  for(let i=0;i<marksArray.length;i++){
    sum=sum+marksArray[i]
    

  }
  let average=sum/marksArray.length
  console.log('Average is ',average)

}

student_array('Shiva',20,21)
student_array('Athulya',20,35)
student_array('Govindh',14,21)

averageofnum()

