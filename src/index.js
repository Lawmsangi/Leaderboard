import { result } from 'lodash';
import addScores from './modules/addScores.js';
import display from './modules/display.js';
import getScores from './modules/getScores.js';
import './style.css';

const gameId = 'l96yf0Kvdp9cFkx0V70b';

const scoreBtn = document.getElementById('add-score-btn');
scoreBtn.addEventListener('click', (e) => {
  e.preventDefault();
  const name = document.getElementById('name');
  const score = document.getElementById('score');
  addScores(name.value, score.value, gameId);
  name.value = '';
  score.value = '';
});

const refreshBtn = document.getElementById('refresh-btn');
refreshBtn.addEventListener('click', async (e) => {
  e.preventDefault();
  const update = await getScores(gameId);
  display(update.result);
});

const scores = await getScores(gameId);
display(scores.result);
