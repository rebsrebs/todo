function sidebar() {
  const sidebar = document.createElement('div');
  sidebar.classList.add('sidebar');
  sidebar.id = 'sidebar';

  // SIDEBAR CONTAINER
  const nav = document.createElement('nav');
  nav.classList.add('nav');
  nav.id = 'nav';

  // SHORTCUTS SECTION
  const shortcuts = document.createElement('h3');
  shortcuts.classList.add('navsection');
  shortcuts.id = 'shortcuts';
  shortcuts.textContent = "Shortcuts";

  const home = document.createElement('a');
  home.classList.add('navlink');
  home.id = 'homenav';
  home.textContent = "Home";

  const dueToday = document.createElement('a');
  dueToday.classList.add('navlink');
  dueToday.id = 'duetodaynav';
  dueToday.textContent = "Due Today";

  const randomTask = document.createElement('a');
  randomTask.classList.add('navlink');
  randomTask.id = 'randomtask';
  randomTask.textContent = "Random Task";

  nav.appendChild(shortcuts);
  nav.appendChild(home);
  nav.appendChild(dueToday);
  nav.appendChild(randomTask);
  sidebar.appendChild(nav);

  return sidebar;
}

export { sidebar };