let nameArray=[]
function name_Array(name){
  if(nameArray.indexOf(name)===-1){
    nameArray.push(name)
  }
  else{
    console.log("The Name",name,"already exists in the Array")
  }
  console.log(nameArray)
}
name_Array('Samuel')
name_Array('John')
name_Array('shiva')
name_Array('Samuel')