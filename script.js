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

pieceGoatDimension = {
    width: 50,
    height: 50
}

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

// coordinate conversion for 1d to 2d array format
const convertTo2d = (index) => {
    const row = Math.floor(index/5);
    const column = index % 5;
    return { row, column }
}

// coordinate conversion for 2d to 1d array format
const convertTo1d = (row, column) => {
    return row * 5 + column;
}

// add query selector to each tiles to get position for placement of piece on click event
const tiles = document.querySelectorAll('.tile');
tiles.forEach((tile, index) => {
    tile.addEventListener('click', () => {
        const { row, column } = convertTo2d(index);
        
        // add piece to board
        const container = document.querySelector('.container');
        const piece = document.createElement('img');
        piece.classList.add('piece');
        piece.classList.add(`piece-${index}`);
        piece.setAttribute('src', 'goat.png');
        piece.setAttribute('draggable', 'true');
        piece.style.backgroundImage = 'url("goat.png")';
        piece.style.top = `${canvasSquareDimension.height * row - pieceGoatDimension.height}px`
        piece.style.left = `${canvasSquareDimension.width * column - pieceGoatDimension.width / 2}px`

        piece.addEventListener('dragstart', (e) => {
            console.log('drag start');
        })

        piece.addEventListener('dragend', (e) => {
            console.log('drag end');
        })

        container.appendChild(piece);
    })
})

// dragover, dragenter, dragleave, drop







