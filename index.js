const Layout = [
  [
    ['Backquote', 'ё', 'Ё', '`', '~'],
    ['Digit1', '1', '!', '1', '!'],
    ['Digit2', '2', '\'', '2', '@'],
    ['Digit3', '3', '№', '3', '#'],
    ['Digit4', '4', ';', '4', '$'],
    ['Digit5', '5', '%', '5', '%'],
    ['Digit6', '6', ':', '6', '^'],
    ['Digit7', '7', '?', '7', '&'],
    ['Digit8', '8', '*', '8', '*'],
    ['Digit9', '9', '(', '9', '('],
    ['Digit0', '0', ')', '0', ')'],
    ['Minus', '-', '_', '-', '_'],
    ['Equal', '=', '+', '=', '+'],
    ['Backspace', 'Backspace', 'Backspace', 'Backspace', 'Backspace'],
  ],
  [
    ['Tab', 'Tab', 'Tab', 'Tab', 'Tab'],
    ['KeyQ', 'й', 'Й', 'q', 'Q'],
    ['KeyW', 'ц', 'Ц', 'w', 'W'],
    ['KeyE', 'у', 'У', 'e', 'E'],
    ['KeyR', 'к', 'К', 'r', 'R'],
    ['KeyT', 'е', 'Е', 't', 'T'],
    ['KeyY', 'н', 'Н', 'y', 'Y'],
    ['KeyU', 'г', 'Г', 'u', 'U'],
    ['KeyI', 'ш', 'Ш', 'i', 'I'],
    ['KeyO', 'щ', 'Щ', 'o', 'O'],
    ['KeyP', 'з', 'З', 'p', 'P'],
    ['BracketLeft', 'х', 'Х', '[', '{'],
    ['BracketRight', 'ъ', 'Ъ', ']', '}'],
    ['Backslash', '\\', '/', '\\', '|'],
    ['Delete', 'Del', 'Del', 'Del', 'Del'],
  ],
  [
    ['CapsLock', 'CapsLock', 'CapsLock', 'CapsLock', 'CapsLock', 'CapsLock'],
    ['KeyA', 'ф', 'Ф', 'a', 'A'],
    ['KeyS', 'ы', 'Ы', 's', 'S'],
    ['KeyD', 'в', 'В', 'd', 'D'],
    ['KeyF', 'а', 'А', 'f', 'F'],
    ['KeyG', 'п', 'П', 'g', 'G'],
    ['KeyH', 'р', 'Р', 'h', 'H'],
    ['KeyJ', 'о', 'О', 'j', 'J'],
    ['KeyK', 'л', 'Л', 'k', 'K'],
    ['KeyL', 'д', 'Д', 'l', 'L'],
    ['Semicolon', 'ж', 'Ж', ';', ':'],
    ['Quote', 'э', 'Э', '\'', '\''],
    ['Enter', 'Enter', 'Enter', 'Enter', 'Enter'],
  ],
  [
    ['ShiftLeft', 'Shift', 'Shift', 'Shift', 'Shift'],
    ['KeyZ', 'я', 'Я', 'z', 'Z'],
    ['KeyX', 'ч', 'Ч', 'x', 'X'],
    ['KeyC', 'с', 'С', 'c', 'C'],
    ['KeyV', 'м', 'М', 'v', 'V'],
    ['KeyB', 'и', 'И', 'b', 'B'],
    ['KeyN', 'т', 'Т', 'n', 'N'],
    ['KeyM', 'ь', 'Ь', 'm', 'M'],
    ['Comma', 'б', 'Б', '.', '<'],
    ['Period', 'ю', 'Ю', ',', '>'],
    ['Slash', '.', ',', '/', '?'],
    ['ArrowUp', '▲', '▲', '▲', '▲'],
    ['ShiftRight', 'Shift', 'Shift', 'Shift', 'Shift'],
  ],
  [
    ['ControlLeft', 'Ctrl', 'Ctrl', 'Ctrl', 'Ctrl'],
    ['MetaLeft', 'Win', 'Win', 'Win', 'Win'],
    ['AltLeft', 'Alt', 'Alt', 'Alt', 'Alt'],
    ['Space', ' ', ' ', ' ', ' '],
    ['AltRight', 'Alt', 'Alt', 'Alt', 'Alt'],
    ['ArrowLeft', '◄', '◄', '◄', '◄'],
    ['ArrowDown', '▼', '▼', '▼', '▼'],
    ['ArrowRight', '►', '►', '►', '►'],
    ['ControlRight', 'Ctrl', 'Ctrl', 'Ctrl', 'Ctrl'],
  ],
];

const wrapper = document.createElement('div');
const textarea = document.createElement('textarea');
const keyboard = document.createElement('div');
let lang = 'rus';
let capslock = false;

wrapper.className = 'wrapper';
textarea.id = 'result';
keyboard.className = 'keyboard';

wrapper.append(textarea);
wrapper.append(keyboard);

for (let i = 0; i < Layout.length; i += 1) {
  const row = document.createElement('div');
  row.classList.add('row');
  for (let j = 0; j < Layout[i].length; j += 1) {
    const key = document.createElement('div');
    key.classList.add('key');
    key.classList.add(Layout[i][j][0]);
    key.insertAdjacentHTML('afterBegin',
      `<div class='rus'>
        <span class='caseDown '>${Layout[i][j][1]}</span>
        <span class='caseUp hidden'>${Layout[i][j][2]}</span>
      </div>
      <div class='eng hidden'>
        <span class='caseDown hidden'>${Layout[i][j][3]}</span>
        <span class='caseUp hidden'>${Layout[i][j][4]}</span>
      </div>`);
    row.appendChild(key);
  }
  keyboard.appendChild(row);
}

