// Who goes first?
// X does if random puts out a 1
let turn;
let win = false;
if (Math.round(Math.random())) {
  turn = 'X';
} else {
  turn = 'O';
}

function markSquare(square) {
  if (square.innerText != 'O' && square.innerText != 'X') {
    square.innerText = turn;
    square.style.background = turn == 'X' ? 'pink' : 'lightgreen';
    turn = turn == 'X' ? 'O' : 'X';
  }
  checkBoard();
}

function checkBoard() {
  if (win) {
    return window.location.reload();
  }
  const board = document.querySelectorAll('td');
  for (let i = 0; i < 9; i++) {
    // Horizontal Rows
    if ([0, 3, 6].indexOf(i) != -1) {
      if (board[i].innerText == 'X' || board[i].innerText == 'O') {
        if (
          board[i].innerText == board[i + 1].innerText &&
          board[i].innerText == board[i + 2].innerText
        ) {
          const winMessage = document.createElement('h4');
          winMessage.appendChild(
            document.createTextNode(`${board[i].innerText} wins!`)
          );
          winMessage.style.margin = '0';
          document.querySelector('body').appendChild(winMessage);
          win = true;
        }
      }
    }
    // Vertical Columns
    if ([0, 1, 2].indexOf(i) != -1) {
      if (board[i].innerText == 'X' || board[i].innerText == 'O') {
        if (
          board[i].innerText == board[i + 3].innerText &&
          board[i].innerText == board[i + 6].innerText
        ) {
          const winMessage = document.createElement('h4');
          winMessage.appendChild(
            document.createTextNode(`${board[i].innerText} wins!`)
          );
          winMessage.style.margin = '0';
          document.querySelector('body').appendChild(winMessage);
          win = true;
        }
      }
    }
    // Diagonals
    if (i == 0) {
      if (board[i].innerText == 'X' || board[i].innerText == 'O') {
        if (
          board[i].innerText == board[i + 4].innerText &&
          board[i].innerText == board[i + 8].innerText
        ) {
          const winMessage = document.createElement('h4');
          winMessage.appendChild(
            document.createTextNode(`${board[i].innerText} wins!`)
          );
          winMessage.style.margin = '0';
          document.querySelector('body').appendChild(winMessage);
          win = true;
        }
      }
    } else if (i == 2) {
      if (board[i].innerText == 'X' || board[i].innerText == 'O') {
        if (
          board[i].innerText == board[i + 2].innerText &&
          board[i].innerText == board[i + 4].innerText
        ) {
          const winMessage = document.createElement('h4');
          winMessage.appendChild(
            document.createTextNode(`${board[i].innerText} wins!`)
          );
          winMessage.style.margin = '0';
          document.querySelector('body').appendChild(winMessage);
          win = true;
        }
      }
    }
  }
}
