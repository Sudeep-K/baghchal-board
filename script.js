const dpi = window.devicePixelRatio;

const canvas = document.querySelector('canvas');
const ctx = canvas.getContext('2d');
const directions = [
    { row: -1, col: 0 }, // Up
    { row: 1, col: 0 }, // Down
    { row: 0, col: -1 }, // Left
    { row: 0, col: 1 }, // Right
];
const directionsWithDiagonal = [
    { row: -1, col: 0 }, // Up
    { row: 1, col: 0 }, // Down
    { row: 0, col: -1 }, // Left
    { row: 0, col: 1 }, // Right
    { row: -1, col: -1 },  //top left
    { row: -1, col: 1 },  //top right
    { row: 1, col: -1 },  //bottom left
    { row: 1, col: 1 },  //bottom right
];

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

pieceTigerDimension = {
    width: 50,
    height: 50
}

draggedPieceInfo = {
    pieceClassName: ''
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

const Board = {
    //goat 1
    //tiger 0
    board: [
        [0, null, null, null, 0],
        [null, null, null, null, null],
        [null, null, null, null, null],
        [null, null, null, null, null],
        [0, null, null, null, 0],
    ],

    tigers: {
        trapped: [], //no of trapped tigers
        position: [[0, 0], [0, 4], [4, 0], [4, 4]],

    },

    goats: {
        onHand: 20,  //initially 20 Goats are in hand to place
        killed: 0,   //initially 0 goats are killed
        spaceCaptured: [],
    },

    playerTurn: "goat", //initially its goat turn

    //Position of peice selected (find next valid move for this piece)
    //-1 means no selection needed (placing the goats on baord still left)
    selectedPosition: [3, 1],
    nextValidMoves: [],   //valid move for selected peice
}
//chek the position is even
checkEven = (position) => {
    // even
    if ((position[0] + position[1]) % 2 === 0) {
        // console.log("even")
        return true;
    }
    else return false;
}
// valid moves for the selected piece
const validMove = (Board) => {
    //valid moves to be returened
    const nextValidMoves = [];

    // Check if it's the goat's turn and there are goats left to place on the board
    if (Board.playerTurn === "goat" && Board.goats.onHand > 0) {
        //Iterate over each cell of the board
        for (let row = 0; row < Board.board.length; row++) {
            for (let column = 0; column < Board.board[row].length; column++) {
                // Check if the cell is empty (null) and add it as a valid move
                if (Board.board[row][column] === null) {
                    // nextValidMoves.push([row, column,checkGoatAction(Board,row,column)])
                    nextValidMoves.push([row, column])
                }
            }
        }
    }
    //check valid moves when its turn for goat to move
    else if (Board.playerTurn === "goat" &&
        Board.goats.onHand === 0 &&
        Board.board[Board.selectedPosition[0]][Board.selectedPosition[1]] === 1) {
        const row = Board.selectedPosition[0]
        const col = Board.selectedPosition[1]

        console.log("selected position goat", row, col)

        //if the selected position is even
        if (checkEven(Board.selectedPosition)) {
            //we need to check for diagonal too cause the pieces in even places have that choices
            directionChoice = directionsWithDiagonal
        }
        else {
            directionChoice = directions
        }
        for (const direction of directionChoice) {
            const newRow = row + direction.row;
            const newCol = col + direction.col;

            // console.log(newRow,newCol)

            // Check if the new position is within the bounds of the board
            if (newRow >= 0 &&
                newRow < Board.board.length &&
                newCol >= 0 &&
                newCol < Board.board[row].length) {
                // Check if the new position is empty
                if (Board.board[newRow][newCol] === null) {
                    nextValidMoves.push([newRow, newCol])
                }
            }
        }
    }
    //check valid moves when its turn for Tiger to move
    else {
        const row = Board.selectedPosition[0]
        const col = Board.selectedPosition[1]

        console.log("selected position Tiger", row, col)

        //if the selected position is even
        if (checkEven(Board.selectedPosition)) {
            //we need to check for diagonal too cause the pieces in even places have that choices
            directionChoice = directionsWithDiagonal
        }
        else {
            directionChoice = directions
        }
        for (const direction of directionChoice) {
            const newRow = row + direction.row;
            const newCol = col + direction.col;

            //one more step in a straight line
            const newKillRow = newRow + direction.row;
            const newKillCol = newCol + direction.col;

            // console.log("new", newRow, newCol)
            // console.log("newkill", newKillRow, newKillCol)

            // Check if the new position is within the bounds of the board
            if (newRow >= 0 &&
                newRow < Board.board.length &&
                newCol >= 0 &&
                newCol < Board.board[row].length
            ) {
                // Check if the new position is empty
                if (Board.board[newRow][newCol] === null) {
                    // nextValidMoves.push([newRow, newCol, "move"])
                    nextValidMoves.push([newRow, newCol])
                    // console.log("push new", newRow, newCol)
                }
                //if killing a goat is possible by going over the goat position in a straight line
                else if (Board.board[newRow][newCol] === 1) {
                    //check if it is in bound of board
                    if (newKillRow >= 0 &&
                        newKillRow < Board.board.length &&
                        newKillCol >= 0 &&
                        newKillCol < Board.board[row].length
                    ) {
                        if (Board.board[newKillRow][newKillCol] === null) {
                            // nextValidMoves.push([newKillRow, newKillCol, "kill"])
                            nextValidMoves.push([newKillRow, newKillCol])
                            // console.log("push newkill", newKillRow, newKillCol)
                        }
                    }
                }
            }
        }
    }
    return (nextValidMoves);
}

//returns the tiger trapped in the board
trappedTigers = (Board) => {
    newTrapped = []
    for (let i = 0; i < 4; i++) {
        let anyValidMove = []
        position = Board.tigers.position[i]
        row = position[0]
        col = position[1]
        //if the selected position is even
        if (checkEven(row, col)) {
            //we need to check for diagonal too cause the pieces in even places have that choices
            directionChoice = directionsWithDiagonal
        }
        else {
            directionChoice = directions
        }
        for (const direction of directionChoice) {
            const newRow = row + direction.row;
            const newCol = col + direction.col;

            //one more step in a straight line
            const newKillRow = newRow + direction.row;
            const newKillCol = newCol + direction.col;

            // console.log("new", newRow, newCol)
            // console.log("newkill", newKillRow, newKillCol)

            // Check if the new position is within the bounds of the board
            if (newRow >= 0 &&
                newRow < Board.board.length &&
                newCol >= 0 &&
                newCol < Board.board[row].length
            ) {
                // Check if the new position is empty
                if (Board.board[newRow][newCol] === null) {
                    anyValidMove.push([newRow, newCol])
                    // console.log("push traped", newRow, newCol)
                }
                //if killing a goat is possible by going over the goat position in a straight line
                else if (Board.board[newRow][newCol] === 1) {
                    //check if it is in bound of board
                    if (newKillRow >= 0 &&
                        newKillRow < Board.board.length &&
                        newKillCol >= 0 &&
                        newKillCol < Board.board[row].length
                    ) {
                        if (Board.board[newKillRow][newKillCol] === null) {
                            anyValidMove.push([newKillRow, newKillCol])
                            // console.log("push newkill", newKillRow, newKillCol)
                        }
                    }
                }
            }
        }
        if (anyValidMove.length === 0) {
            newTrapped.push(Board.tigers.position[i])
        }
    }
    return (newTrapped)
}

gameOver = (Board) => {
    //1 means Goat win
    //0 Means Tiger win

    // condn. 1 => killed 5 goats
    if (Board.goats.killed >= 5) {
        return 0;
    }
    //condn. 2 => goats have no valid moves  (if game has atleast one goat with a valid place to move than game not over)
    else if (Board.goats.onHand === 0) {
        validMovenumber = 0;
        for (let row = 0; row < Board.board.length && validMovenumber === 0; row++) {
            for (let col = 0; col < Board.board[row].length && validMovenumber === 0; col++) {
                if (Board.board[row][col] === null) {

                    if (checkEven(row, col)) {
                        //we need to check for diagonal too cause the pieces in even places have that choices
                        directionChoice = directionsWithDiagonal
                    }
                    else {
                        directionChoice = directions
                    }
                    for (const direction of directionChoice) {
                        const newRow = row + direction.row;
                        const newCol = col + direction.col;

                        if (newRow >= 0 &&
                            newRow < Board.board.length &&
                            newCol >= 0 &&
                            newCol < Board.board[row].length &&
                            Board.board[newRow][newCol] === 1
                        ) {
                            validMovenumber++;
                            break;
                        }
                    }
                }
            }
        }
        if (validMovenumber === 0) {
            console.log("validMovenumber", validMovenumber)
            return 0
        }
    }
    //condn. 3 => all tigers are trapped
    else if (Board.tigers.trapped.length === 4) {
        return 1;
    }
    // the game is not over
    return -1;
}

// place initial tigers position
for (i = 0; i <= 3; i++) {
    // add piece to board
    const container = document.querySelector('.container');
    const piece = document.createElement('img');
    piece.classList.add('piece');
    piece.classList.add(`piece-${Board.tigers.position[i][0] * 5 + Board.tigers.position[i][1]}`);
    console.log(`piece-${Board.tigers.position[i][0] * 5 + Board.tigers.position[i][1]}`);
    piece.setAttribute('src', 'tiger.png');
    piece.setAttribute('draggable', 'true');
    piece.style.top = `${canvasSquareDimension.height * Board.tigers.position[i][0] - pieceTigerDimension.height}px`
    piece.style.left = `${canvasSquareDimension.width * Board.tigers.position[i][1] - pieceTigerDimension.width / 2}px`

    piece.addEventListener('dragstart', (e) => {
        console.log('drag started' + piece.className.split(' ')[1].split('-')[1]);
        if (Board.playerTurn == 'tiger') {
            const oldCoordinates = convertTo2d(parseInt(piece.className.split(' ')[1].split('-')[1]));
            Board.selectedPosition = [oldCoordinates.row, oldCoordinates.column]
            Board.nextValidMoves = validMove(Board)

            draggedPieceInfo.pieceClassName = piece.className.split(' ')[1];
        }
    })

    piece.addEventListener('dragend', (e) => {
        console.log('drag end');
    })

    container.appendChild(piece);
}

// coordinate conversion for 1d to 2d array format
const convertTo2d = (index) => {
    const row = Math.floor(index / 5);
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

        if (Board.goats.onHand > 0 && Board.board[row][column] == null && Board.playerTurn == 'goat') {
            Board.goats.onHand -= 1;
            Board.board[row][column] = 1;
            Board.playerTurn = 'tiger'
            // add piece to board
            const container = document.querySelector('.container');
            const piece = document.createElement('img');
            piece.classList.add('piece');
            piece.classList.add(`piece-${index}`);
            piece.setAttribute('src', 'goat.png');
            piece.setAttribute('draggable', 'true');
            piece.style.top = `${canvasSquareDimension.height * row - pieceGoatDimension.height}px`
            piece.style.left = `${canvasSquareDimension.width * column - pieceGoatDimension.width / 2}px`

            piece.addEventListener('dragstart', (e) => {
                if (Board.playerTurn == 'goat' && Board.goats.onHand <= 0) {
                    const oldCoordinates = convertTo2d(parseInt(piece.className.split(' ')[1].split('-')[1]));
                    Board.selectedPosition = [oldCoordinates.row, oldCoordinates.column]
                    Board.nextValidMoves = validMove(Board)
                    draggedPieceInfo.pieceClassName = piece.className.split(' ')[1]
                }
            })

            piece.addEventListener('dragend', (e) => {
                console.log('drag end');
            })

            container.appendChild(piece);
            newTrappedTigerPosition = trappedTigers(Board)
            Board.tigers.trapped = newTrappedTigerPosition
            if (gameOver(Board) === 1) {
                alert("Goat wins")
            }
        }
    })
})

