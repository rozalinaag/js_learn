let a  =42
let b = a
b++;
console.log('a', a); //42
console.log('b', b); //43

let c = [1, 2, 3]
let s = c;
s.push(4);
console.log('c' , c);  //[1, 2, 3, 4]
console.log('s' , s); //[1, 2, 3, 4] 
//concat - for full copy
let t = [1, 2, 3, 4]

console.log(c == s); //true
console.log(c==t); //false


