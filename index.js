const Layout = [
  [
    ["Backquote", "ё", "Ё", "`", "~"],
    ["Digit1", "1", "!", "1", "!"],
    ["Digit2", "2", '"', "2", "@"],
    ["Digit3", "3", "№", "3", "#"],
    ["Digit4", "4", ";", "4", "$"],
    ["Digit5", "5", "%", "5", "%"],
    ["Digit6", "6", ":", "6", "^"],
    ["Digit7", "7", "?", "7", "&"],
    ["Digit8", "8", "*", "8", "*"],
    ["Digit9", "9", "(", "9", "("],
    ["Digit0", "0", ")", "0", ")"],
    ["Minus", "-", "_", "-", "_"],
    ["Equal", "=", "+", "=", "+"],
    ["Backspace", "Backspace", "Backspace", "Backspace", "Backspace"]
  ],
  [
    ["Tab", "Tab", "Tab", "Tab", "Tab"],
    ["KeyQ", "й", "Й", "q", "Q"],
    ["KeyW", "ц", "Ц", "w", "W"],
    ["KeyE", "у", "У", "e", "E"],
    ["KeyR", "к", "К", "r", "R"],
    ["KeyT", "е", "Е", "t", "T"],
    ["KeyY", "н", "Н", "y", "Y"],
    ["KeyU", "г", "Г", "u", "U"],
    ["KeyI", "ш", "Ш", "i", "I"],
    ["KeyO", "щ", "Щ", "o", "O"],
    ["KeyP", "з", "З", "p", "P"],
    ["BracketLeft", "х", "Х", "[", "{"],
    ["BracketRight", "ъ", "Ъ", "]", "}"],
    ["Backslash", "\\", "/", "\\", "|"],
    ["Delete", "Del", "Del", "Del", "Del"]
  ],
  [
    ["CapsLock","CapsLock","CapsLock","CapsLock","CapsLock","CapsLock"],
    ["KeyA", "ф", "Ф", "a", "A"],
    ["KeyS", "ы", "Ы", "s", "S"],
    ["KeyD", "в", "В", "d", "D"],
    ["KeyF", "а", "А", "f", "F"],
    ["KeyG", "п", "П", "g", "G"],
    ["KeyH", "р", "Р", "h", "H"],
    ["KeyJ", "о", "О", "j", "J"],
    ["KeyK", "л", "Л", "k", "K"],
    ["KeyL", "д", "Д", "l", "L"],
    ["Semicolon", "ж", "Ж", ";", ":"],
    ["Quote", "э", "Э", "'", '"'],
    ["Enter", "Enter", "Enter", "Enter", "Enter"]
  ],
  [
    ["ShiftLeft", "Shift", "Shift", "Shift", "Shift"],
    ["KeyZ", "я", "Я", "z", "Z"],
    ["KeyX", "ч", "Ч", "x", "X"],
    ["KeyC", "с", "С", "c", "C"],
    ["KeyV", "м", "М", "v", "V"],
    ["KeyB", "и", "И", "b", "B"],
    ["KeyN", "т", "Т", "n", "N"],
    ["KeyM", "ь", "Ь", "m", "M"],
    ["Comma", "б", "Б", ".", "<"],
    ["Period", "ю", "Ю", ",", ">"],
    ["Slash", ".", ",", "/", "?"],
    ["ArrowUp", "▲", "▲", "▲", "▲"],
    ["ShiftRight", "Shift", "Shift", "Shift", "Shift"]
  ],
  [
    ["ControlLeft", "Ctrl", "Ctrl", "Ctrl", "Ctrl"],
    ["Win", "Win", "Win", "Win", "Win"],
    ["AltLeft", "Alt", "Alt", "Alt", "Alt"],
    ["Space", " ", " ", " ", " "],
    ["AltRight", "Alt", "Alt", "Alt", "Alt"],
    ["ArrowLeft", "◄", "◄", "◄", "◄"],
    ["ArrowDown", "▼", "▼", "▼", "▼"],
    ["ArrowRight", "►", "►", "►", "►"],
    ["ControlRight", "Ctrl", "Ctrl", "Ctrl", "Ctrl"]
  ]
];

let wrapper = document.createElement('div');
let textarea = document.createElement('textarea');
let keyboard = document.createElement('div');

wrapper.className = "wrapper";
textarea.id = "result";
keyboard.className = "keyboard";

wrapper.append(textarea);
wrapper.append(keyboard);

for (var i = 0; i < Layout.length; i++) {
  var row = document.createElement('div');
  row.classList.add('row');
  for (var j = 0; j < Layout[i].length; j++) { 
    var key = document.createElement('div');
    key.classList.add('key');
    key.classList.add(Layout[i][j][0]);
    key.insertAdjacentHTML('afterBegin',
      `<div class="rus">
        <span class="caseDown ">${Layout[i][j][1]}</span>
        <span class="caseUp hidden">${Layout[i][j][2]}</span>
      </div>
      <div class="eng hidden">
        <span class="caseDown hidden">${Layout[i][j][3]}</span>
        <span class="caseUp hidden">${Layout[i][j][4]}</span>
      </div>`);
    row.appendChild(key);
  }
  keyboard.appendChild(row);
}

const addActive = (elem) => {
  elem.classList.add("active");
}

const removeActive = (elem) => {
  elem.classList.remove("active");
}

document.addEventListener("keydown", function(e) {
  let elem = keyboard.getElementsByClassName(e.code)[0];
  switch (e.code) {
    default:
      addActive(elem);
      textarea.value += elem.querySelectorAll(':not(.hidden)')[1].textContent;
      break;
  }
})

document.addEventListener("keyup", function(e) {
  let elem = keyboard.getElementsByClassName(e.code)[0];
  removeActive(elem);
})

document.body.append(wrapper);