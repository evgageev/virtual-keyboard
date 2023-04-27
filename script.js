import { insertHtml } from './html.js';
insertHtml();
const body = document.querySelector('body');
const keys = document.querySelectorAll('.key');
const spaceKey = document.querySelector('.space_key');
const shiftLeft = document.querySelector('.shift_left');
const shiftRight = document.querySelector('.shift_right');
const capsLock = document.querySelector('.caps_lock_key');
const shiftKey = document.querySelectorAll('.shift_key');
const caseDown = document.querySelectorAll('.caseDown');
const caseUp = document.querySelectorAll('.caseUp');
const rus = document.querySelectorAll('.rus');
const eng = document.querySelectorAll('.eng');

// Переключение языка

document.addEventListener('keydown', (event) => {
  if (event.ctrlKey && event.altKey) {
    rus.forEach((element) => {
      element.classList.toggle('hidden');
    });
    eng.forEach((element) => {
      element.classList.toggle('hidden');
    });
    caseDown.forEach((element) => {
      element.classList.toggle('hidden');
    });
  }
});

// Обработка зажатого shift

document.addEventListener('keydown', (event) => {
  if (event.code === 'ShiftLeft' || event.code === 'ShiftRight') {
    caseDown.forEach((element) => {
      element.classList.add('hidden');
    });
    caseUp.forEach((element) => {
      element.classList.remove('hidden');
    });
  }
});

document.addEventListener('keyup', (event) => {
  if (event.code === 'ShiftLeft' || event.code === 'ShiftRight') {
    caseDown.forEach((element) => {
      element.classList.remove('hidden');
    });
    caseUp.forEach((element) => {
      element.classList.add('hidden');
    });
  }
});
