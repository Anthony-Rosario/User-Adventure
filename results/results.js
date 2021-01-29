import { health, gold, liveGoldQuestLine, deadGoldQuestLine } from '../results/completedmessages.js';
import { scoreHp, scoreGold } from '../results/results-utils.js';


const user = JSON.parse(localStorage.getItem('USER'));
const storyResults = document.getElementById('results');
const hpResult = scoreHp(user.hp);
const goldResult = scoreGold(user.gold);
const healthMessage = health[hpResult];

let goldMessages = null;

if (hpResult === 'dead') {
    goldMessages = deadGoldQuestLine;
}
else {
    goldMessages = liveGoldQuestLine;
}


const goldMessage = goldMessages[goldResult];

const story = `Upon ya yafafass, tast satsf ${user.name} the ${user.race} 1231 
              ${healthMessage} ${goldMessage}`;


storyResults.textContent = story;