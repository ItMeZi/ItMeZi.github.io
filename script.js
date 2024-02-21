function updateScore(team, score) {
    document.getElementById(team + 'Score').textContent = score;
    localStorage.setItem(team + 'Score', score);
  }
  

  function incrementScore(team) {
    var currentScore = parseInt(localStorage.getItem(team + 'Score')) || 0;
    var newScore = currentScore + 1;
    updateScore(team, newScore);
  }
  

  function decrementScore(team) {
    var currentScore = parseInt(localStorage.getItem(team + 'Score')) || 0;
    var newScore = Math.max(currentScore - 1, 0);
    updateScore(team, newScore);
  }
  
  
  function resetScores() {
    localStorage.removeItem('teamAScore');
    localStorage.removeItem('teamBScore');
    document.getElementById('teamAScore').textContent = '0';
    document.getElementById('teamBScore').textContent = '0';
  }


  function initScores() {
    var teamAScore = localStorage.getItem('teamAScore') || '0';
    var teamBScore = localStorage.getItem('teamBScore') || '0';
    document.getElementById('teamAScore').textContent = teamAScore;
    document.getElementById('teamBScore').textContent = teamBScore;
  }
  

  document.addEventListener('DOMContentLoaded', function() {
    initScores();
  });