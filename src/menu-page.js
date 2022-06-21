import Donuts from './images/donuts.jpg';
import Croissants from './images/croissants.jpg';
import Cupcakes from './images/cupcakes.jpg';
import Sandwiches from './images/sandwiches.jpg';

const foodItems = [
  {
    name: 'Donuts',
    url: Donuts
  },
  {
    name: 'Croissants',
    url: Croissants
  },
  {
    name: 'Cupcakes',
    url: Cupcakes
  },
  {
    name: 'Sandwiches',
    url: Sandwiches
  }
]

function createFoodItem(obj) {
  const mainContent = document.querySelector('.main-content');
  mainContent.classList.add('menu-flex');

  const foodDiv = document.createElement('div');
  foodDiv.classList.add('food-item');
  
  const foodName = document.createElement('h2');
  foodName.textContent = obj.name;
  const foodImage = new Image();
  foodImage.src = obj.url;
  foodImage.style.width = '200px';
  foodImage.style.height = '200px';
  foodImage.style.objectFit = 'cover';
  
  foodDiv.appendChild(foodName);
  foodDiv.appendChild(foodImage);

  mainContent.appendChild(foodDiv);
}

export default function loadMenu() {
  for (let i = 0; i < foodItems.length; i++) {
    createFoodItem(foodItems[i]);
  }
}

// latte, espresso, americano, mocha