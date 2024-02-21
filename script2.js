// Function to update the score of a team
function updateScore(team, score) {
  document.getElementById(team + 'Score').textContent = score;
  // Store the score in localStorage
  localStorage.setItem(team + 'Score', score);
}

// Function to increment the score of a team
function incrementScore(team) {
  var currentScore = parseInt(localStorage.getItem(team + 'Score')) || 0;
  var newScore = currentScore + 1;
  updateScore(team, newScore);
}

// Function to decrement the score of a team
function decrementScore(team) {
  var currentScore = parseInt(localStorage.getItem(team + 'Score')) || 0;
  var newScore = Math.max(currentScore - 1, 0);
  updateScore(team, newScore);
}

// Function to reset scores of both teams
function resetScores() {
  localStorage.removeItem('teamEScore');
  localStorage.removeItem('teamFScore');
  document.getElementById('teamEScore').textContent = '0';
  document.getElementById('teamFScore').textContent = '0';
}

// Function to initialize scores from localStorage
function initScores() {
  var teamEScore = localStorage.getItem('teamEScore') || '0';
  var teamFScore = localStorage.getItem('teamFScore') || '0';
  document.getElementById('teamEScore').textContent = teamEScore;
  document.getElementById('teamFScore').textContent = teamFScore;
}

// Call initScores() when the page loads to initialize scores
document.addEventListener('DOMContentLoaded', function() {
  initScores();
});