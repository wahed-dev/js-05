let cursor = document.querySelector('.cursor');
let cursorPnt = document.querySelector('.cursorPnt')
function cursorMove(event) {
    let left = event.pageX;
    let top = event.pageY;
cursor.style.top = `${top}px`;
cursor.style.left = `${left}px`;
cursorPnt.style.top = `${top}px`;
cursorPnt.style.left = `${left}px`;
}
window.addEventListener('mousemove',cursorMove)