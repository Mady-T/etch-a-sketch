let boardSize = 16;
const canvas = document.querySelector('main');

for (let i = 0; i < boardSize; i++) {
    let pixelRow = document.createElement('div');
    pixelRow.classList.add('pixel-line');
    for (let j = 0; j < boardSize; j++) {
        let pixel = document.createElement('div');
        pixel.classList.add('pixel');
        pixelRow.appendChild(pixel);
    }
    canvas.appendChild(pixelRow);
}