function stringLength(string){
  let len = string.length;
  let errorMessage = 'error'
  if(len < 1 || len > 10){
    return errorMessage;
  }
  
  else{
    return true;
  }
  
}




module.exports = stringLength;

