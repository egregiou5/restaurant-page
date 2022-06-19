import loadInitialPage from './initial-page.js';
import loadMenuPage from './menu-page.js';
import loadContactPage from './contact-page.js';

function createHeader() {
  const content = document.querySelector('#content');

  const header = document.createElement('div');
  header.classList.add('header');
  
  const headerTitle = document.createElement('h1');
  headerTitle.textContent = 'The Morning Fix';
  header.appendChild(headerTitle);
  
  const headerNav = document.createElement('nav');
  const homeButton = document.createElement('button');
  homeButton.textContent = 'Home';
  headerNav.appendChild(homeButton);
  const menuButton = document.createElement('button');
  menuButton.textContent = 'Menu';
  headerNav.appendChild(menuButton);
  const contactButton = document.createElement('button');
  contactButton.textContent = 'Contact';
  headerNav.appendChild(contactButton);
  
  header.appendChild(headerNav);
  
  content.appendChild(header);
}

function createMainContentDiv() {
  const mainContent = document.createElement('div');
  mainContent.classList.add('main-content');
  content.appendChild(mainContent);
}

function clearMainContent() {
  const mainContent = document.querySelector('.main-content');
  let mainContentChild = mainContent.lastElementChild;
  while (mainContentChild) {
    mainContent.removeChild(mainContentChild);
    mainContentChild = mainContent.lastElementChild;
  }
}

function initialisePage() {
  createHeader();
  createMainContentDiv();
  loadInitialPage();
}

initialisePage();
loadMenuPage();
loadContactPage();