import insertHtml from './dom.js';

insertHtml();
const keyboard = document.querySelector('.keyboard');
if ('htmlKeyboard' in localStorage) {
  keyboard.innerHTML = localStorage.getItem('htmlKeyboard');
}
const textArea = document.querySelector('.text');
const keys = document.querySelectorAll('.key');
const caseDown = document.querySelectorAll('.caseDown');
const mute = document.querySelector('.AltRight');
const caps = document.querySelectorAll('.caps');
const shiftCaps = document.querySelectorAll('.shiftCaps');
const rus = document.querySelectorAll('.rus');
const eng = document.querySelectorAll('.eng');
const slider = document.querySelector('.slider');
const capsLockKey = document.querySelector('.caps_lock_key');
const languageBtn = document.querySelector('.win_key');
const ruKeySound = new Audio('https://www.fesliyanstudios.com/play-mp3/649');
const enKeySound = new Audio('https://www.fesliyanstudios.com/play-mp3/648');
const shiftKeySound = new Audio('https://www.fesliyanstudios.com/play-mp3/647');
const capsLockKeySound = new Audio(
  'https://www.fesliyanstudios.com/play-mp3/646'
);
const backspaceKeySound = new Audio(
  'https://www.fesliyanstudios.com/play-mp3/645'
);
const enterKeySound = new Audio('https://www.fesliyanstudios.com/play-mp3/644');

const playKey = () => {
  if (!eng[0].classList.contains('hidden')) {
    enKeySound.play();
  } else {
    ruKeySound.play();
  }
};

// Slider

slider.addEventListener('click', () => {
  keyboard.classList.toggle('keyboard_hidden');
});

// Mute

mute.addEventListener('click', () => {
  mute.classList.toggle('mute');
  mute.classList.toggle('active');
});

// CapsLock

const capsLock = () => {
  caseDown.forEach((element) => {
    element.classList.toggle('hidden');
  });
  caps.forEach((element) => {
    element.classList.toggle('hidden');
  });
};

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
    if (key.innerText === 'CapsLock') {
      if (!mute.classList.contains('mute')) {
        capsLockKeySound.play();
      }
      key.classList.toggle('active');
      capsLock();
    } else if (key.innerText === 'Shift') {
      if (!mute.classList.contains('mute')) {
        shiftKeySound.play();
      }
      key.classList.toggle('active');
      capsLock();
    } else if (key.innerText === 'Backspace') {
      if (!mute.classList.contains('mute')) {
        backspaceKeySound.play();
      }
      backspace();
    } else if (key.innerText === 'Enter') {
      if (!mute.classList.contains('mute')) {
        enterKeySound.play();
      }
      textArea.value += '\n';
    } else if (key.innerText === 'en' || key.innerText === 'ru') {
      playKey();
      return 1;
    } else if (key.innerText === '←' || key.innerText === '→') {
      playKey();
      arrowsHandler(key.innerText);
    } else if (key.innerText === '') {
      playKey();
      textArea.value += ' ';
    } else if (
      key.innerText === 'Tab' ||
      key.innerText === 'Ctrl' ||
      key.innerText === 'Alt' ||
      key.innerText === 'Del' ||
      key.innerText === 'Mute'
    ) {
      if (!mute.classList.contains('mute')) {
        playKey();
      }
    } else {
      if (!mute.classList.contains('mute')) {
        playKey();
      }
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
  } else if (
    !shiftCaps[0].classList.contains('hidden') &&
    event.shiftKey &&
    event.repeat === false
  ) {
    console.log('Hello');
  } else if (event.shiftKey && event.repeat === false) {
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

window.addEventListener('beforeunload', () => {
  const htmlKeyboard = keyboard.innerHTML;
  localStorage.setItem('htmlKeyboard', htmlKeyboard);
});

const id = 1;
if (
  (id >= 1 && id <= 12) ||
  (id >= 16 && id <= 27) ||
  (id >= 31 && id <= 41) ||
  (id >= 45 && id <= 54)
) {
  console.log('hello');
}
