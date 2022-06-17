export default function loadContactPage() {
  const content = document.querySelector('#content');

  const infoContainer = document.createElement('div');

  const infoTitle = document.createElement('h1');
  infoTitle.textContent = 'Contact Us';
  infoContainer.appendChild(infoTitle);

  const infoNumber = document.createElement('p');
  infoNumber.textContent = '555-5555';
  infoContainer.appendChild(infoNumber);
  const infoEmail = document.createElement('p');
  infoEmail.textContent = 'themorningfix@example.com';
  infoContainer.appendChild(infoEmail);

  content.appendChild(infoContainer);
}