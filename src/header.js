function header() {
  const header = document.createElement('header');
  header.classList.add('header');
  header.id = 'header';
  header.textContent = 'You can do it';
  return header;
}

export { header };