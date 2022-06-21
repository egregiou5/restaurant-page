import Cafe from './coffee-table.jpg';

export default function loadInitialPage() {
  const mainContent = document.querySelector('.main-content');
  
  const tagline = document.createElement('h3');
  tagline.classList.add('tagline');
  tagline.textContent = "'For all your comforts'";
  
  mainContent.appendChild(tagline);
  
  const cafeImage = new Image();
  cafeImage.src = Cafe;
  cafeImage.style.width = '500px';
  
  mainContent.appendChild(cafeImage);
  
  const desc = document.createElement('p');
  desc.classList.add('desc');
  desc.textContent = 'Starting your day with a little something to get you up to top shape!';
  
  mainContent.appendChild(desc);
}