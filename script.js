var myFigure;
var obstacles;
//создание фигуры
function game(){
    myFigure = new figure();
    myFigure.update();
}
//наш объект икей квадрат
function figure(){
    var canvas = document.getElementById("myCanvas");
    var ctx = canvas.getContext("2d");
    ctx.fillStyle = "#0000FF";
    ctx.fillRect(20,20,20,20);

//размеры нашего объетка

    this.x = 20;
    this.y = 20;
    this.width = 20;
    this.height = 20;
//анимация передвижения
    this.update = function(){
        ctx.clearRect(0,0,470,270);
        make_obstacle();
        ctx.fillRect(this.x, this.y,20,20);
        //
            //фигура для перемоги
            ctx.fillStyle ="#d3d3d3";
            ctx.fillRect(440,20,20,20);
//
//цикл который проверят взаимодейтсвие нашего кубика или объетка с колоннами
            for(i = 0; i<obstacles.length; i++){
                if(myFigure.crashEx(obstacles[i])){
                    lose();
                    return; 

                }
            }
            //условие для победы
            if((this.x>=440 && this.x <= 460) && (this.y>=20 && this.y<=40)){
                alert("You win");
                myFigure = new figure();
                myFigure.update ();


            }
    };

    this.crashEx = function(some_object){
        var left = this.x;
        var right = this.x +(some_object.width);
        var top = this.y;
        var bottom = this.y +(this.height)

// на случай проиграша, это все береться с 33 строки
        var o_left = some_object.x;
        var o_right = some_object.x +(some_object.width);
        var o_top = some_object.y;
        var o_bottom = some_object.y +(some_object.height);

        var crash = true;
        //сравниваем колонны
        if((bottom<o_top)||(top>o_bottom)||(right<o_left)||(left>o_right)){
            crash = false;

        }
        //возвращает если мы прикоснулись к колоннам
        return crash;

    }

}
// при прикосновении к препятсвию высвечиваеться надпись "You lose ", и затем наш квадрат возвращаеться на начальную точку
function lose (){
    alert (" You lose");
    myFigure = new figure();
    myFigure.update();
}
//
//Кнопки передвижение, где мы задаем на какое растояние будет передвигаться наш объект за один клик
function right(){
    myFigure.x +=10;
    myFigure.update();
}
//передвигаемся в право
function left (){
    myFigure.x -= 10;
    myFigure.update();
}
//передвигаемся в лево
function up (){
    myFigure.y -=20
    myFigure.update();
}
//передвигаемся в верх
function down (){
    myFigure.y +=20;
    myFigure.update();
}
//передвигаемся вниз

//тут создание наших колон
function obstacle(x,y,width,height,color){
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
    this.color = color;
    
//создание канваса
    var canvas = document.getElementById("myCanvas");
    var ctx = canvas.getContext("2d");
    ctx.fillStyle = color;
    ctx.fillRect(this.x,this.y,this.width,this.height);
    ctx.fillStyle = "#0000FF";


}
//Колонны, а так же их размер и цвет (массив)
function make_obstacle(){
    obstacles = [];
    obstacles.push(new obstacle(60,0,10,220, "#FF00FF"));
    obstacles.push(new obstacle(120,60,10,220, "#FF00FF"));
    obstacles.push(new obstacle(180,0,10,220, "#7CFC00"));
    obstacles.push(new obstacle(300,60,10,220, "#B22222"));
    obstacles.push(new obstacle(360,0,10,220, "#0000FF"));  
    obstacles.push(new obstacle(420,60,10,220, "#FFFF00"));
}