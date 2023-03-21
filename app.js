const canvas = document.getElementById('jsCanvas');
canvas.height = 700;
canvas.width = 700;

let painting = false;

if (canvas) {
    canvas.addEventListener('mousedown', onMouseDown);
    canvas.addEventListener('mousemove', onMouseMove);
    canvas.addEventListener('mouseup', stopPainting);
    canvas.addEventListener('mouseleave', stopPainting);
}

function onMouseDown (event) {
    painting = true;
}

function startPainting (event) {
    painting = true;
}

function stopPainting (event) {
    painting = false;
}

const ctx = canvas.getContext('2d');

ctx.lineWidth = 2.5;
ctx.strokeStyle = 'black';

function onMouseMove (event) {
    x = event.offsetX;
    y = event.offsetY;
    if(!painting) {
        ctx.beginPath();
        ctx.moveTo(x, y);
    } else {
        ctx.lineTo(x, y);
        ctx.stroke();
    }
}

const colors = document.getElementsByClassName('jsColor');

Array.from(colors).forEach(color => color.addEventListener('click', handleColorClick));

function handleColorClick (event) {
    let color = event.target.style.backgroundColor;
    ctx.strokeStyle = color;
}