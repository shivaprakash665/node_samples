function longest(){
  let string='Welcome to ooty'
  splitted=string.split(' ')
  console.log(splitted)
  let longString=splitted[0]
  for(i=0;i<splitted.length;i++){
    if(longString.length<splitted[i].length){
      longString=splitted[i]
    }
  }
  console.log(longString)
}
longest()