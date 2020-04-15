const BACLGROUND_COLOR = '#000000';
const LINE_COLOR = '#FFFFFF';
const LINE_WIDTH = 15;

let currentX = 0;
let currentY = 0;
let previousX = 0;
let previousY = 0;
let isPainting = false;
let canvas;
let context;

function prepareCanvas() {
    // console.log('Preparing canvas!!!');

    canvas = document.getElementById('my-canvas');
    context = canvas.getContext('2d');
    context.fillStyle = BACLGROUND_COLOR;

    context.fillRect(0, 0, canvas.clientWidth, canvas.clientHeight);

    context.strokeStyle = LINE_COLOR;
    context.lineWidth = LINE_WIDTH;
    context.lineJoin = 'round';


    document.addEventListener('mousedown', (event) => {
        isPainting = true;
        // console.log('X Coordinate:'+ event.clientX);
        // console.log('Y Coordinate:'+ event.clientY);
        // console.log('Mouse Pressed');
        currentX = event.clientX - canvas.offsetLeft;
        currentY = event.clientY - canvas.offsetTop;
    });

    document.addEventListener('mouseup', (event) => {
        isPainting = false;
        // console.log('Mouse Released');
    })

    document.addEventListener('mousemove', (event) => {
        if (isPainting) {
            previousX = currentX;
            // Move the origin to the top-left corner of canvas 
            currentX = event.clientX - canvas.offsetLeft;

            previousY = currentY;
            // Move the origin to the top-left corner of canvas 
            currentY = event.clientY - canvas.offsetTop;

            draw();
        }
    });

    canvas.addEventListener('mouseleave',(event)=>{
        isPainting = false;
    });

    //Touch responses with mobile and tablet
    document.addEventListener('touchstart',(event)=>{
        isPainting = true;
        // console.log('X Coordinate:'+ event.clientX);
        // console.log('Y Coordinate:'+ event.clientY);
        // console.log('touch Pressed');
        currentX = event.touches[0].clientX - canvas.offsetLeft;
        currentY = event.touches[0].clientY - canvas.offsetTop;
    })
    
    document.addEventListener('touchend',(event)=>{
        isPainting = false;
    })

    document.addEventListener('touchcancel',(event)=>{
        isPainting = false;
    })

    canvas.addEventListener('touchmove',(event)=>{
        // console.log('touch moved');
        if (isPainting) {
            previousX = currentX;
            // Move the origin to the top-left corner of canvas 
            currentX = event.touches[0].clientX - canvas.offsetLeft;
    
            previousY = currentY;
            // Move the origin to the top-left corner of canvas 
            currentY = event.touches[0].clientY - canvas.offsetTop;
    
            draw();
        }
    })
}

function draw() {
    context.beginPath();
    context.moveTo(previousX, previousY);
    context.lineTo(currentX, currentY);
    context.closePath();
    context.stroke();
}

function clearCanvas() {

    currentX = 0;
    currentY = 0;
    previousX = 0;
    previousY = 0;
    context.fillRect(0, 0, canvas.clientWidth, canvas.clientHeight);
}