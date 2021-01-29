import { health, liveGoldQuestLine, deadGoldQuestLine } from '../results/completedmessages.js';
import { scoreHp, scoreGold } from '../results/results-utils.js';


const user = JSON.parse(localStorage.getItem('USER'));
const storyResults = document.getElementById('results');
const hpResult = scoreHp(user.hp);
const goldResult = scoreGold(user.gold);
const healthMessage = health[hpResult];
const buttonReset = document.getElementById('start-over');

let goldMessages = null;

if (hpResult === 'dead') {
    goldMessages = deadGoldQuestLine;
}
else {
    goldMessages = liveGoldQuestLine;
}


const goldMessage = goldMessages[goldResult];

const story = `${user.name}, the ${user.race}, 
              ${healthMessage} ${goldMessage}`;


storyResults.textContent = story;

buttonReset.addEventListener('click', () => {
    localStorage.clear(user);
    window.location = '../index.html';
});