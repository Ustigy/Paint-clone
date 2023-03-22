const canvas = document.getElementById('jsCanvas');

const CANVAS_SIZE = 700;

canvas.height = CANVAS_SIZE;
canvas.width = CANVAS_SIZE;

let painting = false;
let filling = false;

if (canvas) {
    canvas.addEventListener('mousedown', onMouseDown);
    canvas.addEventListener('mousemove', onMouseMove);
    canvas.addEventListener('mouseup', stopPainting);
    canvas.addEventListener('mouseleave', stopPainting);
    canvas.addEventListener('click', handleCanvasClick);
    canvas.addEventListener('contextmenu', handleCM);
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

ctx.fillStyle = 'white';
ctx.fillRect(0,0,CANVAS_SIZE,CANVAS_SIZE);

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
    ctx.fillStyle = color;
}

const range = document.getElementById('jsRange');

if (range) {
    range.addEventListener('input', handleRangeChange);
}

function handleRangeChange (event) {
    const rangeValue = event.target.value;
    ctx.lineWidth = rangeValue;
}

const mode = document.getElementById('jsMode');

if (mode) {
    mode.addEventListener('click', handleModeClick);
}

function handleModeClick (event) {
    if (filling) {
        filling = false;
        mode.innerText = 'Заливка';
    } else {
        filling = true;
        mode.innerText = 'Рисование';
    }
}

function handleCanvasClick (event) {
    if (filling) {
        ctx.fillRect(0,0,CANVAS_SIZE,CANVAS_SIZE);
    }
}

const saveBtn = document.getElementById('jsSave');

function handleCM (event) {
    event.preventDefault();
}

if (saveBtn) {
    saveBtn.addEventListener('click', handleSaveClick);
}

function handleSaveClick (event) {
    const image = canvas.toDataURL();
    const link = document.createElement('a');
    link.href = image;
    link.download = 'PaintJS [Export]';
    link.click();
}