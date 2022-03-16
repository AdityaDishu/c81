canvas=document.getElementById("myCanvas");
color="cyan";
canvas.getContext("2d").beginPath();
canvas.getContext("2d").strokeStyle=color;
canvas.getContext("2d").lineWidth=2;
canvas.getContext("2d").arc(200,200,40,0,2*Math.PI);
canvas.getContext("2d").stroke();
canvas.addEventListener("mousedown",my_mousedown);
function my_mousedown(e)
{
   color=document.getElementById("color").value;
    console.log(color);
    mouse_x=e.clientX-canvas.offsetLeft;
    mouse_y=e.clientY-canvas.offsetTop;
    console.log("X"+mouse_x +" ,Y="+mouse_y);
    circle(mouse_x,mouse_y);
}
function circle(mouse_x,mouse_y)
{
    canvas.getContext("2d").beginPath();
canvas.getContext("2d").strokeStyle=color;
canvas.getContext("2d").lineWidth=2;
canvas.getContext("2d").arc(mouse_x,mouse_y,40,0,2*Math.PI);
canvas.getContext("2d").stroke();
}
function clearArea()
{
    canvas.getContext("2d").clearRect(0,0,canvas.width,canvas.height);
}