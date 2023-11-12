const generaMainBoard = function () {
  const board = document.querySelector(".main-board");
  for (let i = 0; i < 76; i++) {
    board.innerHTML += `<div class = 'cell'>${i + 1}</div>`;
  }
};

const riempiArray = function () {
    const arr = []
    for (let i = 0; i < 76; i++) {
      arr.push(i + 1)
    }
    return arr
  }
  const RandomNum = function (range) {
    const randIndex = Math.floor(Math.random() * range.length)
    const random = range.splice(randIndex, 1)[0]
    return random
  }
  
  const generaRandomNum = function (range) {
    const random = RandomNum(range)
    const randNumDiv = document.getElementById('randomNum')
    randNumDiv.innerText = 'Numero: ' + random
    const cells = document.querySelectorAll('.main-board .cell')
    cells[random - 1].classList.add('highlight')
  
    const userCells = document.querySelectorAll('.user-board .cell')
    userCells.forEach((cell) => {
      if (parseInt(cell.innerText) === random) {
        cell.classList.add('highlight')
      }
    })
  }

  const generaUserBoards = function () {
    const usersNumber = document.getElementById('usersNumber').value
    const container = document.querySelector('.container')
    if (parseInt(usersNumber) > 0) {
      for (let i = 0; i < parseInt(usersNumber); i++) {
        const range = riempiArray()
        const board = document.createElement('div')
        board.className = 'board user-board'
        for (let i = 0; i < 24; i++) {
          const random = generaRandomNum(range)
          board.innerHTML += `<div class='cell'>${random}</div>`
        }
        container.appendChild(board)
      }
    }
  }
  
  window.onload = function () {
    generaMainBoard()
    const randBtn = document.getElementById('randomButton')
    const range = riempiArray()
    randBtn.addEventListener('click', function () {
      generaRandomNum(range)
    })
    const userBoardBtn = document.getElementById('userBoardButton')
    userBoardBtn.onclick = generaUserBoards
  }