function throttle(func, milliseconds) {
  var lastCall = 0;
  return function () {
      var now = Date.now();
      if (lastCall + milliseconds < now) {
          lastCall = now;
          return func.apply(this, arguments);
      }
  };
}

const addActive = (elem) => {
  elem.classList.add('active');
};

const removeActive = (elem) => {
  elem.classList.remove('active');
};

const changeCase = () => {
  const langElem = keyboard.querySelectorAll(`div > .${lang}`);
  for (let i = 0; i < langElem.length; i += 1) {
    langElem[i].querySelectorAll('span')[0].classList.toggle('hidden');
    langElem[i].querySelectorAll('span')[1].classList.toggle('hidden');
  }
};

const changeLang = () => {
  const prevLang = keyboard.querySelectorAll(`div > .${lang}`);
  for (let i = 0; i < prevLang.length; i += 1) {
    prevLang[i].classList.toggle('hidden');
    prevLang[i].querySelectorAll('span')[0].classList.toggle('hidden');
  }
  if (lang === 'rus') {
    lang = 'eng';
    localStorage.setItem('lang', lang);
  } else {
    lang = 'rus';
    localStorage.setItem('lang', lang);
  }
  const nextLang = keyboard.querySelectorAll(`div > .${lang}`);
  for (let i = 0; i < nextLang.length; i += 1) {
    nextLang[i].classList.toggle('hidden');
    nextLang[i].querySelectorAll('span')[0].classList.toggle('hidden');
  }
};

if (localStorage.lang === 'eng') {
  changeLang();
}

textarea.addEventListener('keydown', (e) => {
  e.preventDefault();
});

document.addEventListener('keydown', throttle((e) => {
  const elem = keyboard.getElementsByClassName(e.code)[0];
  if (e.altKey && e.ctrlKey && (e.keyCode === 18 || e.keyCode === 17)) {
    addActive(elem);
    changeLang();
    return false;
  }
  switch (e.code) {
    case 'MetaLeft':
      break;
    case 'Tab':
      e.preventDefault();
      addActive(elem);
      textarea.value += '    ';
      break;
    case 'Enter':
      e.preventDefault();
      addActive(elem);
      textarea.value += '\n';
      break;
    case 'CapsLock':
      if (capslock) {
        removeActive(elem);
        capslock = false;
      } else {
        addActive(elem);
        capslock = true;
      }
      e.preventDefault();
      changeCase();
      break;
    case 'Backspace':
      textarea.value = textarea.value.substr(0, textarea.value.length - 1);
      addActive(elem);
      break;
    case 'Delete':
      e.preventDefault();
      addActive(elem);
      break;
    case 'AltLeft':
    case 'AltRight':
      e.preventDefault();
      addActive(elem);
      break;
    case 'ControlLeft':
    case 'ControlRight':
      e.preventDefault();
      addActive(elem);
      break;
    case 'ShiftLeft':
    case 'ShiftRight':
      e.preventDefault();
      addActive(elem);
      changeCase();
      break;
    default:
      addActive(elem);
      textarea.value += elem.querySelectorAll(':not(.hidden)')[1].textContent;
      break;
  }
}, 10));

document.addEventListener('keyup', (e) => {
  const elem = keyboard.getElementsByClassName(e.code)[0];
  switch (e.code) {
    case 'ShiftLeft':
    case 'ShiftRight':
      e.preventDefault();
      removeActive(elem);
      changeCase();
      break;
    case 'CapsLock':
      break;
    default:
      removeActive(elem);
      break;
  }
});

keyboard.addEventListener('mousedown', (e) => {
  if (e.target.tagName === 'SPAN') {
    const elem = e.target.closest('.key');
    switch (elem.classList[1]) {
      case 'Tab':
        e.preventDefault();
        addActive(elem);
        textarea.value += '    ';
        break;
      case 'Enter':
        e.preventDefault();
        addActive(elem);
        textarea.value += '\n';
        break;
      case 'Backspace':
        textarea.value = textarea.value.substr(0, textarea.value.length - 1);
        addActive(elem);
        break;
      case 'CapsLock':
        e.preventDefault();
        if (capslock) {
          removeActive(e.target.closest('.key'));
          capslock = false;
        } else {
          addActive(e.target.closest('.key'));
          capslock = true;
        }
        changeCase();
        break;
      case 'Delete':
        e.preventDefault();
        addActive(elem);
        break;
      case 'AltLeft':
      case 'AltRight':
        e.preventDefault();
        addActive(elem);
        break;
      case 'ControlLeft':
      case 'ControlRight':
        e.preventDefault();
        addActive(elem);
        break;
      case 'ShiftLeft':
      case 'ShiftRight':
        e.preventDefault();
        addActive(elem);
        changeCase();
        break;
      default:
        addActive(elem);
        textarea.value += elem.querySelectorAll(':not(.hidden)')[1].textContent;
        break;
    }
  } else {
    e.preventDefault();
  }
});

keyboard.addEventListener('mouseup', (e) => {
  const elem = e.target.closest('.key');
  switch (elem.classList[1]) {
    case 'ShiftLeft':
    case 'ShiftRight':
      e.preventDefault();
      removeActive(elem);
      changeCase();
      break;
    case 'CapsLock':
      e.preventDefault();
      if (capslock !== true) {
        removeActive(e.target.closest('.key'));
      } else {
        addActive(e.target.closest('.key'));
      }
      break;
    default:
      removeActive(elem);
      break;
  }
});

keyboard.addEventListener('contextmenu', (e) => {
  e.preventDefault();
});

keyboard.addEventListener('dblclick', (e) => {
  e.preventDefault();
});

document.body.append(wrapper);
