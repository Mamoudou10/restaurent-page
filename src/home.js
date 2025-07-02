import restaurantImage from './assets/kebbab.jpg';

export default function loadHome() {
    const home = document.createElement('div');

    const heading = document.createElement('h1');
    heading.textContent = "Welcome to Chez Délice!";

    const image = document.createElement('img');
  image.src = restaurantImage;
  image.alt = "Restaurant";
  image.style.width = "600px";

  const para = document.createElement('p');
  para.textContent = "Delicious food, cozy vibes, and unforgettable experiences.";

  home.appendChild(heading);
  home.appendChild(image);
  home.appendChild(para);

  return home;
}