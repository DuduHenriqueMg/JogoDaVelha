

document.addEventListener('DOMContentLoaded', () => {

    let squares = document.querySelectorAll(".square");

    squares.forEach((square) => {
        square.addEventListener('click', handleClick);
    })
})

function handleClick(event) {

    let square = event.target;
    let position = square.id;
    
    if(handleMove(event.target.id)) {
        setTimeout(() => {
            alert("O jogo acabou! E o vencedor foi o jogador " + playerTime)
        },10); 
    };

    updateSquare(position) 
} 

<<<<<<< Updated upstream
=======

function updateSquares() {
>>>>>>> Stashed changes

function updateSquare(position) {

    let square = document.getElementById(position.toString());
    let symbol = board[position];
    square.innerHTML=`<div class='${symbol}'></div>`;

}

function restart() {
<<<<<<< Updated upstream
    
    let squares = document.getElementsByClassName("square");
    let board = ['', '', '', '', '', '', '', '', '',];
    let playerTime = 0;
    let gameOver = false;
    
    for(let i = 0; i < squares.length; i++){
        
        squares[i].innerHTML ='';
        square.innerHTML=`<div class='${symbol}'></div>`;
     }
   
    console.log("funcionando");
    
=======
    let playerTime = 0;
    let gameOver =false;
    updateSquares();
    console.log("funcionando");
>>>>>>> Stashed changes
}

