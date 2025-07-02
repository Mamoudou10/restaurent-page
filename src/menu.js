export default function loadMenu() {
    const menu = document.createElement('div');
  
    const heading = document.createElement('h1');
    heading.textContent = "Our Menu";
  
    const list = document.createElement('ul');
    const items = ["Pasta Primavera", "Grilled Salmon", "Chocolate Lava Cake"];
  
    items.forEach(item => {
      const li = document.createElement('li');
      li.textContent = item;
      list.appendChild(li);
    });
  
    menu.appendChild(heading);
    menu.appendChild(list);
  
    return menu;
  }
  