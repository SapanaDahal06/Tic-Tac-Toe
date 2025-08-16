console.log("Welcome to the TicTacToe");

let music = new Audio("music.mp3");
let audioTurn = new Audio("ting (2).mp3");
let gameOverSound = new Audio("GameOver.wav"); 
let isgameOver = false;

let turn = "X";

// Function to change the turn 
const changeTurn = () => {
    return turn === "X" ? "0" : "X";
};

// Function to check for a win 
const checkWin = () => {
    let boxtext = document.getElementsByClassName('boxtext');
    let wins = [
        [0,1,2, 5,5,0],
        [3,4,5,5,15,0],
        [6,7,8,5,15,0],
        [0,3,6,-5,5,90],
        [1,4,7,5,15,90],
        [2,5,8,15,15,90],
        [0,4,8,5,15,45],
        [2,4,6,5,15,135],
    ];

    wins.forEach(e => {
        if (
            boxtext[e[0]].innerText !== '' &&
            boxtext[e[0]].innerText === boxtext[e[1]].innerText &&
            boxtext[e[1]].innerText === boxtext[e[2]].innerText
        ) {
            document.querySelector('.Info').innerText = boxtext[e[0]].innerText + " WON";
            isgameOver = true;
            gameOverSound.play();
            document.querySelector('.imgbox').getElementsByTagName('img')[0].style.width = "200px"
             //document.querySelector(".line").style.width = ('20vw');
              //document.querySelector(".line").style.transform = `translate(${e[3]}vw, ${e[4]}vw) rotate(${e[5]}deg)`;

        }
    });
};

// Game Logic 
//music.play();
let boxes = document.getElementsByClassName("box");
Array.from(boxes).forEach(element => {
    let boxtext = element.querySelector('.boxtext');
    
    element.addEventListener('click', () => {
        if (boxtext.innerText === '' && !isgameOver) {
            boxtext.innerText = turn;
            audioTurn.play();
            checkWin();
            if (!isgameOver) {
                turn = changeTurn();
                document.getElementsByClassName("gameInfo")[0].innerText = "Turn for " + turn;
            }
        }
    });
});
 // add Onclick listner to reset button 
 document.getElementById("reset").addEventListener('click', () => {
    // reset logic here
});

    let boxtexts = document.querySelectorAll('.boxtext');
    Array.from(boxtexts).forEach(element=>{
        element.innerText = ""
    });
    turn = "X";
    isgameOver = false;
    document.querySelector(".line").style.width = ('0vw');

     document.getElementsByClassName("gameInfo")[0].innerText = "Turn for " + turn;
      document.querySelector('.imgbox').getElementsByTagName('img')[0].style.width = "200px"
      
 