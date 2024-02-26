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
    localStorage.removeItem('teamIScore');
    localStorage.removeItem('teamJScore');
    document.getElementById('teamIScore').textContent = '0';
    document.getElementById('teamJScore').textContent = '0';
  }


  function initScores() {
    var teamIScore = localStorage.getItem('teamIScore') || '0';
    var teamJScore = localStorage.getItem('teamJScore') || '0';
    document.getElementById('teamIScore').textContent = teamIScore;
    document.getElementById('teamJScore').textContent = teamJScore;
  }
  

  document.addEventListener('DOMContentLoaded', function() {
    initScores();
  });