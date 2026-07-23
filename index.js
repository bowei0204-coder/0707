const blocks = document.querySelectorAll('.block')

let currentPlayer = 'circle'
let gameOver = false

const Winnerpatterns = [
    [0, 1, 2, 3],
    [4, 5, 6, 7],
    [8, 9, 10, 11],
    [12, 13, 14, 15],
    [0, 4, 8, 12],
    [1, 5, 9, 13],
    [2, 6, 10, 14],
    [3, 7, 11, 15],
    [0, 5, 10, 15],
    [3, 6, 9, 12]
]

const board = document.querySelector('.九宮格')

function checkWinner(currentPlayer) {
    for (const pattern of Winnerpatterns) {
        const [a, b, c, d] = pattern
        if (
            blocks[a].classList.contains(currentPlayer) &&
            blocks[b].classList.contains(currentPlayer) &&
            blocks[c].classList.contains(currentPlayer) &&
            blocks[d].classList.contains(currentPlayer)
        ) {
            return true
        }
    }
    return false
}

function checkDraw() {
    for (const block of blocks) {
        if (
            !block.classList.contains('circle') &&
            !block.classList.contains('cross')
        ) {
            return false
        }
    }

    return true
}
    

blocks.forEach(block => {
    block.addEventListener('click', () => {
        if (gameOver) {
            return
        }

        if (
            block.classList.contains('circle') ||
            block.classList.contains('cross')
        ) {
            return
        }

        block.classList.add(currentPlayer)

        if (checkWinner(currentPlayer)) {
            alert(currentPlayer + ' wins!')
            gameOver = true
            board.classList.add('game-over')
            return
        } 

        if (checkDraw()) {
        alert('Draw!')
        gameOver = true
        board.classList.add('game-over')
        return
        }
        
        if (currentPlayer === 'circle') {
            currentPlayer = 'cross'
        } else {
            currentPlayer = 'circle'
        }

    })
})

// const restartButton = document.getElementById('restart')
const restartButton = document.querySelector('#restart')
restartButton.addEventListener('click', () => {
    blocks.forEach(block => {
        block.classList.remove('circle')
        block.classList.remove('cross')
    })
    currentPlayer = 'circle'
    gameOver = false
    board.classList.remove('game-over')
})




