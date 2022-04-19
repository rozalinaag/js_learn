let schedule = {};

function isEmpty(obj){
    for (let elem in schedule){
        return false;
    }
    return true;
}

alert( isEmpty(schedule) ); // true

schedule["8:30"] = "get up";

alert( isEmpty(schedule) ); // false
