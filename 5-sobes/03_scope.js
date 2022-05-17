//local 
//global

function funcA(){
    let a = 1;

    function funcB(){
        let b = 2;

        function funC(){
            let c =3;
            console.log('func C: ', a, b, c);
           
        }
        funC()
        console.log('func B: ', a, b);
    }
    funcB()
    console.log('func A: ', a);
}

funcA();
// func C:  1 2 3
// func B:  1 2
// func A:  1