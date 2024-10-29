// ======== NAVBAR ANIMATIONS ========
const toggleClick = document.querySelector('.toggle-box');
const verticalContainer = document.querySelector('.vertical-container');

toggleClick.addEventListener('click', (e) => {
    e.preventDefault(); 
    toggleClick.classList.toggle('active');
    verticalContainer.classList.toggle('active');
});

let isDragging = false;
let startX, startY, offsetX = 0, offsetY = 0;

verticalContainer.addEventListener('mousedown', (e) => {
    isDragging = true;
    startX = e.clientX - offsetX;
    startY = e.clientY - offsetY;
    verticalContainer.style.transition = "none"; 
});

document.addEventListener('mousemove', (e) => {
    if (isDragging) {
    offsetX = e.clientX - startX;
    offsetY = e.clientY - startY;

    verticalContainer.style.left = `${offsetX}px`;
    verticalContainer.style.top = `${offsetY}px`;
    }
});

document.addEventListener('mouseup', () => {
    isDragging = false;
    verticalContainer.style.transition = "0.4s ease"; 
});
// ======== END OF NAVBAR ANIMATIONS ========
