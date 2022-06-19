import Cafe from './cafe-background.jpg';

export default function loadInitialPage() {
  const mainContent = document.querySelector('.main-content');
  
  const tagline = document.createElement('h3');
  tagline.textContent = 'For all your comforts';
  
  mainContent.appendChild(tagline);
  
  const cafeImage = new Image();
  cafeImage.src = Cafe;
  cafeImage.style.width = '400px';
  
  mainContent.appendChild(cafeImage);
  
  const desc = document.createElement('p');
  desc.textContent = 'This cafe is very good!';
  
  mainContent.appendChild(desc);
}