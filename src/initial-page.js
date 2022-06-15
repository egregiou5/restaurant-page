import Cafe from './cafe-background.jpg';

export default function loadPage() {
  const content = document.querySelector('#content');

  // Header contents
  const header = document.createElement('div');
  
  const restaurantName = document.createElement('h1');
  restaurantName.textContent = 'Coffee Cafe';
  
  header.appendChild(restaurantName);
  
  const tagline = document.createElement('h3');
  tagline.textContent = 'For all your comforts';
  
  header.appendChild(tagline);
  
  content.appendChild(header);
  
  // Main contents
  const main = document.createElement('div');
  
  const cafeImage = new Image();
  cafeImage.src = Cafe;
  
  main.appendChild(cafeImage);
  
  const desc = document.createElement('p');
  desc.textContent = 'This cafe is very good!';
  
  main.appendChild(desc);
  
  content.appendChild(main);
}