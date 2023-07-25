const display = () => {
    const scoreList = [
        {name: "Christina", score: 10},
        {name: "Mesak", score: 10},
        {name: "Meemaw", score: 10},
        {name: "Gilbert", score: 10},
        {name: "Lily", score: 10},
        {name: "Katy", score: 10},
    ]

    const list = document.getElementById('score-list');
    scoreList.forEach((score,index) => {
        const listItem = document.createElement('li')
        listItem.className = 'list-item';
        listItem.innerHTML = `<span>${score.name}:</span> <span>${score.score}</span>`
        listItem.style.backgroundColor = index % 2 === 0 ? '#fff' : '#f2f2f2';
        listItem.style.padding = '1%';
        list.appendChild(listItem);
    })
}

module.exports = display