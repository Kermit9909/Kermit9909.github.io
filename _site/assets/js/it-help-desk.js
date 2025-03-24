// JavaScript source code
document.querySelectorAll('.tile').forEach(tile => {
    tile.addEventListener('click', (e) => {
        e.preventDefault();
        alert(`You clicked ${tile.textContent}!`);
    });
});