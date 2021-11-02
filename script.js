'use strict';

const btn = document.querySelector('.btn-country');
const countriesContainer = document.querySelector('.countries');

const renderCountry = function (data, className = '') {
  const html = `
      <article class="country ${className}">
        <img class="country__img" src=${data.flags.png} />
        <div class="country__data">
          <h3 class="country__name">${data.name.common}</h3>
          <h4 class="country__region">${data.region}</h4>
          <p class="country__row"><span>👫</span>${(
            +data.population / 1000000
          ).toFixed(1)} people</p>
          <p class="country__row"><span>🗣️</span>${data.languages.eng}</p>
          <p class="country__row"><span>💰</span>${
            Object.keys(data.currencies)[0]
          }</p>
        </div>
      </article>`;

  countriesContainer.insertAdjacentHTML('beforeend', html);
  countriesContainer.style.opacity = 1;
};

const renderError = function (msg) {
  countriesContainer.insertAdjacentText('beforeend', msg);
  countriesContainer.style.opacity = 1;
};

// // ///////////////////////////////////////
// // // const getCountryData = function (country) {
// // //   const request = new XMLHttpRequest();
// // //   request.open('GET', `https://restcountries.com/v3.1/name/${country}`);
// // //   ('REST Countries');
// // //   request.send();

// // //   request.addEventListener('load', function () {
// // //     const [data] = JSON.parse(this.responseText);
// // //     console.log(data);
// // //     //   const currencyName = Object.keys(data.currencies)[0];
// // //     const html = `
// // //   <article class="country">
// // //     <img class="country__img" src=${data.flags.png} />
// // //     <div class="country__data">
// // //       <h3 class="country__name">${data.name.common}</h3>
// // //       <h4 class="country__region">${data.region}</h4>
// // //       <p class="country__row"><span>👫</span>${(
// // //         +data.population / 1000000
// // //       ).toFixed(1)} people</p>
// // //       <p class="country__row"><span>🗣️</span>${data.languages.eng}</p>
// // //       <p class="country__row"><span>💰</span>${
// // //         Object.keys(data.currencies)[0]
// // //       }</p>
// // //     </div>
// // //   </article>`;

// // //     countriesContainer.insertAdjacentHTML('beforeend', html);
// // //     countriesContainer.style.opacity = 1;
// // //   });
// // // };

// // // const getCountryAndNeighbour = function (country) {
// // //   const request = new XMLHttpRequest();
// // //   request.open('GET', `https://restcountries.com/v3.1/name/${country}`);
// // //   ('REST Countries');
// // //   request.send();

// // //   request.addEventListener('load', function () {
// // //     const [data] = JSON.parse(this.responseText);
// // //     console.log(data);
// // //     // Render country 1
// // //     renderCountry(data);

// // //     //Get neighbour coutnry
// // //     const [neighbour] = data.borders;

// // //     if (!neighbour) return;

// // //     const request2 = new XMLHttpRequest();
// // //     request2.open('GET', `https://restcountries.com/v3.1/alpha/${neighbour}`);
// // //     ('REST Countries');
// // //     request2.send();

// // //     request2.addEventListener('load', function () {
// // //       const data2 = JSON.parse(this.responseText);
// // //       console.log(data2);

// // //       renderCountry(data2[0], 'neighbour');
// // //     });
// // //   });
// // // };

// // // getCountry AndNeighbour('portugal');
// // // getCountryAndNeighbour('usa');

// // //   const request = new XMLHttpRequest();
// // //   request.open('GET', `https://restcountries.com/v3.1/name/${country}`);
// // //   request.send();

// // // const request = fetch(`https://restcountries.com/v3.1/name/portugal`);
// // // console.log(request);

// // // const getCountryData = function (country) {
// // //     fetch(`https://restcountries.com/v3.1/name/${country}`)
// // //       .then(function (response) {
// // //         console.log(response);
// // //         return response.json();
// // //       })
// // //       .then(function (data) {
// // //         console.log(data);
// // //         renderCountry(data[0]);
// // //       });
// // //   };

// // //   getCountryData('portugal');

// // // const getCountryData = function (country) {
// // //     fetch(`https://restcountries.com/v3.1/name/${country}`)
// // //       .then(response => {
// // //         if (!response.ok) throw new Error(`Country not found ${response.status}`);
// // //         return response.json();
// // //       })
// // //       .then(data => {
// // //         renderCountry(data[0]);
// // //         const [neighbour] = data[0].borders;

// // //         if (!neighbour) return;

// // //         return fetch(`https://restcountries.com/v3.1/name/${neighbour}`);
// // //       })
// // //       .then(response => {
// // //         if (!response.ok) throw new Error(`Country not found ${response.status}`);
// // //         return response.json();
// // //       })
// // //       .then(data => renderCountry(data[0], 'neighbour'))
// // //       .catch(err => {
// // //         console.error(`${err} 🚨🚨🚨`);
// // //         renderError(`Something went wrong 🚨🚨🚨 ${err.message}. Try again!`);
// // //       })
// // //       .finally(() => {
// // //         countriesContainer.style.opacity = 1;
// // //       });
// // //   };

