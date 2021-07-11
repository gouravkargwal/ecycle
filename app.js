'use strict mode'

const navSlide = () => {
  const burger = document.querySelector('.burger');
  const nav = document.querySelector('.nav_items');
  const navitems = document.querySelectorAll('.nav_items li');

  burger.addEventListener('click', () => {
    //for toggle
    nav.classList.toggle('nav-active');
    //for animating links
    navitems.forEach((link, index) => {
      if (link.style.animation) {
        link.style.animation = '';
      }
      else {
        link.style.animation = `navitemfade 0.5s ease forwards`;
      }
    });
    //burger animation
    burger.classList.toggle('toggle');

  });

}

const btn = document.querySelector('#find__me--btn');
console.log(btn);

const defaultCoords = [26.8640, 75.8108];
let map;
const getPosition = function (coords, text = `Welcome to MNIT! 👋`) {
  map = new L.map('map').setView(coords, 15);
  L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
  }).addTo(map);

  L.marker(coords).addTo(map)
    .bindPopup(text)
    .openPopup();
}

const getCoords = function () {
  if (!navigator.geolocation) alert('Could not get location')

  navigator.geolocation.getCurrentPosition(position => {
    console.log(position.coords);
    const { latitude, longitude } = position.coords;
    console.log(latitude, longitude);
    const coords = [latitude, longitude];
    console.log(coords);
    map.off();
    map.remove();
    getPosition(coords, `I'am here`);
  })

}

getPosition(defaultCoords);
btn.addEventListener('click', getCoords);

const swiper = new Swiper('.swiper-container', {
  // Optional parameters
  direction: 'horizontal',
  loop: true,


  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
  },

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

});