function checkSpam(str){
  str = str.toLowerCase()
  if (str.includes("viagra") || str.includes('xxx')){
    return true;
  }
  else{
    return false;
  }
}

console.log(checkSpam('buy ViAgRA now')) //true

//обрезание и добавления многоточия в конце
function truncate(str, len){
  if (str.length>len){
    return str.slice(0, len-1) + "…";
  }
  else{
    return str;
  }
}

console.log(truncate("Вот, что мне хотелось бы сказать на эту тему:", 20));
console.log(truncate("Всем привет!", 20));

function extractCurrencyValue(str){
  return Number(str.slice(1));
}
console.log( extractCurrencyValue('$120') === 120 );
