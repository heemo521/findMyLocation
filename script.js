'use strict';

const btn = document.querySelector('.btn-country');
const countriesContainer = document.querySelector('.countries');

///////////////////////////////////////
// const getCountryData = function (country) {
//   const request = new XMLHttpRequest();
//   request.open('GET', `https://restcountries.com/v3.1/name/${country}`);
//   ('REST Countries');
//   request.send();

//   request.addEventListener('load', function () {
//     const [data] = JSON.parse(this.responseText);
//     console.log(data);
//     //   const currencyName = Object.keys(data.currencies)[0];
//     const html = `
//   <article class="country">
//     <img class="country__img" src=${data.flags.png} />
//     <div class="country__data">
//       <h3 class="country__name">${data.name.common}</h3>
//       <h4 class="country__region">${data.region}</h4>
//       <p class="country__row"><span>👫</span>${(
//         +data.population / 1000000
//       ).toFixed(1)} people</p>
//       <p class="country__row"><span>🗣️</span>${data.languages.eng}</p>
//       <p class="country__row"><span>💰</span>${
//         Object.keys(data.currencies)[0]
//       }</p>
//     </div>
//   </article>`;

//     countriesContainer.insertAdjacentHTML('beforeend', html);
//     countriesContainer.style.opacity = 1;
//   });
// };
// const renderCountry = function (data, className = '') {
//   const html = `
//     <article class="country ${className}">
//       <img class="country__img" src=${data.flags.png} />
//       <div class="country__data">
//         <h3 class="country__name">${data.name.common}</h3>
//         <h4 class="country__region">${data.region}</h4>
//         <p class="country__row"><span>👫</span>${(
//           +data.population / 1000000
//         ).toFixed(1)} people</p>
//         <p class="country__row"><span>🗣️</span>${data.languages.eng}</p>
//         <p class="country__row"><span>💰</span>${
//           Object.keys(data.currencies)[0]
//         }</p>
//       </div>
//     </article>`;

//   countriesContainer.insertAdjacentHTML('beforeend', html);
//   countriesContainer.style.opacity = 1;
// };

// const getCountryAndNeighbour = function (country) {
//   const request = new XMLHttpRequest();
//   request.open('GET', `https://restcountries.com/v3.1/name/${country}`);
//   ('REST Countries');
//   request.send();

//   request.addEventListener('load', function () {
//     const [data] = JSON.parse(this.responseText);
//     console.log(data);
//     // Render country 1
//     renderCountry(data);

//     //Get neighbour coutnry
//     const [neighbour] = data.borders;

//     if (!neighbour) return;

//     const request2 = new XMLHttpRequest();
//     request2.open('GET', `https://restcountries.com/v3.1/alpha/${neighbour}`);
//     ('REST Countries');
//     request2.send();

//     request2.addEventListener('load', function () {
//       const data2 = JSON.parse(this.responseText);
//       console.log(data2);

//       renderCountry(data2[0], 'neighbour');
//     });
//   });
// };

// getCountry AndNeighbour('portugal');
// getCountryAndNeighbour('usa');

//   const request = new XMLHttpRequest();
//   request.open('GET', `https://restcountries.com/v3.1/name/${country}`);
//   request.send();

const request = fetch(`https://restcountries.com/v3.1/name/portugal`);
console.log(request);
