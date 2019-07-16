const toggleList = document.getElementById('toggleList');
const listDiv = document.querySelector('.list');
const descriptionInput = document.querySelector('input.description');
const descriptionP = document.querySelector('p.description');
const descriptionButton = document.querySelector('button.description');
const listUl = listDiv.querySelector('ul');
const addItemInput = document.querySelector('input.addItemInput');
const addItemButton = document.querySelector('button.addItemButton');

// console.log(listDiv);

listUl.addEventListener('click', (event) => {
  if (event.target.tagName === 'BUTTON') {
    let li = event.target.parentNode;
    let ul = li.parentNode;
    ul.removeChild(li);
  }
});

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
  li.innerHTML = addItemInput.value + '<button>Remove</button>';
  ul.appendChild(li);
  addItemInput.value = "";
})