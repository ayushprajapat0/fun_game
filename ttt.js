const boxes = document.querySelectorAll(".innerbox");
const statusText = document.querySelector("h3");

let currentPlayer = "X";
let gameActive = true;
let board = ["", "", "", "", "", "", "", "", ""];

const winningCombos = [
    [0, 1, 2], [3, 4, 5], [6, 7, 8], // Rows
    [0, 3, 6], [1, 4, 7], [2, 5, 8], // Columns
    [0, 4, 8], [2, 4, 6]             // Diagonals
];

function handleMove(index) {
    if (board[index] === "" && gameActive) {
        board[index] = currentPlayer;
        boxes[index].textContent = currentPlayer;
        checkWinner();
        currentPlayer = currentPlayer === "X" ? "O" : "X";
        if (gameActive) statusText.textContent = `Chance of "${currentPlayer}"`;
    }
}

function checkWinner() {
    for (const combo of winningCombos) {
        const [a, b, c] = combo;
        if (board[a] && board[a] === board[b] && board[a] === board[c]) {
            statusText.style.color="green";
            statusText.textContent = `Player "${board[a]}" Wins!`;
            gameActive = false;
            return;
        }
    }
    
    if (!board.includes("")) {
        statusText.style.color="skyblue";
        statusText.textContent = "It's a Draw!";
        gameActive = false;
    }
}

// Add event listeners to boxes
boxes.forEach((box, index) => {
    box.addEventListener("click", () => handleMove(index));
});

// Reset function
function resetGame() {
    board.fill("");
    gameActive = true;
    currentPlayer = "X";
    statusText.textContent = `Chance of "X"`;
    boxes.forEach(box => box.textContent = "");
}

// Add a button for reset (optional)
const resetButton = document.createElement("button");
resetButton.textContent = "Restart Game";
resetButton.classList.add('rstbtn');
resetButton.addEventListener("click", resetGame);
document.querySelector(".main").appendChild(resetButton);
