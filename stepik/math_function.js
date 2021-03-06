//В этом задании в нашу функцию передается угол в градусах.
//Вам нужно вернуть из функции значение его синуса. 
//Не забывайте, что тригонометрические функции в JavaScript принимают аргументы только в радианах!

function testMath(a) {
  let rad = a * Math.PI / 180;
  return Math.sin(rad);
}

console.log(testMath(348));

//А тут вам нужно вычислить и вернуть из функции площадь треугольника. 
//Передаваемые в функцию аргументы "a" и "b" - это длины сторон, а "c" - это угол между ними в градусах.

function testMath(a, b, c) {
    let rad = c * Math.PI / 180;
    let S = 1/2*a*b*Math.sin(rad);
    return S;
}

//В этом задании в нашу функцию передаются 4 числа. 
//Вам необходимо вычислить результат деления большего из этих чисел на меньшее, 
//и округлив до ближайшего меньшего целого вернуть из функции.

function testMath(a, b, c, d) {
    return Math.floor(Math.max(a, b, c, d) / Math.min(a, b, c, d));
}

//В этом задании вам необходимо выполнить возведение переменной a в степень b и возврат значения из функции.

function testMath(a, b) {
    return Math.pow(a, b);
}
