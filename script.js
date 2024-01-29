const canvas = document.querySelector('main');

drawCanvas(16);

const resetButton = document.querySelector('button');
resetButton.addEventListener('click', () => {
    const inp = prompt("Enter size of canvas (< 100 squares)");
    drawCanvas(inp);
});

function drawCanvas(boardSize = 16) {
    if (boardSize > 100 || boardSize < 0) {
        alert('Invalid input!');
    }
    
    let lastChild = canvas.lastElementChild;
    while (lastChild) {
        canvas.removeChild(lastChild);
        lastChild = canvas.lastElementChild;
    }

    for (let i = 0; i < boardSize; i++) {
        let pixelRow = document.createElement('div');
        pixelRow.classList.add('pixel-line');
        for (let j = 0; j < boardSize; j++) {
            let pixel = document.createElement('div');
            pixel.classList.add('pixel');
            pixel.addEventListener('mouseenter', (e) => {
                if (!e.shiftKey) {
                    pixel.style.backgroundColor = incrementAlpha(pixel.style.backgroundColor);
                }
                console.log(incrementAlpha(pixel.style.backgroundColor));
            });
            pixelRow.appendChild(pixel);
        }
        canvas.appendChild(pixelRow);
    }
}

function randomizeColor() {
    const red = Math.floor(Math.random()*255);
    const green = Math.floor(Math.random()*255);
    const blue = Math.floor(Math.random()*255);
    return `rgba(${red},${green},${blue})`;
}

function incrementAlpha(rgba) {
    if (typeof(rgba) !== 'string') {
        return 'rgba(0,0,0,0.1)';
    }
    const lowerBound = rgba.lastIndexOf(',');
    const upperBound = rgba.lastIndexOf(')');
    const alpha = +rgba.slice(lowerBound+1, upperBound);
    const newAlpha = alpha + 0.1;
    return randomizeColor(rgba).replace(")" , `, ${newAlpha})`);
}