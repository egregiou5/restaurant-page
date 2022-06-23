import loadInitialPage from './initial-page.js';
import loadMenuPage from './menu-page.js';
import loadContactPage from './contact-page.js';
import './style.css';

function createHeader() {
  const content = document.querySelector('#content');

  const header = document.createElement('div');
  header.classList.add('header');
  
  const headerTitle = document.createElement('h1');
  headerTitle.textContent = 'The Morning Fix';
  header.appendChild(headerTitle);
  
  const headerNav = document.createElement('nav');
  const homeButton = document.createElement('button');
  homeButton.classList.add('nav-button');
  homeButton.textContent = 'Home';
  setActiveButton(homeButton);
  const menuButton = document.createElement('button');
  menuButton.classList.add('nav-button');
  menuButton.textContent = 'Menu';
  const contactButton = document.createElement('button');
  contactButton.classList.add('nav-button');
  contactButton.textContent = 'Contact';
  
  addListeners(homeButton, menuButton, contactButton);
  headerNav.appendChild(homeButton);
  headerNav.appendChild(menuButton);
  headerNav.appendChild(contactButton);
  
  header.appendChild(headerNav);
  
  content.appendChild(header);
}

function addListeners(home, menu, contact) {
  home.addEventListener('click', () => {
    clearMainContent();
    setActiveButton(home);
    checkMenuFlex();
    loadInitialPage();
  });
  menu.addEventListener('click', () => {
    clearMainContent();
    setActiveButton(menu);
    loadMenuPage();
  });
  contact.addEventListener('click', () => {
    clearMainContent();
    setActiveButton(contact);
    checkMenuFlex();
    loadContactPage();
  });
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

function setActiveButton(button) {
  const btns = document.querySelectorAll('.nav-button');
  btns.forEach(btn => {
    if (btn.classList.contains('active')) {
      btn.classList.remove('active');
    }
  });
  button.classList.add('active');
}

function checkMenuFlex() {
  const mainContent = document.querySelector('.main-content');
  if (mainContent.classList.contains('menu-flex')) {
    mainContent.classList.remove('menu-flex');
  }
}

function initialisePage() {
  createHeader();
  createMainContentDiv();
  loadInitialPage();
}

initialisePage();