const search = document.querySelector('.head__form');
const body = document.querySelector('body');

search.addEventListener('click', function (e) {
  e.stopPropagation();
  document.querySelector('#head-input').classList.add('is-active');
});

search.addEventListener('click', function (e) {
  e.stopPropagation();
  document.querySelector('#head-search-btn').classList.add('is-visible');
});

search.addEventListener('click', function (e) {
  e.stopPropagation();
  document.querySelector('#head-search-icon').classList.add('is-hidden');
});

body.addEventListener('click', function () {
  document.querySelector('#head-input').classList.remove('is-active');
});