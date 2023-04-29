import insertHtml from './dom.js';

insertHtml();
const textArea = document.querySelector('.text');
const keys = document.querySelectorAll('.key');
const caseDown = document.querySelectorAll('.caseDown');
const caseUp = document.querySelectorAll('.caseUp');
const rus = document.querySelectorAll('.rus');
const eng = document.querySelectorAll('.eng');
const slider = document.querySelector('.slider');
const keyboard = document.querySelector('.keyboard');

// Slider

slider.addEventListener('click', () => {
  keyboard.classList.toggle('keyboard_hidden');
});

// CapsLock

function capsLock() {
  caseDown.forEach((element) => {
    element.classList.toggle('hidden');
  });
  caseUp.forEach((element) => {
    element.classList.toggle('hidden');
  });
}

// Backspace
// TODO не получилось написать в одну строку, надо разобраться
const backspace = () => {
  const cursorPosition = textArea.selectionEnd;
  const split = textArea.value.split('');
  split.splice(cursorPosition - 1, 1);
  const join = split.join('');
  textArea.value = join;
  textArea.focus();
  textArea.selectionEnd = cursorPosition - 1;
  return 1;
};

// Ввод текста кликом мыши

keys.forEach((key) => {
  key.addEventListener('click', () => {
    if (key.innerText === 'CapsLock') {
      key.classList.toggle('active');
      capsLock();
    } else if (key.innerText === 'Backspace') {
      backspace();
      return 1;
    } else if (key.innerText === 'Enter') {
      textArea.value += '\n';
    } else if (key.innerText === '') {
      textArea.value += ' ';
    } else {
      textArea.value += key.innerText;
    }
    textArea.focus();
    return 1;
  });
});

// Анимация нажатия клавиш

document.addEventListener('keydown', (event) => {
  keys.forEach((key) => {
    textArea.focus();
    if (key.classList.contains(event.code)) {
      if (event.key === 'Tab' || event.key === 'Meta' || event.key === 'Alt') {
        event.preventDefault();
      }
      key.classList.toggle('active');
    }
  });
});

document.addEventListener('keyup', (event) => {
  keys.forEach((key) => {
    if (event.key === 'CapsLock') {
      capsLock();
      return;
    }
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
