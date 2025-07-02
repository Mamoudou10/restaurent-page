export default function loadContact() {
    const contact = document.createElement('div');
  
    const heading = document.createElement('h1');
    heading.textContent = "Contact Us";
  
    const phone = document.createElement('p');
    phone.textContent = "📞 +222 123 456 789";
  
    const address = document.createElement('p');
    address.textContent = "📍 123 Food Street, Nouakchott";
  
    contact.appendChild(heading);
    contact.appendChild(phone);
    contact.appendChild(address);
  
    return contact;
  }
  