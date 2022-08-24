import { base, gameId } from './env.js';

const addScore = () => {
  let data = {};
  const addleaderBoard = document.getElementById('submit');

  const nameInput = document.getElementById('name');
  const scoreInput = document.getElementById('score');

  const addToApi = async (data) => {
    await fetch(`${base}${gameId}`, {
      method: 'POST',
      body: JSON.stringify(data),
      headers: {
        'Content-type': 'application/json',
      },
    }).then((res) => res.json());
    nameInput.value = '';
    scoreInput.value = '';
  };

  addleaderBoard.addEventListener('click', (e) => {
    e.preventDefault();
    data = {
      user: nameInput.value,
      score: scoreInput.value,
    };
    addToApi(data);
  });
};

export default addScore;