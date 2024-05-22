const tiles = document.querySelectorAll(".tile");
// const scorecard = document.querySelector(".score");

let gameover = false;
let playerOneTurn = true;

let grid = [
    [-1, -1, -1],
    [-1, -1, -1],
    [-1, -1, -1]
];

// Modified grid based on player
function handleClick(e) {
    const cell = e.target;
    const idx = Array.from(tiles).indexOf(cell);
    const row = Math.floor(idx / 3);
    const col = idx % 3;
    console.log(row, col);

    if (playerOneTurn) {
        cell.innerHTML = "X";
        playerOneTurn = false;
        grid[row][col] = 1;
    }
    else {
        cell.innerHTML = "O";
        playerOneTurn = true;
        grid[row][col] = 0;
    }
    // cell.style.backgroundColor = "blueviolet";

    areYouWinningSon();
}

// Adds event listens to empty tiles
tiles.forEach(tile => {
    tile.addEventListener("click", handleClick, { once: true });
})

// Logic for gameover
function areYouWinningSon() {
    const result = scoreMate();

    if (result != -1) {
        if (result == 1) {
            alert("Player One Wins!");
        }
        if (result == 0) {
            alert("Player Two Wins!");
        }
        if (result == 2) {
            alert("It's a draw!");
        }
        gameover = true;
        tiles.forEach(tile => {
            tile.removeEventListener("click", handleClick);
        })
    }
}

function scoreMate() {
    if (linecheck(1))
        return 1; // Player 1 wins
    if (linecheck(0))
        return 0; // Player 0 wins

    for (let i = 0; i < 3; i++)
        for (let j = 0; j < 3; j++)
            if (grid[i][j] == -1)
                return -1; // Game ongoing

    return 2; // Draw
}

// Flag every line for each player
function linecheck(x) {
    let diagLR = true, diagRL = true;

    for (let i = 0; i < 3; i++) {
        let hori = true, verti = true;

        for (let j = 0; j < 3; j++) {
            if (grid[i][j] != x)
                hori = false;
            if (grid[j][i] != x)
                verti = false;
        }
        if (hori || verti)
            return true;

        if (grid[i][i] != x)
            diagLR = false;
        if (grid[i][2 - i] != x)
            diagRL = false;
    }
    if (diagLR || diagRL)
        return true;
    return false;
}
