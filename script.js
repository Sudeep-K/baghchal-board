const dpi = window.devicePixelRatio;

const canvas = document.querySelector('canvas');
const ctx = canvas.getContext('2d');

canvasDimension = {
    width: canvas.width,
    height: canvas.height
}

canvasSquareDimension = {
    width: canvasDimension.width / 4,
    height: canvasDimension.height / 4
}

tileTriangleDimension = {
    width: 38.5,
    height: 22.5,
    cornerRadius: 4
}

// const drawTriangleTile = (width, height, cornerRadius, anchorX, anchorY, rotation) => {
//     const topVertex = { x: anchorX, y: anchorY - height };
//     const leftVertex = { x: anchorX - width / 2, y: anchorY };
//     const rightVertex = { x: anchorX + width / 2, y: anchorY };

//     ctx.translate(anchorX, anchorY);
//     ctx.rotate(rotation);
//     ctx.translate(-anchorX, -anchorY);
    
//     ctx.beginPath();
//     ctx.moveTo(topVertex.x, topVertex.y);
//     ctx.arcTo(leftVertex.x, leftVertex.y, rightVertex.x, rightVertex.y, cornerRadius);
//     ctx.arcTo(rightVertex.x, rightVertex.y, topVertex.x, topVertex.y, cornerRadius);
//     ctx.arcTo(topVertex.x, topVertex.y, leftVertex.x, leftVertex.y, cornerRadius);
    
//     ctx.setTransform(1, 0, 0, 1, 0, 0);
    
//     ctx.fillStyle = '#000000';
//     ctx.fill();
// }

