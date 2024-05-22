const tiles = document.querySelectorAll(".tile");
const scorecard = document.querySelector(".score");
const restartButton = document.querySelector(".restart-button");

let gameover = false;
let playerOneTurn = true;

let grid = [
    [-1, -1, -1],
    [-1, -1, -1],
    [-1, -1, -1]
];

let scores = {
    player1: 0,
    player2: 0
};

function handleClick(e) {
    if (gameover) return;

    const cell = e.target;
    const idx = Array.from(tiles).indexOf(cell);
    const row = Math.floor(idx / 3);
    const col = idx % 3;

    if (grid[row][col] !== -1) return;

    if (playerOneTurn) {
        cell.innerHTML = "X";
        grid[row][col] = 1;
    } else {
        cell.innerHTML = "O";
        grid[row][col] = 0;
    }

    cell.style.backgroundColor = "blueviolet";
    playerOneTurn = !playerOneTurn;

    areYouWinningSon();
}

function areYouWinningSon() {
    const result = update();

    if (result !== -1) {
        gameover = true;
        if (result === 1) {
            scores.player1++;
            alert("Player One Wins!");
        } else if (result === 0) {
            scores.player2++;
            alert("Player Two Wins!");
        } else if (result === 2) {
            alert("It's a draw!");
        }
        updateScore();
    }
}

function update() {
    if (linecheck(1)) return 1;
    if (linecheck(0)) return 0;

    for (let i = 0; i < 3; i++) {
        for (let j = 0; j < 3; j++) {
            if (grid[i][j] === -1) return -1;
        }
    }

    return 2; // Draw
}

function linecheck(x) {
    let diag1 = true, diag2 = true;

    for (let i = 0; i < 3; i++) {
        let hori = true, verti = true;

        for (let j = 0; j < 3; j++) {
            if (grid[i][j] !== x) hori = false;
            if (grid[j][i] !== x) verti = false;
        }

        if (hori || verti) return true;

        if (grid[i][i] !== x) diag1 = false;
        if (grid[i][2 - i] !== x) diag2 = false;
    }

    return diag1 || diag2;
}

function updateScore() {
    scorecard.textContent = `Player 1: ${scores.player1} | Player 2: ${scores.player2}`;
}

function restartGame() {
    grid = [
        [-1, -1, -1],
        [-1, -1, -1],
        [-1, -1, -1]
    ];
    gameover = false;
    playerOneTurn = true;

    tiles.forEach(tile => {
        tile.innerHTML = "";
        tile.style.backgroundColor = "white";
        tile.removeEventListener("click", handleClick);
        tile.addEventListener("click", handleClick, { once: true });
    });
}

if (!gameover) {
    tiles.forEach(tile => {
        tile.addEventListener("click", handleClick, { once: true });
    });
}

restartButton.addEventListener("click", restartGame);
