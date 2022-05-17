function typeof_examples(){
    console.log( typeof 'Hi'); //string
    console.log( typeof true); //boolean
    console.log( typeof function () {}); //function
    console.log( typeof NaN); // number
    console.log( typeof 1/0); //NaN
    console.log( typeof 1); //nubmer
    console.log( typeof Math); //Object
    console.log( typeof undefined * 2); //Nan
    let a;
    console.log( typeof a); //undefinded
    var b;
    console.log( typeof b); //undefinded
    console.log( typeof Infinity); //number
}

function string_examples(){
    console.log("EXAMPLES: ");

    console.log(1 + '2'); //12
    console.log(1 + '2' + 1); //121
    console.log('' + 1 + 0 ); //10
    console.log('' - 1 + '2'); //-12
    console.log(''- 1 + 2); //1
    console.log(1 +  2 + '2'); //32
    console.log('3' * '2'); //6
    console.log('42' - 40); //2
    console.log('42px' - 20); //Nan
    console.log(null + 2); //2
    console.log(undefined + 2); //Nan
}

function equels(){
    console.log(1 == '1'); //true
    console.log(1 === '1'); //false
    console.log(undefined == null); //true
    console.log(undefined === null); //false
    console.log('0' == false); //true
    console.log('0' == 0); //true
    console.log('' === false); //false
    console.log(false == []); //true
    console.log(false == {}); //false
    //{} - !

}


equels();





