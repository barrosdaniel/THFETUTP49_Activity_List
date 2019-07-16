const toggleList = document.getElementById('toggleList');
const listDiv = document.querySelector('.list');
const descriptionInput = document.querySelector('input.description');
const descriptionP = document.querySelector('p.description');
const descriptionButton = document.querySelector('button.description');
const addItemInput = document.querySelector('input.addItemInput');
const addItemButton = document.querySelector('button.addItemButton');
const removeItemButton = document.querySelector('button.removeItemButton');

// console.log(listDiv);

listDiv.addEventListener('mouseover', (event) => {
  if (event.target.tagName === 'LI') {
    event.target.textContent = event.target.textContent.toUpperCase();
  }
});

listDiv.addEventListener('mouseout', (event) => {
  if (event.target.tagName === 'LI') {
    event.target.textContent = event.target.textContent.toLowerCase();
  }
});

// listDiv.addEventListener('mouseout', (event) => {
//   listItems[i].textContent = listItems[i].textContent.toLowerCase();
// });

toggleList.addEventListener('click', () => {
  if (listDiv.style.display === 'none') {
    toggleList.textContent = 'Hide List';
    listDiv.style.display = 'block';
  } else if (listDiv.style.display !== 'none') {
    toggleList.textContent = 'View List';
    listDiv.style.display = 'none';
  }
})

descriptionButton.addEventListener('click', () => {
  descriptionP.innerHTML = descriptionInput.value + ':';
  descriptionInput.value = '';
})

addItemButton.addEventListener('click', () => {
  const ul = document.querySelectorAll('.list ul')[0];
  let li = document.createElement('li');
  li.textContent = addItemInput.value;
  ul.appendChild(li);
  addItemInput.value = "";
})

removeItemButton.addEventListener('click', () => {
  const ul = document.querySelectorAll('.list ul')[0];
  let li = document.querySelector('li:last-child');
  ul.removeChild(li);
})