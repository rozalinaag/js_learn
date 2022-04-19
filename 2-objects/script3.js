// до вызова функции
let menu = {
    width: 200,
    height: 300,
    title: "My menu"
};

function multiplyNumeric(obj){
    for (let item in obj){
        if (typeof obj[item] == "number"){
            obj[item] *= 2;
        }
    }
}

console.log(menu);
multiplyNumeric(menu);

//после вызова числовые значения стали в 2 раза больше
console.log(menu);  
