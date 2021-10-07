const X = "X";
const O = "O";

let board_full = false;
let play_board = Array(9).fill('');  // Initialize play board with empty strings
let player = X

const board_container = document.querySelector(".play-area");

const winner_statement = document.getElementById("winner");

check_board_complete = () => {
  let flag = true;
  play_board.forEach(element => {
    if (element != X && element != O) {
      flag = false;
    }
  });
  board_full = flag;
};

const check_line = (a, b, c) => {
  return (
    play_board[a] == play_board[b] &&
    play_board[b] == play_board[c] &&
    (play_board[a] == X || play_board[a] == O)
  );
};

const check_match = () => {
  for (i = 0; i < 9; i += 3) {
    if (check_line(i, i + 1, i + 2)) {
      return play_board[i];
    }
  }
  for (i = 0; i < 3; i++) {
    if (check_line(i, i + 3, i + 6)) {
      return play_board[i];
    }
  }
  if (check_line(0, 4, 8)) {
    return play_board[0];
  }
  if (check_line(2, 4, 6)) {
    return play_board[2];
  }
  return "";
};

const check_for_winner = () => {
  let res = check_match()
  if (res == X) {
    winner.innerText = "Winner is X!";
    winner.classList.add("playerWin");
    board_full = true
  } else if (res == O) {
    winner.innerText = "Winner is O";
    winner.classList.add("computerWin");
    board_full = true
  } else if (board_full) {
    winner.innerText = "Draw!";
    winner.classList.add("draw");
  }
};

// Build the game board
const render_board = () => {
  while (board_container.firstChild) { board_container.removeChild(board_container.firstChild); } // Remove children

  play_board.forEach((e, i) => {
    let newDiv = board_container.appendChild(document.createElement('div'));
    newDiv.classList.add("block");
    //newDiv.onclick = addPlayerMove;
    newDiv.ontouchend = addPlayerMove;
    newDiv.innerText = play_board[i];
    newDiv.dataset.index = i;

    if (e == X || e == O) { newDiv.classList.add("occupied"); }
  });

  // Get rid of outside border
  play_board.forEach((_, i) => {
    let children = board_container.children; 

    if ([0, 1, 2].includes(i)) { children[i].classList.add("top-row"); }
    if ([0, 3, 6].includes(i)) { children[i].classList.add("left-column"); }
    if ([2, 5, 8].includes(i)) { children[i].classList.add("right-column"); }
    if ([6, 7, 8].includes(i)) { children[i].classList.add("bottom-row"); }
  });
};

const game_loop = () => {
  render_board();
  check_board_complete();
  check_for_winner();
}

const addPlayerMove = e => {
  let index = e.target.dataset.index;

  if (!board_full && play_board[index] == "") {
    play_board[index] = player;
    game_loop();
    player = player == X ? O : X;   // Switch players
    //addComputerMove();
  }
};

// Optional, to play with computer
const addComputerMove = () => {
  if (!board_full) {
    do {
      selected = Math.floor(Math.random() * 9);
    } while (play_board[selected] != "");
    play_board[selected] = O;
    game_loop();
  }
};

const reset_board = () => {
  play_board = Array(9).fill('');  // Initialize play board with empty strings
  board_full = false;
  winner.classList.remove("playerWin");
  winner.classList.remove("computerWin");
  winner.classList.remove("draw");
  winner.innerText = "";
  player = X;
  render_board();
};


// Set up event handlers
//document.getElementById("reset").onclick = reset_board;
document.getElementById("reset").ontouchend = reset_board;

//initial render
render_board();