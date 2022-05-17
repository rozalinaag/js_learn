function Cat(color, name){
    this.color = color; 
    this.name = name;
}

const kitty = new Cat('red', 'Vasya');
console.log(kitty);


function myNew(constructor, ...args){
    const obj = {}
    Object.setPrototypeOf(obj, constructor.prototype);
    return constructor.apply(obj, args) || obj;
}

const cat = myNew(Cat,'black', 'caaat' );