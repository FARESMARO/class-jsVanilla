'use strict';
const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.close-modal');
const btnShowModal = document.querySelectorAll('.show-modal');
console.log(btnShowModal);
const CloseModal = () => {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};
const AddModal = () => {
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};
for (let i = 0; i < btnShowModal.length; i++) {
  btnShowModal[i].addEventListener('click', AddModal);
  btnCloseModal.addEventListener('click', CloseModal);
  overlay.addEventListener('click', CloseModal);
}
document.addEventListener('keydown', function (e) {
  console.log(e.key);
  if (e.key === 'Enter' && modal.classList.contains('hidden')) {
    AddModal();
  } else {
    CloseModal();
  }
});
