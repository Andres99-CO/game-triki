const game = [
    ['', '', ''],
    ['', '', ''],
    ['', '', ''],
]

let currentUser = 'O'

function checkStatus(user) {

}

function selectItem() {
    if (game[this.dataset.row][this.dataset.col] != "") {
        return;
    }
    game[this.dataset.row][this.dataset.col] = currentUser

    console.log(this)

    checkStatus(currentUser)

    setBoard();

    if (currentUser === "O") {
        currentUser = "X"
    } else {
        currentUser = "O"
    }
}

function render({ content, row, column }, container) {
    const el = document.createElement('span');
    el.textContent = content
    el.dataset.row = row
    el.dataset.col = column
    el.addEventListener('click', selectItem)
    container.append(el)
}

function setBoard() {
    container.innerHTML = ''

    game.forEach((row, indexRow) => {
        row.forEach((column, indexCol) => {
            console.log(indexRow, indexCol)
            render({
                content: column,
                row: indexRow,
                column: indexCol
            }, window.container)
        })
    })
}

setBoard()