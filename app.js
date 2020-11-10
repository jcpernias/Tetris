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
})