import insertHtml from './dom.js';

insertHtml();
const textArea = document.querySelector('.text');
const keys = document.querySelectorAll('.key');
const caseDown = document.querySelectorAll('.caseDown');
const caseUp = document.querySelectorAll('.caseUp');
const rus = document.querySelectorAll('.rus');
const eng = document.querySelectorAll('.eng');

// CapsLock

function CapsLock() {
  caseDown.forEach((element) => {
    element.classList.toggle('hidden');
  });
  caseUp.forEach((element) => {
    element.classList.toggle('hidden');
  });
}

// Ввод текста кликом мыши
// TODO удаляется послений символ, а нужно удалять поред курсором

keys.forEach((key) => {
  key.addEventListener('click', () => {
    if (key.innerText === 'CapsLock') {
      CapsLock();
    } else if (key.innerText === '') {
      textArea.value += ' ';
    } else {
      textArea.value += key.innerText;
      textArea.focus();
    }
  });
});

// Backspace

// else if (key.innerText === 'Backspace') {
//   textArea.value = textArea.value.slice(0, -1);
//   textArea.focus();
//   return;
// }

// Анимация нажатия клавиш

document.addEventListener('keydown', (event) => {
  keys.forEach((key) => {
    textArea.focus();
    if (key.classList.contains(event.code)) {
      if (event.key === 'Tab' || event.key === 'Meta' || event.key === 'Alt') {
        event.preventDefault();
      }
      key.classList.add('active');
    }
  });
});

document.addEventListener('keyup', (event) => {
  keys.forEach((key) => {
    if (key.classList.contains(event.code)) {
      key.classList.remove('active');
    }
  });
});

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
