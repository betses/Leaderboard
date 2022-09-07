import { base, gameId } from './env.js';

const listContainer = () => {
  const refresh = document.getElementById('refresh');
  const list = document.createElement('ol');
  list.className = 'all-scores';
  let leaderboard = [];
  const addToList = async () => {
    const result = await fetch(`${base}${gameId}`).then((res) => res.json());
    return result;
  };
  refresh.addEventListener('click', async () => {
    list.innerHTML = '';
    const result = await fetch(`${base}${gameId}`).then((res) => res.json());
    leaderboard = result.result;
    leaderboard.forEach((score) => {
      list.innerHTML += `
            <li>
                <mark>${score.user}</mark>
                <small>${score.score}</small>
            </li>
        
                  `;
    });
  });
  addToList().then((res) => {
    leaderboard = res.result;
    leaderboard.forEach((score) => {
      list.innerHTML += `
      <li>
      <mark>${score.user}</mark>
      <small>${score.score}</small>
  </li>
      
                `;
    });
  });
  return list;
};

export default listContainer;