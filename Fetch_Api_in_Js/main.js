const dataContainer = document.getElementById('data-container');

fetch('https://jsonplaceholder.typicode.com/posts')
  .then(response => response.json())
  .then(data => {
    data.forEach(item => {
      const card = document.createElement('div');
      card.classList.add('card');
      card.innerHTML = `
        <h2>${item.title}</h2>
        <p>${item.body}</p>
      `;
      dataContainer.appendChild(card);
    });
  })
  .catch(error => console.log(error));
