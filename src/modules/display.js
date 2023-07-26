const display = (scores) => {
  const scoreList = document.getElementById('score-list');
  scoreList.innerHTML = '';
  scores.forEach((item, index) => {
    const listItem = document.createElement('li');
    listItem.innerHTML = `<span>${item.user}:</span> <span>${item.score}</span>`;
    listItem.style.backgroundColor = index % 2 === 0 ? '#fff' : '#f2f2f2';
    scoreList.appendChild(listItem);
  });
};

export default display;
