const blocks = document.querySelectorAll('.block')

let currentPlayer = 'circle'
let gameOver = false

const Winnerpatterns = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
]

const board = document.querySelector('.九宮格')

function checkWinner(currentPlayer) {
    for (const pattern of Winnerpatterns) {
        const [a, b, c] = pattern
        if (
            blocks[a].classList.contains(currentPlayer) &&
            blocks[b].classList.contains(currentPlayer) &&
            blocks[c].classList.contains(currentPlayer)
        ) {
            return true
        }
    }
    return false
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




