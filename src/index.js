import './style.css';
import { header } from './header.js';
import { sidebar } from './sidebar.js';
import { ui } from './ui.js';

const content = document.getElementById('content');
content.appendChild(header());
content.appendChild(sidebar());


  //move this elsewhere later
  const main = document.createElement('div');
  main.classList.add('main');
  main.id = 'main';
  main.textContent = 'test';

  content.appendChild(main);


