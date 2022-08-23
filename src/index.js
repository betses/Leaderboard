import './app.css';

const leaderboard = [
  {
    name: 'betse',
    score: 23,
  },
  {
    name: 'nati',
    score: 20,
  },
  {
    name: 'abi',
    score: 17,
  },
  {
    name: 'sura',
    score: 12,
  },
  {
    name: 'betse',
    score: 23,
  },
  {
    name: 'name',
    score: 20,
  },
  {
    name: 'name',
    score: 17,
  },
  {
    name: 'name',
    score: 12,
  },
];

const Ulist = document.getElementById('list');
const list = document.createElement('ul');
let gridContainor = '';
for (let i = 0; i < leaderboard.length; i += 1) {
  gridContainor = `
  <li>
    ${leaderboard[i].name} : ${leaderboard[i].score}
  </li>
  `;
  Ulist.appendChild(list);
  list.innerHTML += gridContainor;
}