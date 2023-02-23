const productList = document.querySelector('.product-list');

fetch('https://fakestoreapi.com/products')
  .then(response => response.json())
  .then(data => {
    data.forEach(product => {
      const card = document.createElement('div');
      card.classList.add('product-card');
      card.innerHTML = `
        <img src="${product.image}" alt="${product.title}">
        <h2>${product.title}</h2>
        <p>${product.description}</p>
        <button>Add to Cart</button>
      `;
      productList.appendChild(card);
    });
  })
  .catch(error => console.log(error));
