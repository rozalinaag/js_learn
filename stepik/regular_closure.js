//В этом задании в нашу функцию testRegExp первым параметром передается случайная строка(переменная s), 
//а вторым - случайная подстрока(переменная sub_s), которую нужно использовать в качестве шаблона регулярного выражения.
//Вам нужно вернуть из функции строку, в которой будут перечислены через запятую все совпадения шаблона с первой строкой.

function testRegExp(s, sub_s) {
    let sub_s2 =  new RegExp(sub_s,"g");
    let result = s.match(sub_s2);
    return result.join()
}
