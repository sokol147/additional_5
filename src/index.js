module.exports = function check(str, bracketsConfig) {
  let bracketString = bracketsConfig.map(function(item){
    return item.join('');
  });
  let wasChanged = true;

  while(str.length && wasChanged){
    wasChanged = false;
    for(let i = 0, len = bracketString.length; i < len; i++){
      let pos = str.indexOf(bracketString[i]);

      if(pos != -1){
        str = str.slice(0 , pos) + str.slice(pos + 2);
        wasChanged = true;
      }
    }
  }
  return str.length ? false : true;
}