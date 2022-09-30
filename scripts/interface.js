

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
            if(playerTime === 0){
                alert("O jogo acabou! E o vencedor foi o jogador O")
            }else{
                alert("O jogo acabou! E o vencedor foi o jogador X")
            }
        },10); 
    };

    updateSquare(position);

    setTimeout(() => {
        update();
    },10);
} 

function updateSquare(position) {

    let square = document.getElementById(position.toString());
    let symbol = board[position];
    square.innerHTML=`<div class='${symbol}'></div>`;

}

function restart(){
  
    board = ['', '', '', '', '', '', '', '', ''];
    gameOver = false;
    playerTime = 0;
    
    cleanBoard();
  
  } 
   
function cleanBoard(){
  
    let squares = document.querySelectorAll(".square")
  
    squares.forEach((square) => {
        square.innerHTML = '';
    })
  
  }

function update() {
   if(gameOver == true) {
       return restart();
   } 
}


    

