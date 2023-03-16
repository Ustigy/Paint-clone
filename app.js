const canvas = document.getElementById('jsCanvas');

let painting = false;

if (canvas) {
    canvas.addEventListener('mousedown', onMouseDown);
    canvas.addEventListener('mousemove', onMouseMove);
    canvas.addEventListener('mouseup', stopPainting());
    canvas.addEventListener('mouseleave', stopPainting());
}

function onMouseDown (event) {
    painting = true;
}

function startPainting () {
    painting = true;
}

function stopPainting (event) {
    painting = false;
}

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

const ctx = canvas.getContext('2d');

ctx.lineWidth = 2.5;
ctx.strokeStyle = 'black';

canvas.height = 700;
canvas.width = 700;
