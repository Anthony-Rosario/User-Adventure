import quests from '../data.js';

const ul = document.querySelector('ul');

const user = JSON.parse(localStorage.getItem('USER'));

let allQuestsCompleted = true;


for (const quest of quests) {
    if (!user.completed[quest.id]) {
        allQuestsCompleted = false;
    }
}


if (user.hp <= 0 || allQuestsCompleted) {
    window.location = '../results';
}


for (const quest of quests) {
    const li = document.createElement('li');
    const a = document.createElement('a');
    
    a.textContent = quest.title;
    a.href = `../quests/?id=${quest.id}`;
    if (user.completed[quest.id] === true) {
        a.classList = 'hide-quest';
        a.style.textDecoration = 'line-through';
    }
    li.append(a);
    ul.append(li);
}


