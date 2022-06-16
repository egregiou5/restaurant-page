import Donuts from './images/donuts.jpg';

export default function createFoodItem() {
  const content = document.querySelector('#content');

  const foodItem = document.createElement('div');
  foodItem.classList.add('food-item');
  
  const foodName = document.createElement('h2');
  foodName.textContent = "Donuts";
  const foodImage = new Image();
  foodImage.src = Donuts;
  foodImage.style.width = '200px';
  
  foodItem.appendChild(foodName);
  foodItem.appendChild(foodImage);

  content.appendChild(foodItem);
}

// latte, espresso, americano, mocha