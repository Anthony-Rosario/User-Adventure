const dragonObj = {
    id: 'dragon',
    title: 'Mirmulnir-Dragon Encounter',
    map: {
        top: '',
        left: ''
    },
    image: 'Dragon-image.jpg',
    description: `
        Traveling towards Riften, you hear a great roar pierce the sky. It's Mirmulnir awakened from his slumber!
        Unaware of the trouble you are about to face, you quickley ponder. Choose wisely!
    `,
    choices: [{
        id: 'fightDragon',
        description: 'You prepare for combat alongside the other prisoners!',
        result: `
            As Mirmulnir draws a deep breath, he belts a fiercous beam of fire from his gut. 
            Taking cover behind a boulder you watch as the other prisoners bake alive. You narrowly
            escape with your life after looting a small amount of gold from the guards 
            who were transporting you.
        `,
        hp: -90,
        gold: 15
    }, {
        id: 'runDragon',
        description: 'Run',
        result: `
            While Mirmulnir sniffs through the wreckage for survivors, you see an opportunity. You spot a horse that has been freed 
            before the chaos. As you emerge from hiding under a charred corpse, you sprint for horse and safely mount it riding 
            away form the dragon.  
        `,
        hp: 0,
        gold: 0
    }]
};


const thievesGuildObj = {
    id: 'thievesGuild',
    title: 'Thieve\'s Guild',
    map: {
        top: '',
        left: ''
    },
    image: 'thievesguild.jpg',
    description: `
        As you arrive in Riften a man hands you a mysterious note. After reading the note you make your way to small sewer entrance spoken of in said note. Upon entrance you are greeted by Mercer Frey, leader of the Thieve's Guild. He has heard about your endeavors and is interested in your enlistment.
    `,
    choices: [{
        id: 'thanksAnyway',
        description: 'You extend your arm out for a handshake.',
        result: `
            As mercer reaches forward you quickly retract your arm and slide your hand over your head gently combing the top of it. You utter "psyche"
            as you turn and walk away. You then smack your head on the small exit post hanging over the door
        `,
        hp: -20,
        gold: 0
    }, {
        id: 'joinGuild',
        description: 'Mercer hands you a letter and you sign it',
        result: `
            Upon signing, Mercer grants token of appreciation. A bag of coin filled with 60 pieces of gold.  
        `,
        hp: 0,
        gold: 60
    }, {
        id: 'fightThieves',
        description: 'You become fed up with Mercer\'s voice and decide to take it out on him',
        result: `
            Your scuffel leaves you bloodied but Mercer dead. As you look his pockets you find a fair amount of gold.
        `,
        hp: -50,
        gold: 125
    }]
};




const winterholdObj = {
    id: 'winterholdCollege',
    title: 'The College of Winterhold',
    map: {
        top: '',
        left: ''
    },
    image: 'College_of_Winterhold.png',
    description: `
        After leaving Riften, your journey across the northern trail leads you to the decrepit ruins of a College
        once adored by many. Today it stands as the only bastion of honing your magical skills. 
    `,
    choices: [{
        id:'mingle',
        description: 'As you arrive at the college a sudden spark of social interaction overwhelms you.',
        result: `
            Feeling the needs to strike a conversation with people you meet J\`zargo. A cunning Khajiit sorcerer eagerly awaiting 
            to make a name for himself. You two decide to start a duel, in which you dodge an ice spike hurled by him 
            unbenounced to you. While dodging you put up a wall of flames and launch a deadly lightning strike through the 
            flames piercing J\`zargo and winning the duel.
        `,
        hp: -5,
        gold: 15
    }, {
        id:'tolfdir',
        description: 'talk to small hooded burly man',
        result: `
            As you speak to the hooded figure he reveals he is the main instructor at the college and has had visions
            of your arrival for years. You take up magic and become his apprentice. 
        `,
        hp: 0,
        gold: 0
    }, {
        id:'thalmar',
        description: 'While walking through the halls you stumble upon a suspicious meeting',
        result: `
            Upon learning of your prescence the meeting comes to quick adjournment and you begin 
            to follow the one sporting a giant cloak. As you bob and weave through the old dilapidated 
            hallways, you round a corner and are bludgeoned on the back of te head. It was a Thalmor spy 
            trying to infiltrate the college. You lie unconcious until someone comes and wakes you.
        `,
        hp: -45,
        gold: -40
    }]
};


// const nightengalesObj = {
//     id: '',
//     title: '',
//     map: {
//         top: '',
//         left: ''
//     },
//     prerequissites: ['thievesGuildObj', 'winterholdObj'],
//     image: './assets/nightengaleslogo.jpg',
//     description:


// }

const quests = [
    dragonObj,
    thievesGuildObj,
    winterholdObj,
    // nightengalesObj
];

export default quests;