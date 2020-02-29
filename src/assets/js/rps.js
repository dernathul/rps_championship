const getComputerMove = () => {
    let computerMove = Math.floor(Math.random() * 3) + 1;
    switch (computerMove) {
      case 1:
        computerMoveInWords = "rock"
        break
      case 2:
        computerMoveInWords = "paper"
        break
      case 3:
        computerMoveInWords = "scissors"
        break
    }
    return computerMoveInWords
  }
  
  const getGameResults = (playerMove, computerMove) => {
    let results
    switch ([playerMove, computerMove].join('')) {
      case ['rock', 'scissors'].join(''):
        results = 'You WIN!'
        break
        default:
          results = 'You LOSE!'
          break
    }
    return results
  }
  
  const PlayGame = playerMove => {
    const displayResultElement = document.getElementById('result');
    const computerMove = getComputerMove()
    console.log(computerMove)
    const getResults = getGameResults(playerMove, computerMove)
    displayResultElement.innerHTML = `You chose ${playerMove} and the computer chose ${computerMove}. ${getResults}`
  }