

document.addEventListener('DOMContentLoaded', () => {

    let squares = document.querySelectorAll(".square");

    squares.forEach((square) => {
        square.addEventListener('click', handleClick);
    })
})

function handleClick(event) {
    
    if(handleMove(event.target.id)) {
        setTimeout(() => {
            alert("O jogo acabou! E o vencedor foi o jogador " + playerTime)
        },10); 
    };

    updateSquares();
} 

// function updateSquare(position) {
//     let square = document.getElementById(position.toString);
//     let symbol = board[position];
//     square.innerHTML=`<div class='${symbol}'></div>`;
// }

function updateSquares() {

    let squares = document.querySelectorAll(".square");

    squares.forEach((square) => {
        let position = square.id;
        let symbol = board[position];

        if (symbol != '') {
            square.innerHTML=`<div class='${symbol}'></div>`;
        }
    })
}

restart.addEventListener("click", function(){

    for (let i = 0; i < squares.length; i++) {
        if (gameOver == true) {
            
            
        }
        
    }
})

