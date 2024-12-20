let score;
let computerChoice;
resetScore();
function resetScore(){
  score = JSON.parse(localStorage.getItem('Score')) || { win: 0, lost: 0, tie: 0};
  score.displayScore = function() {
    return `Won: ${this.win}  Lost: ${this.lost}  Tie: ${this.tie}`;
  };
  showResult();
}

function generateComputerChoice(){
  let randomNumber = Math.floor(Math.random()*3)+1;
  if(randomNumber===1){ computerChoice = 'Bat'; return computerChoice;} 
  else if(randomNumber===2){ computerChoice = 'Ball'; return computerChoice; } 
  else { computerChoice = 'Stumps'; return computerChoice; }
}

function getResult(userMove, computerMove){
  if(userMove==='Bat'){
      if(computerMove === 'Ball')
      { score.win++; return "User Won"; } 
      else if(computerMove==='Stumps') 
      { score.lost++; return "Computer Won"; }
      else { score.tie++; return "Tie";} 
  }
  else if(userMove==='Ball'){
      if(computerMove === 'Ball')
      { score.tie++; return "Tie"; } 
      else if(computerMove==='Stumps') 
      { score.win++;  return "User Won"; }
      else { score.lost++; return "Computer Won";} 
  }
  else {
      if(computerMove === 'Ball')
      { score.lost++; return "Computer Won"; } 
      else if(computerMove==='Stumps') 
      { score.tie++; return "Tie"; }
      else { score.win++; return "User Won";} 
  }
}

function showResult(userMove, result, computerMove){
  localStorage.setItem('Score', JSON.stringify(score));
  document.querySelector('#user_move').innerText = userMove ? `You have chosen ${userMove}.`: '';
  document.querySelector('#computer_move').innerText = computerMove ? `Computer has chosen ${computerMove}.`: '';
  document.querySelector('#result').innerText = result || '';
  document.querySelector('#score').innerText = score.displayScore();
}