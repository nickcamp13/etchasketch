let boardSize = 16;

const grid = document.querySelector(".container");
const btn = document.querySelector("#btn");

btn.addEventListener("click", (e) => {
    do {
        boardSize = window.prompt(
            "Enter a SINGLE number less than or equal to 100 that sets the width and height of the board."
        );
    } while (boardSize < 16 || boardSize > 100);

    buildBoard(boardSize);
});

function buildBoard(size) {
    deleteBoard();
    for (let i = 0; i < size * size; i++) {
        const square = document.createElement("div");
        square.className = "square";
        square.style.flex = `0 0 calc(100% / ${size})`;
        square.addEventListener("mouseover", (e) => {
            e.target.style.background = "black";
        });
        grid.appendChild(square);
    }
}

function deleteBoard() {
    while (grid.firstChild) {
        grid.lastChild.remove();
    }
}

buildBoard(boardSize);
