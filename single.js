const player = "O";
const computer = "X";
let clickSound = new Audio();
clickSound.src = "sound/penclick.mp3";	



let sound = new Audio();
sound.src= "sound/music.mp3";

let board_full = false;
let play_board = ["", "", "", "", "", "", "", "", ""];

const board_container = document.querySelector(".box");

const winner_statement = document.getElementById("winner");

check_board_complete = () => {
  let flag = true;
  play_board.forEach(element => {
    if (element != player && element != computer) {
      flag = false;
    }
  });
  board_full = flag;
};

const check_line = (a, b, c) => {
  return (
    play_board[a] == play_board[b] &&
    play_board[b] == play_board[c] &&
    (play_board[a] == player || play_board[a] == computer)
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
  if (res == player) {
    winner.innerText = "Winner is player!!";
    winner.classList.add("playerWin");
    window.alert('Player Win');
    sound.play();
    board_full = true
  } else if (res == computer) {
    winner.innerText = "Winner is computer";
    winner.classList.add("computerWin");
    window.alert('Computer Win');
    board_full = true
  } else if (board_full) {
    winner.innerText = "Draw!";
    winner.classList.add("draw");
    window.alert('Draw');
  }
};


const render_board = () => {
  board_container.innerHTML = ""
  play_board.forEach((e, i) => {
    board_container.innerHTML += `<div id="b${i}" class="entry" onclick="addPlayerMove(${i})">${play_board[i]}</div>`
    // board_container.innerHTML += `<div class="entry" id="b${i}" onclick="addPlayerMove(${i})>${play_board[i]}</div>`
    if (e == player || e == computer) {
      document.querySelector(`#b${i}`).classList.add("occupied");
      clickSound.play();
    }
  });
};

const game_loop = () => {
  render_board();
  check_board_complete();
  check_for_winner();
}

const addPlayerMove = e => {
  if (!board_full && play_board[e] == "") {
    play_board[e] = player;
    game_loop();
    addComputerMove();
  }
};

const addComputerMove = () => {
  if (!board_full) {
    do {
      selected = Math.floor(Math.random() * 9);
    } while (play_board[selected] != "");
    play_board[selected] = computer;
    game_loop();
  }
};

const reset_board = () => {
  play_board = ["", "", "", "", "", "", "", "", ""];
  clickSound.play();
  board_full = false;
  winner.classList.remove("playerWin");
  winner.classList.remove("computerWin");
  winner.classList.remove("draw");
  winner.innerText = "";
  render_board();
};

//initial render
render_board();
function myfunc_2(){
  clickSound.play();
    location.reload();
    b1= document.getElementById("b1").value='';
    b2= document.getElementById("b2").value='';
    b3= document.getElementById("b3").value='';
    b4= document.getElementById("b4").value='';
    b5= document.getElementById("b5").value='';
    b6= document.getElementById("b6").value='';
    b7= document.getElementById("b7").value='';
    b8= document.getElementById("b8").value='';
    b9= document.getElementById("b9").value='';
}