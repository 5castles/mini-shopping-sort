const displayingItemsContainer = document.querySelector('.items');
const sortNavigation = document.querySelector('.sort-nav');
const logo = document.querySelector('.logo__image');

const CLASSNAME_ITEM = 'item';
const CLASSNAME_DISPLAY_NONE = 'display-none';

loadItems()
  .then(items => displayItems(items))
  .then(() => setEventListener())
  .catch(console.log);

//Fetch the items from the JSON file.
function loadItems() {
  return fetch('data/data.json')
    .then(response => response.json())
    .then(json => json.items);
}

function displayItems (items) {
  items.forEach((item) => {
    createItem(item);
  });
}

function createItem({ type, sex, color }) {
  const newItem = document.createElement('li');
  const html = `
    <img class="item__thumbnail" src="img/${color}_${type.slice(0, 1)}.png" alt="thumbnail" />
    <span class="item__description ${type} ${color}">${type}, ${color}, ${sex}</span>
  `;

  newItem.innerHTML = html.trim();
  newItem.classList.add(CLASSNAME_ITEM);
  displayingItemsContainer.appendChild(newItem);
}

function setEventListener () {
  const itemDescriptions = document.querySelectorAll('.item__description');

  sortNavigation.addEventListener('click', (event) => {
    if (event.target === event.currentTarget) return;

    Array.from(itemDescriptions).forEach(item => {
      if (item.parentElement.classList.contains(CLASSNAME_DISPLAY_NONE)) {
        item.parentElement.classList.remove(CLASSNAME_DISPLAY_NONE);
      }
    });

    Array.from(itemDescriptions).forEach(item => {
      if (item.classList.contains(event.target.dataset.sort)) return;

      item.parentElement.classList.add(CLASSNAME_DISPLAY_NONE);
    });
  });

  logo.addEventListener('click', () => {
    Array.from(itemDescriptions).forEach(item => {
      if (item.parentElement.classList.contains(CLASSNAME_DISPLAY_NONE)) {
        item.parentElement.classList.remove(CLASSNAME_DISPLAY_NONE);
      }
    });
  });
}
