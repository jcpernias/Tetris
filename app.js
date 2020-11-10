document.addEventListener('DOMContentLoaded', () => {
    // Grid dimensions
    const width = 10;
    const height = 20;
    const numSquares = width * height;

    // Build grid
    const gridDiv = document.querySelector('.grid');
    for (let i = 0; i < numSquares; i++) {
        const element = document.createElement('div');
        gridDiv.appendChild(element)
    }
    document.body.appendChild(gridDiv);

    // Access to html elements
    let squares = Array.from(gridDiv.querySelectorAll('div'));
    let score = document.querySelector('#score');
    let startButton = document.querySelector('#start-button');

    // Tetromino shapes
    const iTetromino = [
        [width, width + 1, width + 2, width + 3],
        [2, width + 2, 2 * width + 2, 3 * width + 2],
        [2 * width, 2 * width + 1, 2 * width + 2, 2 * width + 3],
        [1, width + 1, 2 * width + 1, 3 * width + 1]
    ];

    const oTetromino = [
        [0 , 1, width, width + 1],
        [0 , 1, width, width + 1],
        [0 , 1, width, width + 1],
        [0 , 1, width, width + 1],
    ];

    const jTetromino = [
        [0, width, width + 1, width + 2],
        [1, 2, width + 1, 2 * width + 1],
        [width, width + 1, width + 2, 2 * width + 2],
        [1, width + 1, 2 * width, 2 * width + 1]
    ];

    const lTetromino = [
        [2, width, width + 1, width + 2],
        [1, width + 1, 2 * width + 1, 2 * width + 2],
        [width, width + 1, width + 2, 2 * width],
        [0, 1, width + 1, 2 * width + 1]
    ];

    const sTetromino = [
        [width + 1, width + 2, 2 * width, 2 * width + 1],
        [1, width + 1, width + 2, 2 * width + 2],
        [width + 1, width + 2, 2 * width, 2 * width + 1],
        [0, width, width + 1, 2 * width + 1]
    ];

    const zTetromino = [
        [0, 1, width + 1, width + 2],
        [2, width + 1, width + 2, 2 * width + 1],
        [width, width + 1, 2 * width + 1, 2 * width + 2],
        [1, width, width + 1, 2 * width]
    ];

    const tTetromino = [
        [1, width, width + 1, width + 2],
        [1, width + 1, width + 2, 2 * width + 1],
        [width, width + 1, width + 2, 2 * width + 1],
        [1, width, width + 1, 2 * width + 1]
    ];


    const theTetrominoes = [iTetromino, oTetromino, jTetromino, lTetromino, sTetromino, zTetromino, tTetromino];

    let currentPosition = 4;
    let random = Math.floor(Math.random() * theTetrominoes.length);
    let currentShape = random;
    let currentRotation = 0;
    let current = theTetrominoes[currentShape][currentRotation];

    function draw() {
       current.forEach(index => {
           squares[currentPosition + index].classList.add('tetromino')
       }) 
    }

    function erase() {
        current.forEach(index => {
            squares[currentPosition + index].classList.remove('tetromino')
        }) 
     }
 
    draw();
})