const data = [
  {
    type: "pants",
    sex: "male",
    color: "blue",
  },
  {
    type: "pants",
    sex: "male",
    color: "yellow",
  },
  {
    type: "pants",
    sex: "male",
    color: "pink",
  },
  {
    type: "t-shirt",
    sex: "male",
    color: "blue",
  },
  {
    type: "t-shirt",
    sex: "male",
    color: "yellow",
  },
  {
    type: "t-shirt",
    sex: "male",
    color: "pink",
  },
  {
    type: "skirt",
    sex: "female",
    color: "blue",
  },
  {
    type: "skirt",
    sex: "female",
    color: "yellow",
  },
  {
    type: "skirt",
    sex: "female",
    color: "pink",
  },
  {
    type: "t-shirt",
    sex: "female",
    color: "blue",
  },
  {
    type: "t-shirt",
    sex: "female",
    color: "yellow",
  },
  {
    type: "t-shirt",
    sex: "female",
    color: "pink",
  },
  {
    type: "pants",
    sex: "female",
    color: "blue",
  },
  {
    type: "pants",
    sex: "female",
    color: "yellow",
  },
  {
    type: "pants",
    sex: "female",
    color: "pink",
  },
];

const displayingItemsContainer = document.querySelector('.items');
const sortNavigation = document.querySelector('.sort-nav');
const logo = document.querySelector('.logo__image');

const CLASSNAME_ITEM = 'item';
const CLASSNAME_DISPLAY_NONE = 'display-none';

function createShoppingItems () {
  data.forEach((item) => {
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

createShoppingItems();

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
