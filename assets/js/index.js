const root = document.getElementById('root');

const product = {
  id: 0,
  name: 'Product 1',
  imgSrc:
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTNIAjjoy5Z1git_Z1141MNOGrxPZOuFgvtUQ&usqp=CAU',
  price: 15999,
  discount: null,
  quantity: 15000,
};

const products = [
  {
    id: 0,
    name: 'Product 1',
    imgSrc:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTNIAjjoy5Z1git_Z1141MNOGrxPZOuFgvtUQ&usqp=CAU',
    price: 15999,
    discount: null,
    quantity: 15000,
  },
  {
    id: 1,
    name: 'Product 2',
    imgSrc:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTNIAjjoy5Z1git_Z1141MNOGrxPZOuFgvtUQ&usqp=CAU',
    price: 30575,
    discount: 25,
    quantity: 1000,
  },
  {
    id: 2,
    name: 'Product 3',
    imgSrc:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTNIAjjoy5Z1git_Z1141MNOGrxPZOuFgvtUQ&usqp=CAU',
    price: 5799,
    discount: 15,
    quantity: 70,
  },
  {
    id: 3,
    name: 'Product 4',
    imgSrc:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTNIAjjoy5Z1git_Z1141MNOGrxPZOuFgvtUQ&usqp=CAU',
    price: 2500,
    discount: null,
    quantity: 0,
  },
];

function createProductCard(productObj) {
  const card = document.createElement('li');
  card.classList.add('cardItem');

  const cardArticle = document.createElement('article');
  cardArticle.classList.add('cardArticle');

  const cardImg = document.createElement('img');
  cardImg.classList.add('cardImg');

  cardImg.src = productObj.imgSrc;
  cardImg.alt = productObj.name;

  const cardTitle = document.createElement('h2');
  cardTitle.classList.add('cardTitle');

  // cardArticle.textContent = productObj.name;

  const titleTextNode = document.createTextNode(productObj.name);
  cardTitle.append(titleTextNode);

  cardArticle.append(cardImg, cardTitle);

  if (!productObj.discount) {
    const price = document.createElement('p');
    price.classList.add('price');
    price.textContent = `${productObj.price} UAH`;

    cardArticle.append(price);
  } else {
    const usualPrice = document.createElement('p');
    usualPrice.classList.add('usualPrice');
    usualPrice.textContent = `${productObj.price} UAH`;

    const discountedPrice = document.createElement('p');
    discountedPrice.classList.add('discountedPrice');

    const discountedPriceValue =
      productObj.price * ((100 - productObj.discount) / 100);
    discountedPrice.textContent = `${discountedPriceValue} UAH`;

    cardArticle.append(usualPrice, discountedPrice);
  }

  if (productObj.quantity <= 0) {
    const out = document.createElement('p');
    out.classList.add('out');
    out.textContent = 'Немає в наявності';

    cardArticle.append(out);
  } else if (productObj.quantity < 200) {
    const almostOut = document.createElement('p');
    almostOut.classList.add('almostOut');
    almostOut.textContent = 'Закінчується';

    cardArticle.append(almostOut);
  }

  card.append(cardArticle);

  return card;
}

const product1Card = createProductCard(product);

// root.append(product1Card);

const productCards = products.map((product) => createProductCard(product));
root.append(...productCards);