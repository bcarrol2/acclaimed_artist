window.addEventListener('load', () => {
    const canvas = document.querySelector('.canvas');
    const ctx = canvas.getContext('2d'); // context

    canvas.height = window.innerHeight;
    canvas.width = window.innerWidth;

    let draw = false;

    function positionStart(event) {
        draw = true;
        beginDrawing(event);
    }

    function positionDone() {
        draw = false;
        ctx.beginPath();
    }

    function beginDrawing(event) {
        if (!draw) return;
        ctx.lineWidth = 8;
        ctx.lineCap = "round";

        ctx.lineTo(event.clientX, event.clientY);
        ctx.stroke();
        // below is added for being able to click for dots without having to drag
        ctx.beginPath();
        ctx.moveTo(event.clientX, event.clientY)
    }

    canvas.addEventListener("mousedown", positionStart);
    canvas.addEventListener("mouseup", positionDone);
    canvas.addEventListener("mousemove", beginDrawing);

    // ctx.fillStyle = 'yellow'
    // ctx.fillRect(50, 50, 100, 100)

    // ctx.lineWidth = 5
    // ctx.strokeStyle = 'green'
    // ctx.strokeRect(30, 30, 80, 80)

    // for short lines
    // ctx.beginPath();
    // ctx.moveTo(200, 200);
    // ctx.lineTo(75, 85);
    // ctx.lineTo(75, 40);
    // ctx.closePath();
    // ctx.stroke();
})