// // const getJSON = function (url, errorMsg = 'Something went wrong') {
// //   return fetch(url).then(response => {
// //     if (!response.ok) throw new Error(`${errorMsg} ${response.status}`);

// //     return response.json();
// //   });
// // };

// // const getCountryData = function (country) {
// //   getJSON(`https://restcountries.com/v3.1/name/${country}`, 'Country not found')
// //     .then(data => {
// //       renderCountry(data[0]);
// //       const neighbour = data[0].borders[0];
// //       //   console.log(neighbour);
// //       //   if (!neighbour) throw new Error('No neighbour found!');
// //       return getJSON(
// //         `https://restcountries.com/v3.1/name/${neighbour}`,
// //         'Country not found'
// //       );
// //     })
// //     .then(data => renderCountry(data[0], 'neighbour'))
// //     .catch(err => {
// //       console.error(`${err} 🚨🚨🚨`);
// //       renderError(`Something went wrong 🚨🚨🚨 ${err.message}. Try again!`);
// //     })
// //     .finally(() => {
// //       countriesContainer.style.opacity = 1;
// //     });
// // };

// // btn.addEventListener('click', function () {
// //   getCountryData('australia');
// // });

// /*
// Coding Challenge #1

// In this challenge you will build a function 'whereAmI' which renders a country ONLY based on GPS coordinates. For that, you will use a second API to geocode coordinates.

// Here are your tasks:

// PART 1
// 1. Create a function 'whereAmI' which takes as inputs a latitude value (lat) and a longitude value (lng) (these are GPS coordinates, examples are below).
// 2. Do 'reverse geocoding' of the provided coordinates. Reverse geocoding means to convert coordinates to a meaningful location, like a city and country name. Use this API to do reverse geocoding: https://geocode.xyz/api.
// The AJAX call will be done to a URL with this format: https://geocode.xyz/52.508,13.381?geoit=json. Use the fetch API and promises to get the data. Do NOT use the getJSON function we created, that is cheating 😉
// 3. Once you have the data, take a look at it in the console to see all the attributes that you recieved about the provided location. Then, using this data, log a messsage like this to the console: 'You are in Berlin, Germany'
// 4. Chain a .catch method to the end of the promise chain and log errors to the console
// 5. This API allows you to make only 3 requests per second. If you reload fast, you will get this error with code 403. This is an error with the request. Remember, fetch() does NOT reject the promise in this case. So create an error to reject the promise yourself, with a meaningful error message.

// PART 2
// 6. Now it's time to use the received data to render a country. So take the relevant attribute from the geocoding API result, and plug it into the countries API that we have been using.
// 7. Render the country and catch any errors, just like we have done in the last lecture (you can even copy this code, no need to type the same code)

// TEST COORDINATES 1: 52.508, 13.381 (Latitude, Longitude)
// TEST COORDINATES 2: 19.037, 72.873
// TEST COORDINATES 2: -33.933, 18.474

// GOOD LUCK 😀
// */

// //event handler attached to the where am I button to find the user's location with geolocation API, extract latitude and longitude, then feed that to use geodcode's reverse lookup to find the country, then use RESTful API to get the country information and render on the screen

// // const locationFinder = function () {
// //   function success(pos) {
// //     const { latitude: lat, longitude: lng } = pos.coords;
// //     whereAmI(lat, lng);
// //   }

// //   navigator.geolocation.getCurrentPosition(success, () =>
// //     console.log('failed')
// //   );
// // };

// const getLocation = function () {
//   return new Promise((resolve, reject) =>
//     navigator.geolocation.getCurrentPosition(resolve, reject)
//   );
// };
// const whereAmI = function (lat, lng) {
//   getLocation()
//     .then(pos => {
//       const { latitude: lat, longitude: lng } = pos.coords;
//       return fetch(`https://geocode.xyz/${lat},${lng}?geoit=json`);
//     })
//     .then(res => {
//       if (!res.ok) throw new Error(`Reload too fast ${res.status}`);
//       return res.json();
//     })
//     .then(data => {
//       console.log(`You are in ${data.city}, ${data.country}`);
//       return fetch(`https://restcountries.com/v3.1/name/${data.country}`);
//     })
//     .then(request => {
//       if (!request.ok) throw new Error(`Something went wrong`);
//       return request.json();
//     })
//     .then(data => {
//       renderCountry(data[0]);
//     })
//     .catch(err => console.log(`Error has occured ${err}`));
// };

// // whereAmI(52.508, 13.381);
// // whereAmI(19.037, 72.873);
// // whereAmI(-33.933, 18.474);