// dragover, dragenter, dragleave, drop
tiles.forEach((tile, index) => {
    tile.addEventListener('dragover', (e) => {
        e.preventDefault();
        // console.log('dragged over to ' + index)
    })
    // tile.addEventListener('dragenter', () => {
    //     console.log('drag entered to ' + index)
    // })
    // tile.addEventListener('dragleave', () => {
    //     console.log('drag left from ' + index)
    // })
    tile.addEventListener('drop', () => {
        const { row, column } = convertTo2d(index);
        const oldCoordinates = convertTo2d(parseInt(draggedPieceInfo.pieceClassName.split('-')[1]));

        console.log('drop')
        console.log(Board.nextValidMoves)
        console.log(Board.nextValidMoves.includes([row, column]), "testing testing")
        const includedInValidMoves = Board.nextValidMoves.some(item => JSON.stringify(item) === JSON.stringify([row, column]))
        if (includedInValidMoves) {
            const piece = document.querySelector(`.${draggedPieceInfo.pieceClassName}`);
            piece.classList.remove(draggedPieceInfo.pieceClassName);
            piece.classList.add(`piece-${index}`)
            piece.style.top = `${canvasSquareDimension.height * row - pieceGoatDimension.height}px`;
            piece.style.left = `${canvasSquareDimension.width * column - pieceGoatDimension.width / 2}px`;

            // change board
            if (Board.playerTurn == 'goat') {
                Board.board[oldCoordinates.row][oldCoordinates.column] = null
                Board.board[row][column] = 1

                newTrappedTigerPosition = trappedTigers(Board)
                Board.tigers.trapped = newTrappedTigerPosition
                if (gameOver(Board) === 1) {
                    alert("Goat wins")
                }
                Board.playerTurn = 'tiger'
            } else if (Board.playerTurn == 'tiger') {
                Board.board[oldCoordinates.row][oldCoordinates.column] = null
                Board.board[row][column] = 0
                newArr = Board.tigers.position.filter(coordinate => {
                    return coordinate == [oldCoordinates.row, oldCoordinates.column] ? [row, column] : coordinate
                })
                Board.tigers.position = newArr
                if (gameOver(Board) === 0) {
                    alert("Tiger wins")
                }

                //kill ko logic
                if (Math.abs(oldCoordinates.row - row) > 1 || Math.abs(oldCoordinates.column - column) > 1) {
                    killedGoatRow = (oldCoordinates.row + row) / 2;
                    killedGoatColumn = (oldCoordinates.column + column) / 2;
                    Board.board[killedGoatRow][killedGoatColumn] = null;
                    Board.goats.killed += 1;

                    if (gameOver(Board) === 0) {
                        alert("Tiger wins")
                    }

                    const killedGoatIndex = convertTo1d(killedGoatRow, killedGoatColumn);
                    const killedGoatPiece = document.querySelector(`.piece-${killedGoatIndex}`);
                    killedGoatPiece.remove();
                    console.log(Board.goats.killed)
                }

                Board.playerTurn = 'goat'
            }
            console.log(Board.board)
        }
    })
})







