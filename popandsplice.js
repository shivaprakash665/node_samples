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
name_Array('Sanjay')
name_Array('Raj')
name_Array('Johny')
name_Array('Dev')
name_Array('Sai')

function popArray(){
  nameArray.pop()
console.log('This is Popped Array' ,nameArray)
}
popArray()

function splice(x,y){
  nameArray.splice(x,y)
  console.log(nameArray)
}
splice(2,2)