var color = "red";
var ancho = 5;
var x = 10;
var y = 10;
var xprevia = 10;
var yprevia = 10;
var mouseEvent = "";

var canvas = document.getElementById("Lienzo");
var ctx = canvas.getContext("2d");

function circulo(){
    ctx.strokeStyle = color;
    ctx.lineWidth = ancho;
    ctx.beginPath();
    ctx.arc(x, y, 40, 0, Math.PI * 2);
    ctx.stroke();
}

function linea(){
    ctx.strokeStyle = color;
    ctx.lineWidth = ancho;
    ctx.beginPath();
    ctx.moveTo(x, y);
    ctx.lineTo(xprevia, yprevia);
    ctx.stroke();
}

canvas.addEventListener("mousedown", my_mousedown);
canvas.addEventListener("mousemove", my_mousemove);
canvas.addEventListener("mouseleave", my_mouseleave);
canvas.addEventListener("mouseup", my_mouseup);
canvas.addEventListener("touchstart", my_touchstart);
canvas.addEventListener("touchmove", my_touchmove);




function my_mousedown(e){
    x = e.clientX - canvas.offsetLeft;
    y = e.clientY - canvas.offsetTop;
    color = document.getElementById("color").value;
    ancho = document.getElementById("ancho").value;
    mouseEvent = "mousedown";
}

function my_mousemove(e){
    xprevia = e.clientX - canvas.offsetLeft;
    yprevia = e.clienty - canvas.offsetTop;
    if (mouseEvent == "mousedown") {
        linea();
    }
    x = xprevia;
    y = yprevia;

}

function my_mouseleave(e){
    mouseEvent = "mouseleave";
}
function my_mouseup(e){
    mouseEvent = "mouseleave";
}

if(screen.width < 992){
    canvas.width = screen.width - 100;
    canvas.height = screen.height / 2;
    document.body.style.overflow = "hidden";
}
function my_touchstart(e){
    x = e.touches[0].clientX - canvas.offsetLeft;
    y = e.touches[0].clientY - canvas.offsetTop;
    color = document.getElementById("color").value;
    ancho = document.getElementById("ancho").value;
}
function my_touchmove(e){
    xprevia = e.touches[0].clientX - canvas.offsetLeft;
    yprevia = e.touches[0].clienty - canvas.offsetTop;
    
        linea();
    
    x = xprevia;
    y = yprevia;
}