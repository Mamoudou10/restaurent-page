console.log("Welcome to the Restaurant Page!");
import restaurantImage from './assets/kebbab.jpg';

const content = document.getElementById('content');

const image = document.createElement('img');
image.src = restaurantImage;
image.alt = "Our Beautiful Restaurant";
image.style.width = "600px";

const heading = document.createElement('h1');
heading.textContent = "Welcome to Chez Délice!";

const paragraph = document.createElement('p');
paragraph.textContent = "At Chez Délice, we serve the finest dishes in a cozy atmosphere.";

content.appendChild(heading);
content.appendChild(image);
content.appendChild(paragraph);
