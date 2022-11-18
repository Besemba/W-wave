const headPopup = document.querySelector('#head-popup');
const headPopupClose = document.querySelector('.head-popup__close');
const headPopupButtons = document.querySelectorAll('.open-popup-header');

for (let i = 0; i < headPopupButtons.length; i++) {
  headPopupButtons[i].addEventListener('click', function () {
    headPopup.style.display = 'flex';
  });
}

headPopup.addEventListener('click', function (event) {
  if (event.target == headPopup) {
    headPopup.style.display = 'none';
  }
});

headPopupClose.addEventListener('click', function () {
  headPopup.style.display = 'none';
});

const advertPopup = document.querySelector('#advert-popup');
const advertPopupClose = document.querySelector('.advert-popup__close');
const advertPopupButtons = document.querySelectorAll('.open-popup-advert');

for (let i = 0; i < advertPopupButtons.length; i++) {
  advertPopupButtons[i].addEventListener('click', function () {
    advertPopup.style.display = 'flex';
  });
}

advertPopup.addEventListener('click', function (event) {
  if (event.target == advertPopup) {
    advertPopup.style.display = 'none';
  }
});

advertPopupClose.addEventListener('click', function () {
  advertPopup.style.display = 'none';
});
