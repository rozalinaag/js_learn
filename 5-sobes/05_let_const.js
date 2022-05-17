//Let 

let a = 'Variable a'
let b = 'Variable b'

//scope
{
    a = 'new Variable A'
    let b = "local variable b"
    console.log('Scope A', a); //Scope A new Variable A
    console.log('Scope B', b); //Scope B local variable a
}

console.log('A', a); // A new Variable A
console.log(' B', b);  //B Variable b


//const ------------------------------------------------------------
const PORT =8080
//PORT = 2000 //erorr

const array =['Javascript', 'is', 'Awesome'];
array.push('2');
array[0] = 'Js'
console.log(array);

let obj = {
}

obj.name = 'Roza'
obj.family = 'Ag'
console.log(obj);
