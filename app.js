// Variable Selectors
const toggleList = document.getElementById('toggleList');
const listDiv = document.querySelector('.list');
const descriptionInput = document.querySelector('input.description');
const descriptionP = document.querySelector('p.description');
const descriptionButton = document.querySelector('button.description');
const listUl = listDiv.querySelector('ul');
const addItemInput = document.querySelector('input.addItemInput');
const addItemButton = document.querySelector('button.addItemButton');

// List Item Action Buttons
listUl.addEventListener('click', (event) => {
  if (event.target.tagName === 'BUTTON') {
    if (event.target.className === 'remove') {
      // Remove button
      let li = event.target.parentNode;
      let ul = li.parentNode;
      ul.removeChild(li);
    } else if (event.target.className === 'up') {
      // Up button
      let li = event.target.parentNode;
      let prevLi = li.previousElementSibling;
      let ul = li.parentNode;
      if (prevLi) {
        ul.insertBefore(li, prevLi);
      }
    } else if (event.target.className === 'down') {
      let li = event.target.parentNode;
      let nextLi = li.nextElementSibling;
      let ul = li.parentNode;
      if (nextLi) {
        ul.insertBefore(nextLi, li);
      }
    }
  }
});

// Hide List Button
toggleList.addEventListener('click', () => {
  if (listDiv.style.display === 'none') {
    toggleList.textContent = 'Hide List';
    listDiv.style.display = 'block';
  } else if (listDiv.style.display !== 'none') {
    toggleList.textContent = 'View List';
    listDiv.style.display = 'none';
  }
})

// List Description Button
descriptionButton.addEventListener('click', () => {
  descriptionP.innerHTML = descriptionInput.value + ':';
  descriptionInput.value = '';
})

// Remove Button
addItemButton.addEventListener('click', () => {
  const ul = document.querySelectorAll('.list ul')[0];
  let li = document.createElement('li');
  li.innerHTML = `${addItemInput.value} <button class="up">Up</button><button class="down">Down</button><button class="remove">Remove</button>`;
  ul.appendChild(li);
  addItemInput.value = "";
})