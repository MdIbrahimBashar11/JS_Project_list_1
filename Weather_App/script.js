const searchForm = document.querySelector('#search-form');
const searchInput = document.querySelector('#search-input');
const weatherDetails = document.querySelector('#weather-details');

const API_KEY = '<your api key here>';

searchForm.addEventListener('submit', e => {
  e.preventDefault();

  const city = searchInput.value.trim();

  if (city === '') {
    return;
  }

  fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`)
    .then(response => response.json())
    .then(data => {
      const temperature = data.main.temp;
      const description = data.weather[0].description;
      const iconCode = data.weather[0].icon;
      const iconUrl = `http://openweathermap.org/img/w/${iconCode}.png`;

      const html = `
        <p>Temperature: ${temperature} &deg;C</p>
        <p>Description: ${description}</p>
        <img src="${iconUrl}" alt="${description}">
      `;

      weatherDetails.innerHTML = html;
    })
    .catch(error => {
      console.error(error);
      weatherDetails.innerHTML = '<p>An error occurred while fetching weather data.</p>';
    });

  searchInput.value = '';
});
