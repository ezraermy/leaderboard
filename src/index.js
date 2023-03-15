import './style.css';

import { getScores, addScore } from './modules/addScore.js';

const renderScores = async () => {
  const scores = await getScores();
  const leaderboardBody = document.getElementById('leaderboard-body');
  leaderboardBody.innerHTML = '';
  scores.forEach((score, index) => {
    const row = leaderboardBody.insertRow();
    const rankCell = row.insertCell();
    const nameCell = row.insertCell();
    const scoreCell = row.insertCell();
    rankCell.innerText = index + 1;
    nameCell.innerText = score.user;
    scoreCell.innerText = score.score;
  });
};

renderScores();

const form = document.querySelector('form');
form.addEventListener('submit', async (event) => {
  event.preventDefault();
  const nameInput = document.getElementById('name');
  const scoreInput = document.getElementById('score');
  const name = nameInput.value;
  const score = parseInt(scoreInput.value, 10);
  if (!name || !score) {
    throw new Error('The input field cannot be empty!');
  }
  await addScore(name, score);
  nameInput.value = '';
  scoreInput.value = '';
  renderScores();
});

const refreshButton = document.getElementById('refresh-button');
refreshButton.addEventListener('click', async () => {
  await renderScores();
});