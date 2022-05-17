// __proto__
//Object.getPrototypeOf()

function Cat(name, color){
    this.name = name;
    this.color = color;
}

Cat.prototype.voice = function(){
    console.log(`Cat ${this.name} say MyaY`);
}

const cat = new Cat ('CAAT', 'white')

cat.voice()

//================================
function Person()