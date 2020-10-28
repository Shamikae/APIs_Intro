// When you request from an API you get a object response
// We will simulate an API request by building our own 'api response'

//sports
let body = document.querySelector('body');
// let body = document.getElementById('content');
// console.log(body)

function getReq(){
let res = {
    "Soccer": {name: "Soccer", numOfPlayers:22, ball: true, equipment: ['boots', 'ball', 'goals', 'shin pads'], img:''},
    "Tennis": {name: "Tennis", numOfPlayers:2, ball: true, equipment: ['sneakers', 'ball', 'net', 'raquet'], img:''},
    "Rugby": {name: "Rugby", numOfPlayers:30, ball: true, equipment: ['boots', 'ball', 'goals'], img:''},
    "Formula One": {name: "Formula One", numOfPlayers:20, ball: false, equipment: ['car', 'helmate', 'driving shoes', 'driving gloves', 'driving suit'], img:''},
}

for(let key in res){
    console.log(key)

    let banner = document.createElement('img');
    let newTitle = document.createElement('h1');
    let equipment = document.createElement('p');
    let card = document.createElement('div');

    card.setAttribute('class', 'card');

    banner.src = res[key].img;
    newTitle.innerText = res[key].name;
    equipment.innerText = res[key].equipment;

    card.appendChild(newTitle);
    card.appendChild(equipment);

    body.appendChild(card);
   }
}
console.log(getReq())