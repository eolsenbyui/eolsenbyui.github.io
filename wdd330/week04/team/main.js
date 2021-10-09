const board = document.querySelector(".board");

let isX = true;

function placement(event) {
    event.target.innerHtml = isX ? "X" : "O";
}

board.addEventListener('touchend', placement, false);
board.addEventListener('click', placement, false);
