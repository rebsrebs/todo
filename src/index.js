import './style.css';
import { header } from './header.js';
import { sidebar } from './sidebar.js';
import { main } from './main.js';
import { npform } from './newprojectform.js';
import { ntform } from './newtaskform.js';
import { updateProjectNavLinks } from './sidebar.js';

const content = document.getElementById('content');
content.appendChild(header());
content.appendChild(sidebar());
content.appendChild(main());
updateProjectNavLinks();

  


