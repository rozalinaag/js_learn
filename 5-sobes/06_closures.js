function sayHelloTo(name){
    const message = 'hello ' + name;

    return function(){
        console.log(message);
    }
}

const hellotoElena = sayHelloTo('Elena')
//console.log(hellotoElena);
hellotoElena();

function createFrameworkManager(){
    const fw = ['Angular', 'React']

    return {
        print: function() {
            console.log(fw);
        }, 
        add: function(fram){
            fw.push(fram)
        }
    }
}

const manager = createFrameworkManager()
console.log(manager);
console.log(manager.add('a'));
manager.print();


//setTimeOut

const fib = [1, 2, 3, 4, 5, 8, 13]

for (var i = 0; i<fib.length; i++){
    (function(j){
    setTimeout(function() {
        console.log(`fib [${j}] = ${fib[j]}`)
    }, 1500)
    })(i)
}
