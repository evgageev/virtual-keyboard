import insertHtml from './dom.js';

insertHtml();
const textArea = document.querySelector('.text');
const keys = document.querySelectorAll('.key');
const caseDown = document.querySelectorAll('.caseDown');
const caseUp = document.querySelectorAll('.caseUp');
const caps = document.querySelectorAll('.caps');
const shiftCaps = document.querySelectorAll('.shiftCaps');
const rus = document.querySelectorAll('.rus');
const eng = document.querySelectorAll('.eng');
const slider = document.querySelector('.slider');
const keyboard = document.querySelector('.keyboard');
const capsLockKey = document.querySelector('.caps_lock_key');
const languageBtn = document.querySelector('.win_key');

// Slider

slider.addEventListener('click', () => {
  keyboard.classList.toggle('keyboard_hidden');
});

// CapsLock

function capsLock() {
  caseDown.forEach((element) => {
    element.classList.toggle('hidden');
  });
  caps.forEach((element) => {
    element.classList.toggle('hidden');
  });
}

// Backspace
const backspace = () => {
  const cursorPosition = textArea.selectionEnd;
  const split = textArea.value.split('');
  split.splice(cursorPosition - 1, 1);
  const join = split.join('');
  textArea.value = join;
  textArea.focus();
  textArea.selectionEnd = cursorPosition - 1;
};

// Вставка текста при клике мышкой
const insertText = (text) => {
  const cursorPosition = textArea.selectionEnd;
  const split = textArea.value.split('');
  split.splice(cursorPosition, 0, text);
  const join = split.join('');
  textArea.value = join;
  textArea.focus();
  textArea.selectionEnd = cursorPosition + 1;
};

// Стрелки влево/вправо

const arrowsHandler = (arrow) => {
  if (arrow === '←') {
    const cursorPosition = textArea.selectionEnd;
    textArea.selectionEnd = cursorPosition - 1;
  } else {
    const cursorPosition = textArea.selectionStart;
    textArea.selectionStart = cursorPosition + 1;
  }
  textArea.focus();
};

// Ввод текста кликом мыши

keys.forEach((key) => {
  key.addEventListener('click', () => {
    if (key.innerText === 'CapsLock' || key.innerText === 'Shift') {
      key.classList.toggle('active');
      capsLock();
    } else if (key.innerText === 'Backspace') {
      backspace();
    } else if (key.innerText === 'Enter') {
      textArea.value += '\n';
    } else if (key.innerText === 'en' || key.innerText === 'ru') {
      return 1;
    } else if (key.innerText === '←' || key.innerText === '→') {
      arrowsHandler(key.innerText);
    } else if (key.innerText === '') {
      textArea.value += ' ';
    } else if (
      key.innerText === 'Tab' ||
      key.innerText === 'Ctrl' ||
      key.innerText === 'Alt' ||
      key.innerText === 'Del'
    ) {
      return 1;
    } else {
      insertText(key.innerText);
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
      if (event.key === 'CapsLock') {
        capsLockKey.classList.toggle('active');
      } else {
        key.classList.add('active');
      }
    }
  });
});

document.addEventListener('keyup', (event) => {
  keys.forEach((key) => {
    if (event.key === 'CapsLock') {
      capsLock();
    } else if (key.classList.contains(event.code)) {
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

languageBtn.addEventListener('click', () => {
  rus.forEach((element) => {
    element.classList.toggle('hidden');
  });
  eng.forEach((element) => {
    element.classList.toggle('hidden');
  });
  caseDown.forEach((element) => {
    element.classList.toggle('hidden');
  });
});

// Обработка зажатого shift

document.addEventListener('keydown', (event) => {
  if (!caps[0].classList.contains('hidden') && event.shiftKey) {
    // Если caps нажат и зажимается shift
    caps.forEach((element) => {
      element.classList.add('hidden');
    });
    shiftCaps.forEach((element) => {
      element.classList.remove('hidden');
    });
  } else if (event.shiftKey && event.repeat === false) {
    console.log(event.repeat);
    if (rus[0].classList.contains('hidden')) {
      eng.forEach((element) => {
        if (element.childNodes[0].nodeType === 3) {
          element.childNodes[1].classList.add('hidden');
          element.childNodes[3].classList.remove('hidden');
        } else {
          element.childNodes[0].classList.add('hidden');
          element.childNodes[2].classList.remove('hidden');
        }
      });
    } else {
      rus.forEach((element) => {
        if (element.childNodes[0].nodeType === 3) {
          element.childNodes[1].classList.add('hidden');
          element.childNodes[3].classList.remove('hidden');
        } else {
          element.childNodes[0].classList.add('hidden');
          element.childNodes[2].classList.remove('hidden');
        }
      });
    }
  }
});

document.addEventListener('keyup', (event) => {
  if (!shiftCaps[0].classList.contains('hidden') && event.key === 'Shift') {
    caps.forEach((element) => {
      element.classList.remove('hidden');
    });
    shiftCaps.forEach((element) => {
      element.classList.add('hidden');
    });
  } else if (event.key === 'Shift') {
    if (rus[0].classList.contains('hidden')) {
      eng.forEach((element) => {
        if (element.childNodes[0].nodeType === 3) {
          element.childNodes[1].classList.remove('hidden');
          element.childNodes[3].classList.add('hidden');
        } else {
          element.childNodes[0].classList.remove('hidden');
          element.childNodes[2].classList.add('hidden');
        }
      });
    } else {
      rus.forEach((element) => {
        if (element.childNodes[0].nodeType === 3) {
          element.childNodes[1].classList.remove('hidden');
          element.childNodes[3].classList.add('hidden');
        } else {
          element.childNodes[0].classList.remove('hidden');
          element.childNodes[2].classList.add('hidden');
        }
      });
    }
  }
});
