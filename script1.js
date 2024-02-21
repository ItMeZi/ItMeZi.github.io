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
  localStorage.removeItem('teamCScore');
  localStorage.removeItem('teamDScore');
  document.getElementById('teamCScore').textContent = '0';
  document.getElementById('teamDScore').textContent = '0';
}

// Function to initialize scores from localStorage
function initScores() {
  var teamCScore = localStorage.getItem('teamCScore') || '0';
  var teamDScore = localStorage.getItem('teamDScore') || '0';
  document.getElementById('teamCScore').textContent = teamCScore;
  document.getElementById('teamDScore').textContent = teamDScore;
}

// Call initScores() when the page loads to initialize scores
document.addEventListener('DOMContentLoaded', function() {
  initScores();
});