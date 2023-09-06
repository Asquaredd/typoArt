const canvas = document.getElementById('artCanvas');
const ctx = canvas.getContext('2d');
const toggleModeButton = document.getElementById('toggleMode');
const downloadButton = document.getElementById('download');

// Event listener for key presses
document.addEventListener('keydown', drawRandomShape);

// Event listener for mode toggle
toggleModeButton.addEventListener('click', toggleMode);

// Event listener for downloading the art
downloadButton.addEventListener('click', downloadArt);

function drawRandomShape() {
    const shapes = ['rect', 'arc', 'triangle'];
    const shape = shapes[Math.floor(Math.random() * shapes.length)];
    const color = getRandomColor();
    const x = Math.random() * canvas.width;
    const y = Math.random() * canvas.height;
    const size = Math.random() * 100 + 10;

    ctx.fillStyle = color;

    switch (shape) {
        case 'rect':
            ctx.fillRect(x, y, size, size);
            break;
        case 'arc':
            ctx.beginPath();
            ctx.arc(x, y, size / 2, 0, Math.PI * 2);
            ctx.fill();
            break;
        case 'triangle':
            ctx.beginPath();
            ctx.moveTo(x, y);
            ctx.lineTo(x + size, y);
            ctx.lineTo(x + size / 2, y - size);
            ctx.closePath();
            ctx.fill();
            break;
    }
}

function getRandomColor() {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

function toggleMode() {
    document.body.classList.toggle('dark-mode');
    document.body.classList.toggle('light-mode');
    document.canvas.classList.toggle('dark-mode');
    document.canvas.classList.toggle('light-mode');
}

function downloadArt() {
    const link = document.createElement('a');
    link.href = canvas.toDataURL();
    link.download = 'keyboard-art.png';
    link.click();
}
