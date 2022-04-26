var canv = document.getElementById('canvas'); 
var ctx = canv.getContext('2d'),
isMouseDown = false, 
coords = [], //координаты для запоминания
radius = 5;


//размер окошка канваса
canv.width = 3000;
canv.height = 3000;

//нажатие на кнопку мыши
canv.addEventListener('mousedown', function(){
    isMouseDown = true;
})

//отпускаем кнопку
canv.addEventListener('mouseup', function(){
    isMouseDown = false;

    //чтобы не было бага, когда мы отпустили мышь а рисунок следует за нами, то есть сбрасываем путь
    ctx.beginPath();

    //добавляем в координаты поднятие мыши для повторной отрисовки, чтобы не было бага, что рисунок следует за нами
    coords.push('mouseup');
})

ctx.lineWidth = radius*2;

//дивжение мыши
canv.addEventListener('mousemove', function(e){
    if ( isMouseDown ){

        coords.push([e.clientX, e.clientY]); // запоминание координат

        //чтобы не было гэпов - пробелов между кругами, надо нарисовать линию 
        ctx.lineTo(e.clientX, e.clientY);
        ctx.stroke();
        
        //рисуем круг
        ctx.beginPath();
        ctx.arc(e.clientX, e.clientY, radius, 0, Math.PI * 2);
        ctx.fill();

        //начинаем новый путь и меняем позицию курсора
        ctx.beginPath();
        ctx.moveTo(e.clientX, e.clientY);
    }
})

function save(){

    //сохранение в локал сторидж координат
    localStorage.setItem('coords', JSON.stringify(coords));
}

function clear(){
    //все зарисовывается белым (типо очищается)
    ctx.fillStyle = 'white';
    ctx.fillRect(0,0,canv.width, canv.height);

    //сбрасывается текущий путь и цвет заливки меняется на черный
    ctx.beginPath();
    ctx.fillStyle = 'black';
}

function replay(){
    var timer = setInterval(function(){
        if (!coords.length)
        {
            clearInterval(timer);
            ctx.beginPath();
            return;
        }
        var crd = coords.shift(), 
            e = {
                clientX: crd["0"], 
                clientY: crd["1"]
            };

        //чтобы не было гэпов - пробелов между кругами, надо нарисовать линию 
        ctx.lineTo(e.clientX, e.clientY);
        ctx.stroke();
        
        //рисуем круг
        ctx.beginPath();
        ctx.arc(e.clientX, e.clientY, radius, 0, Math.PI * 2);
        ctx.fill();

        //начинаем новый путь и меняем позицию курсора
        ctx.beginPath();
        ctx.moveTo(e.clientX, e.clientY);

    }, 3)
}

document.addEventListener('keydown', function(e){
    // console.log(e.keyCode); //чтобы посмотреть код нажатой кпопки

    // save - S
    if(e.keyCode == 83)
    {
        save();
        console.log("Saved!");
    }

    // replay
    if (e.keyCode == 82){

        console.log("Replaying ... ");
        
        coords = JSON.parse(localStorage.getItem('coords'));
        clear();
        replay();

    }

    // clear - C 
    if (e.keyCode == 67){
        clear();
        console.log("Clear!");
    }
})
