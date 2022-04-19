let salaries = {
    John: 100,
    Ann: 160,
    Pete: 130
}

function sum(obj){
    sum = 0;
    for (let item in obj){
        sum += obj[item];
    }
    return sum;
}

alert(sum(salaries));