const drawBoard = (canvasDimension, canvasSquareDimension) => {
    // a1 - b1
    ctx.beginPath();
    ctx.moveTo(0, 0);
    ctx.lineTo(canvasSquareDimension.width, canvasSquareDimension.height);
    ctx.lineTo(canvasSquareDimension.width, 0);
    ctx.lineTo(0, 0);
    ctx.fillStyle = '#757592';
    ctx.fill();
    ctx.stroke();

    ctx.beginPath();
    ctx.moveTo(0, 0);
    ctx.lineTo(canvasSquareDimension.width, canvasSquareDimension.height);
    ctx.lineTo(0, canvasSquareDimension.height);
    ctx.lineTo(0, 0);
    ctx.fillStyle = '#757592';
    ctx.fill();
    ctx.stroke();

    // b1 - c1
    ctx.beginPath();
    ctx.moveTo(canvasSquareDimension.width, 0);
    ctx.lineTo(canvasSquareDimension.width * 2, 0);
    ctx.lineTo(canvasSquareDimension.width, canvasSquareDimension.height);
    ctx.lineTo(canvasSquareDimension.width, 0);
    ctx.fillStyle = '#757592';
    ctx.fill();
    ctx.stroke();

    ctx.beginPath();
    ctx.moveTo(canvasSquareDimension.width * 2, 0);
    ctx.lineTo(canvasSquareDimension.width * 2, canvasSquareDimension.height);
    ctx.lineTo(canvasSquareDimension.width, canvasSquareDimension.height);
    ctx.lineTo(canvasSquareDimension.width * 2, 0);
    ctx.stroke();

    // c1 - d1
    ctx.beginPath();
    ctx.moveTo(canvasSquareDimension.width * 2, 0);
    ctx.lineTo(canvasSquareDimension.width * 3, canvasSquareDimension.height);
    ctx.lineTo(canvasSquareDimension.width * 2, canvasSquareDimension.height);
    ctx.lineTo(canvasSquareDimension.width * 2, 0);
    ctx.stroke();

    ctx.beginPath();
    ctx.moveTo(canvasSquareDimension.width * 2, 0);
    ctx.lineTo(canvasSquareDimension.width * 3, 0);
    ctx.lineTo(canvasSquareDimension.width * 3, canvasSquareDimension.height);
    ctx.lineTo(canvasSquareDimension.width * 2, 0);
    ctx.fillStyle = '#757592';
    ctx.fill();
    ctx.stroke();

    // d1 - e1
    ctx.beginPath();
    ctx.moveTo(canvasSquareDimension.width * 3, 0);
    ctx.lineTo(canvasSquareDimension.width * 3, canvasSquareDimension.height);
    ctx.lineTo(canvasSquareDimension.width * 4, 0);
    ctx.lineTo(canvasSquareDimension.width * 3, 0);
    ctx.fillStyle = '#757592';
    ctx.fill();
    ctx.stroke();

    ctx.beginPath();
    ctx.moveTo(canvasSquareDimension.width * 4, 0);
    ctx.lineTo(canvasSquareDimension.width * 4, canvasSquareDimension.height);
    ctx.lineTo(canvasSquareDimension.width * 3, canvasSquareDimension.height);
    ctx.lineTo(canvasSquareDimension.width * 4, 0);
    ctx.fillStyle = '#757592';
    ctx.fill();
    ctx.stroke();

    // a2 - b2
    ctx.beginPath();
    ctx.moveTo(0, canvasSquareDimension.height);
    ctx.lineTo(0, canvasSquareDimension.height * 2);
    ctx.lineTo(canvasSquareDimension.width, canvasSquareDimension.height);
    ctx.lineTo(0, canvasSquareDimension.height);
    ctx.fillStyle = '#757592';
    ctx.fill();
    ctx.stroke();

    ctx.beginPath();
    ctx.moveTo(canvasSquareDimension.width, canvasSquareDimension.height);
    ctx.lineTo(canvasSquareDimension.width, canvasSquareDimension.height * 2);
    ctx.lineTo(0, canvasSquareDimension.height * 2);
    ctx.lineTo(canvasSquareDimension.width, canvasSquareDimension.height);
    ctx.stroke();

    // b2 - c2
    ctx.beginPath();
    ctx.moveTo(canvasSquareDimension.width, canvasSquareDimension.height);
    ctx.lineTo(canvasSquareDimension.width * 2, canvasSquareDimension.height * 2);
    ctx.lineTo(canvasSquareDimension.width, canvasSquareDimension.height * 2);
    ctx.lineTo(canvasSquareDimension.width, canvasSquareDimension.height);
    ctx.stroke();

    ctx.beginPath();
    ctx.moveTo(canvasSquareDimension.width, canvasSquareDimension.height);
    ctx.lineTo(canvasSquareDimension.width * 2, canvasSquareDimension.height);
    ctx.lineTo(canvasSquareDimension.width * 2, canvasSquareDimension.height * 2);
    ctx.lineTo(canvasSquareDimension.width, canvasSquareDimension.height);
    ctx.fillStyle = '#B15653';
    ctx.fill();
    ctx.stroke();

    // c2 - d2
    ctx.beginPath();
    ctx.moveTo(canvasSquareDimension.width * 2, canvasSquareDimension.height);
    ctx.lineTo(canvasSquareDimension.width * 3, canvasSquareDimension.height);
    ctx.lineTo(canvasSquareDimension.width * 2, canvasSquareDimension.height * 2);
    ctx.lineTo(canvasSquareDimension.width * 2, canvasSquareDimension.height);
    ctx.stroke();

    ctx.beginPath();
    ctx.moveTo(canvasSquareDimension.width * 2, canvasSquareDimension.height * 2);
    ctx.lineTo(canvasSquareDimension.width * 3, canvasSquareDimension.height * 2);
    ctx.lineTo(canvasSquareDimension.width * 3, canvasSquareDimension.height);
    ctx.lineTo(canvasSquareDimension.width * 2, canvasSquareDimension.height * 2);
    ctx.fillStyle = '#B15653';
    ctx.fill();
    ctx.stroke();

    // d2 - e2
    ctx.beginPath();
    ctx.moveTo(canvasSquareDimension.width * 3, canvasSquareDimension.height);
    ctx.lineTo(canvasSquareDimension.width * 4, canvasSquareDimension.height * 2);
    ctx.lineTo(canvasSquareDimension.width * 3, canvasSquareDimension.height * 2);
    ctx.lineTo(canvasSquareDimension.width * 3, canvasSquareDimension.height);
    ctx.stroke();

    ctx.beginPath();
    ctx.moveTo(canvasSquareDimension.width * 3, canvasSquareDimension.height);
    ctx.lineTo(canvasSquareDimension.width * 4, canvasSquareDimension.height);
    ctx.lineTo(canvasSquareDimension.width * 4, canvasSquareDimension.height * 2);
    ctx.lineTo(canvasSquareDimension.width * 3, canvasSquareDimension.height);
    ctx.fillStyle = '#757592';
    ctx.fill();
    ctx.stroke();

    // a3 - b3
    ctx.beginPath();
    ctx.moveTo(0, canvasSquareDimension.height * 2);
    ctx.lineTo(0, canvasSquareDimension.height * 3);
    ctx.lineTo(canvasSquareDimension.width, canvasSquareDimension.height * 3);
    ctx.lineTo(0, canvasSquareDimension.height * 2);
    ctx.fillStyle = '#757592';
    ctx.fill();
    ctx.stroke();

    ctx.beginPath();
    ctx.moveTo(0, canvasSquareDimension.height * 2);
    ctx.lineTo(canvasSquareDimension.width, canvasSquareDimension.height * 2);
    ctx.lineTo(canvasSquareDimension.width, canvasSquareDimension.height * 3);
    ctx.lineTo(0, canvasSquareDimension.height * 2);
    ctx.stroke();

    // b3 - c3
    ctx.beginPath();
    ctx.moveTo(canvasSquareDimension.width, canvasSquareDimension.height * 2);
    ctx.lineTo(canvasSquareDimension.width * 2, canvasSquareDimension.height * 2);
    ctx.lineTo(canvasSquareDimension.width, canvasSquareDimension.height * 3);
    ctx.lineTo(canvasSquareDimension.width, canvasSquareDimension.height * 2);
    ctx.fillStyle = '#B15653';
    ctx.fill();
    ctx.stroke();

    ctx.beginPath();
    ctx.moveTo(canvasSquareDimension.width * 2, canvasSquareDimension.height * 2);
    ctx.lineTo(canvasSquareDimension.width * 2, canvasSquareDimension.height * 3);
    ctx.lineTo(canvasSquareDimension.width, canvasSquareDimension.height * 3);
    ctx.lineTo(canvasSquareDimension.width * 2, canvasSquareDimension.height * 2);
    ctx.stroke();

    // c3 - d3
    ctx.beginPath();
    ctx.moveTo(canvasSquareDimension.width * 2, canvasSquareDimension.height * 2);
    ctx.lineTo(canvasSquareDimension.width * 3, canvasSquareDimension.height * 3);
    ctx.lineTo(canvasSquareDimension.width * 2, canvasSquareDimension.height * 3);
    ctx.lineTo(canvasSquareDimension.width * 2, canvasSquareDimension.height * 2);
    ctx.fillStyle = '#B15653';
    ctx.fill();
    ctx.stroke();

    ctx.beginPath();
    ctx.moveTo(canvasSquareDimension.width * 2, canvasSquareDimension.height * 2);
    ctx.lineTo(canvasSquareDimension.width * 3, canvasSquareDimension.height * 2);
    ctx.lineTo(canvasSquareDimension.width * 3, canvasSquareDimension.height * 3);
    ctx.lineTo(canvasSquareDimension.width * 2, canvasSquareDimension.height * 2);
    ctx.stroke();

    // d3 - e3
    ctx.beginPath();
    ctx.moveTo(canvasSquareDimension.width * 3, canvasSquareDimension.height * 2);
    ctx.lineTo(canvasSquareDimension.width * 4, canvasSquareDimension.height * 2);
    ctx.lineTo(canvasSquareDimension.width * 3, canvasSquareDimension.height * 3);
    ctx.lineTo(canvasSquareDimension.width * 3, canvasSquareDimension.height * 2);
    ctx.stroke();

    ctx.beginPath();
    ctx.moveTo(canvasSquareDimension.width * 4, canvasSquareDimension.height * 2);
    ctx.lineTo(canvasSquareDimension.width * 4, canvasSquareDimension.height * 3);
    ctx.lineTo(canvasSquareDimension.width * 3, canvasSquareDimension.height * 3);
    ctx.lineTo(canvasSquareDimension.width * 4, canvasSquareDimension.height * 2);
    ctx.fillStyle = '#757592';
    ctx.fill();
    ctx.stroke();

    // a4 - b4
    ctx.beginPath();
    ctx.moveTo(0, canvasSquareDimension.height * 3);
    ctx.lineTo(0, canvasSquareDimension.height * 4);
    ctx.lineTo(canvasSquareDimension.width, canvasSquareDimension.height * 3);
    ctx.lineTo(0, canvasSquareDimension.height * 3);
    ctx.fillStyle = '#757592';
    ctx.fill();
    ctx.stroke();

    ctx.beginPath();
    ctx.moveTo(canvasSquareDimension.width, canvasSquareDimension.height * 3);
    ctx.lineTo(canvasSquareDimension.width, canvasSquareDimension.height * 4);
    ctx.lineTo(0, canvasSquareDimension.height * 4);
    ctx.lineTo(canvasSquareDimension.width, canvasSquareDimension.height * 3);
    ctx.fillStyle = '#757592';
    ctx.fill();
    ctx.stroke();

    // b4 - c4
    ctx.beginPath();
    ctx.moveTo(canvasSquareDimension.width, canvasSquareDimension.height * 3);
    ctx.lineTo(canvasSquareDimension.width * 2, canvasSquareDimension.height * 4);
    ctx.lineTo(canvasSquareDimension.width, canvasSquareDimension.height * 4);
    ctx.lineTo(canvasSquareDimension.width, canvasSquareDimension.height * 3);
    ctx.fillStyle = '#757592';
    ctx.fill();
    ctx.stroke();

    ctx.beginPath();
    ctx.moveTo(canvasSquareDimension.width, canvasSquareDimension.height * 3);
    ctx.lineTo(canvasSquareDimension.width * 2, canvasSquareDimension.height * 3);
    ctx.lineTo(canvasSquareDimension.width * 2, canvasSquareDimension.height * 4);
    ctx.lineTo(canvasSquareDimension.width, canvasSquareDimension.height * 3);
    ctx.stroke();

    // c4 - d4
    ctx.beginPath();
    ctx.moveTo(canvasSquareDimension.width * 2, canvasSquareDimension.height * 3);
    ctx.lineTo(canvasSquareDimension.width * 2, canvasSquareDimension.height * 4);
    ctx.lineTo(canvasSquareDimension.width * 3, canvasSquareDimension.height * 3);
    ctx.lineTo(canvasSquareDimension.width * 2, canvasSquareDimension.height * 3);
    ctx.stroke();

    ctx.beginPath();
    ctx.moveTo(canvasSquareDimension.width * 3, canvasSquareDimension.height * 3);
    ctx.lineTo(canvasSquareDimension.width * 3, canvasSquareDimension.height * 4);
    ctx.lineTo(canvasSquareDimension.width * 2, canvasSquareDimension.height * 4);
    ctx.lineTo(canvasSquareDimension.width * 3, canvasSquareDimension.height * 3);
    ctx.fillStyle = '#757592';
    ctx.fill();
    ctx.stroke();

    // d4 - e4
    ctx.beginPath();
    ctx.moveTo(canvasSquareDimension.width * 3, canvasSquareDimension.height * 3);
    ctx.lineTo(canvasSquareDimension.width * 4, canvasSquareDimension.height * 4);
    ctx.lineTo(canvasSquareDimension.width * 3, canvasSquareDimension.height * 4);
    ctx.lineTo(canvasSquareDimension.width * 3, canvasSquareDimension.height * 3);
    ctx.fillStyle = '#757592';
    ctx.fill();
    ctx.stroke();

    ctx.beginPath();
    ctx.moveTo(canvasSquareDimension.width * 3, canvasSquareDimension.height * 3);
    ctx.lineTo(canvasSquareDimension.width * 4, canvasSquareDimension.height * 3);
    ctx.lineTo(canvasSquareDimension.width * 4, canvasSquareDimension.height * 4);
    ctx.lineTo(canvasSquareDimension.width * 3, canvasSquareDimension.height * 3);
    ctx.fillStyle = '#757592';
    ctx.fill();
    ctx.stroke();
}


drawBoard(canvasDimension, canvasSquareDimension);









