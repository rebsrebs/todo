import { header } from './header.js';
import { sidebar } from './sidebar.js';
import { updateProjectNavLinks } from './sidebar.js';
import { main } from './main.js';
import { mainProjectLayout } from './ui.js';

const pageLoad = function() {
  const content = document.getElementById('content');
  content.appendChild(header());
  content.appendChild(sidebar());
  content.appendChild(main());
  updateProjectNavLinks();
  mainProjectLayout();
}

export { pageLoad };