// const person = {
//     surname: 'Stark', 
//     knows: function(what, name){
//         console.log(`You know ${what}, ${name}, ${this.surname}`)
//     }
// }

const person = {
    surname:'Star', 
    know: function(what, name){
        console.log(`You know ${what} ${name} ${this.surname}`);
    }
}

const klike = { surname: 'Klike'};
const bindy = person.know.bind(klike, 'all', 'Bran');

bindy();




const john = {surname: 'Klike'}
// person.knows('all', 'Bran');
// person.knows.call(john, 'all', 'Bran');
// person.knows.apply(john, ['all', 'Bran']);
//const bran = person.knows.bind(john, ['all', 'Bran']);
//bran();


// ===========================

function Person (name, age){
    this.name = name;
    this.age = age;

    console.log(this);
}

const elena = new Person('elena', 20);

function logThis(){
    console.log(this);
}

const obj = {num: 42}
logThis.apply(obj);
logThis.call(obj);

//=================


function Cat(color){
    this.color = color
}