// // const getCountryData = function (country) {
// //   fetch(`https://restcountries.com/v3.1/name/${country}`)
// //     .then(request => {
// //       if (!request.ok) throw new Error(`Something went wrong`);
// //       return request.json();
// //     })
// //     .then(data => {
// //       renderCountry(data[0]);
// //     })
// //     .catch(err => {
// //       console.error(`${err} 🚨🚨🚨`);
// //       renderError(`Something went wrong 🚨🚨🚨 ${err.message}. Try again!`);
// //     })
// //     .finally(() => {
// //       countriesContainer.style.opacity = 1;
// //     });
// // };

// btn.addEventListener('click', whereAmI);

// // console.log('Test start');
// // setTimeout(() => console.log('0 sec timer'), 0);
// // Promise.resolve('Resolved promise 1').then(res => console.log(res));

// // Promise.resolve('Resolved promise 2').then(res => {
// //   for (let i = 0; i < 100000000; i++) {
// //     console.log(res);
// //   }
// // });
// // console.log('Test end');

// // const lotteryPromise = new Promise(function (resolve, reject) {
// //   console.log('Lottery draw is happening');
// //   setTimeout(function () {
// //     if (Math.random() >= 0.5) {
// //       resolve('You WIN');
// //     } else {
// //       reject(new Error('You lost your money'));
// //     }
// //   }, 2000);
// // });

// // lotteryPromise.then(res => console.log(res)).catch(err => console.log(err));

//Promissifying setTimeout

// // wait(1)
// //   .then(() => {
// //     console.log('1 second passed');
// //     return wait(1);
// //   })
// //   .then(() => {
// //     console.log('2 seconds passed');
// //     return wait(1);
// //   })
// //   .then(() => {
// //     console.log('3 seconds passed');
// //     return wait(1);
// //   })
// //   .then(() => {
// //     console.log('4 seconds passed');
// //     return wait(1);
// //   })
// //   .then(() => console.log('5 seconds Final'));

// // Promise.resolve('');

// // const getPosition = function () {
// //   return new Promise((resolve, reject) => {
// //     navigator.geolocation.getCurrentPosition(resolve, reject);
// //   });
// // };

// /* Coding Challenge #2 */
// const wait = function (seconds) {
//   return new Promise(function (resolve) {
//     setTimeout(resolve, seconds * 1000);
//   });
// };

// const imgContainer = document.querySelector('.images');

// const createImage = function (imgPath) {
//   return new Promise(function (resolve, reject) {
//     const img = document.createElement('img');
//     img.src = imgPath;

//     img.addEventListener('load', function () {
//       imgContainer.append(img);
//       resolve(img);
//     });

//     img.addEventListener('error', function () {
//       reject(new Error('Image not found'));
//     });
//   });
// };

// let currentImg;

// createImage('img/img-1.jpg')
//   .then(img => {
//     currentImg = img;
//     // console.log(`Image 1 loaded`);
//     return wait(2);
//   })
//   .then(() => {
//     currentImg.style.display = 'none';
//     return createImage('img/img-2.jpg');
//   })
//   .then(img => {
//     currentImg = img;
//     console.log(`Image 2 loaded`);
//     return wait(1);
//   })
//   .then(() => {
//     currentImg.style.display = 'none';
//   })
//   .catch(err => console.log(`An error has occured: ${err}`));

const getPosition = function () {
  return new Promise((resolve, reject) =>
    navigator.geolocation.getCurrentPosition(resolve, reject)
  );
};

const whereAmI = async function () {
  try {
    //GeoLocation
    const pos = await getPosition();
    const { latitude: lat, longitude: lng } = pos.coords;

    //Reverse Geocoding
    const resGeo = await fetch(`https://geocode.xyz/${lat},${lng}?geoit=json`);
    if (!resGeo.ok) throw new Error('Problem getting location data');
    const dataGeo = await resGeo.json();

    //Country data
    const res = await fetch(
      `https://restcountries.com/v3.1/name/${dataGeo.country}`
    );
    if (!res.ok) throw new Error('Problem getting country');
    const data = await res.json();
    console.log(data);
    renderCountry(data[0]);

    return `You are in ${dataGeo.city}, ${dataGeo.country} `;
  } catch (err) {
    console.error(err);
    renderError(`Something went wrong ${err.message}`);
    throw err;
  }
};
console.log('1: Getting location...');

// whereAmI()
//   .then(city => console.log(`2: ${city}`))
//   .catch(err => console.log(`2: ${err.message}`))
//   .finally(() => console.log('3: Finished getting location'));

(async function () {
  try {
    const city = await whereAmI();
    console.log(`2: ${city}`);
    console.log('3: Finished getting location');
  } catch (err) {
    console.log(`2: ${err.message}`);
  }
})();

// try {
//   let y = 1;
//   const x = 5;
//   x = 3;
// } catch (err) {
//   alert(err.message);
// }

// whereAmI();
// whereAmI();
// whereAmI();
// whereAmI();
// whereAmI();
// whereAmI();
// whereAmI();
// whereAmI();
