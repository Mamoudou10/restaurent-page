import loadHome from './home';
import loadMenu from './menu';
import loadContact from './contact';
import './style.css';

function clearContent() {
  const content = document.getElementById('content');
  content.innerHTML = '';
}

function setActiveTab(tabFunction) {
  clearContent();
  const content = document.getElementById('content');
  content.appendChild(tabFunction());
}

// Initial load
document.addEventListener('DOMContentLoaded', () => {
  setActiveTab(loadHome);

  document.getElementById('home-btn').addEventListener('click', () => {
    setActiveTab(loadHome);
  });

  document.getElementById('menu-btn').addEventListener('click', () => {
    setActiveTab(loadMenu);
  });

  document.getElementById('about-btn').addEventListener('click', () => {
    setActiveTab(loadContact);
  });
});
