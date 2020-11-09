document.addEventListener('DOMContentLoaded', () => {
    let gridDiv = document.querySelector('.grid');
    for (let i = 0; i < 200; i++) {
        const element = document.createElement('div');
        gridDiv.appendChild(element)
    }
    document.body.appendChild(gridDiv);
})