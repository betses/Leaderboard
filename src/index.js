import '../dist/output.css';
import listContainer from './modules/containerList.js';
import addScore from './modules/addScore.js';

const render = () => {
  const scores = document.getElementById('list');
  scores.append(listContainer());
};

render();
addScore();