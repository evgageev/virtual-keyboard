export default function insertHtml() {
  const body = document.querySelector('body');
  const html = `
  <div class="container">
    <textarea class="text"></textarea>
    <div class="keyboard">
      <div class="keyboard__row">
        <div class="key Backquote">
          <span class="eng">
            <span class="caseDown">&grave;</span>
            <span class="caseUp hidden">~</span>
            <span class="caps hidden">&grave;</span>
            <span class="shiftCaps hidden">~</span>
          </span>
          <span class="rus hidden">
            <span class="caseDown hidden">ё</span>
            <span class="caseUp hidden">Ё</span>
            <span class="caps hidden">Ё</span>
            <span class="shiftCaps hidden">ё</span>
          </span>
        </div>
        <div class="key Digit1">
          <span class="rus hidden">
            <span class="caseDown hidden">1</span>
            <span class="caseUp hidden">!</span>
            <span class="caps hidden">1</span>
            <span class="shiftCaps hidden">!</span>
          </span><span class="eng">
            <span class="caseDown">1</span>
            <span class="caseUp hidden">!</span>
            <span class="caps hidden">1</span>
            <span class="shiftCaps hidden">!</span>
          </span>
        </div>
        <div class="key Digit2">
          <span class="rus hidden">
            <span class="caseDown hidden">2</span>
            <span class="caseUp hidden">"</span>
            <span class="caps hidden">2</span>
            <span class="shiftCaps hidden">"</span>
          </span>
          <span class="eng">
            <span class="caseDown">2</span>
            <span class="caseUp hidden">@</span>
            <span class="caps hidden">2</span>
            <span class="shiftCaps hidden">@</span>
          </span>
        </div>
        <div class="key Digit3">
          <span class="rus hidden">
            <span class="caseDown hidden">3</span>
            <span class="caseUp hidden">№</span>
            <span class="caps hidden">3</span>
            <span class="shiftCaps hidden">№</span>
          </span>
          <span class="eng">
            <span class="caseDown">3</span>
            <span class="caseUp hidden">#</span>
            <span class="caps hidden">3</span>
            <span class="shiftCaps hidden">#</span>
          </span>
        </div>
        <div class="key Digit4">
          <span class="rus hidden">
            <span class="caseDown hidden">4</span>
            <span class="caseUp hidden">;</span>
            <span class="caps hidden">4</span>
            <span class="shiftCaps hidden">;</span>
          </span>
          <span class="eng">
            <span class="caseDown">4</span>
            <span class="caseUp hidden">$</span>
            <span class="caps hidden">4</span>
            <span class="shiftCaps hidden">$</span>
          </span>
        </div>
        <div class="key Digit5">
          <span class="rus hidden">
            <span class="caseDown hidden">5</span>
            <span class="caseUp hidden">%</span>
            <span class="caps hidden">5</span>
            <span class="shiftCaps hidden">%</span>
          </span>
          <span class="eng">
            <span class="caseDown">5</span>
            <span class="caseUp hidden">%</span>
            <span class="caps hidden">5</span>
            <span class="shiftCaps hidden">%</span>
          </span>
        </div>
        <div class="key Digit6">
          <span class="rus hidden">
            <span class="caseDown hidden">6</span>
            <span class="caseUp hidden">:</span>
            <span class="caps hidden">6</span>
            <span class="shiftCaps hidden">:</span>
          </span>
          <span class="eng">
            <span class="caseDown">6</span>
            <span class="caseUp hidden">^</span>
            <span class="caps hidden">6</span>
            <span class="shiftCaps hidden">^</span>
          </span>
        </div>
        <div class="key Digit7">
          <span class="rus hidden">
            <span class="caseDown hidden">7</span>
            <span class="caseUp hidden">?</span>
            <span class="caps hidden">7</span>
            <span class="shiftCaps hidden">?</span>
          </span>
          <span class="eng">
            <span class="caseDown">7</span>
            <span class="caseUp hidden">&amp;</span>
            <span class="caps hidden">7</span>
            <span class="shiftCaps hidden">&amp;</span>
          </span>
        </div>
        <div class="key Digit8">
          <span class="rus hidden">
            <span class="caseDown hidden">8</span>
            <span class="caseUp hidden">*</span>
            <span class="caps hidden">8</span>
            <span class="shiftCaps hidden">*</span></span>
          <span class="eng">
            <span class="caseDown">8</span>
            <span class="caseUp hidden">*</span>
            <span class="caps hidden">8</span>
            <span class="shiftCaps hidden">*</span>
          </span>
        </div>
        <div class="key Digit9">
          <span class="rus hidden">
            <span class="caseDown hidden">9</span>
            <span class="caseUp hidden">&lpar;</span>
            <span class="caps hidden">9</span>
            <span class="shiftCaps hidden">&lpar;</span>
          </span>
          <span class="eng">
            <span class="caseDown">9</span>
            <span class="caseUp hidden">&lpar;</span>
            <span class="caps hidden">9</span>
            <span class="shiftCaps hidden">&lpar;</span>
          </span>
        </div>
        <div class="key Digit0">
          <span class="rus hidden">
            <span class="caseDown hidden">0</span>
            <span class="caseUp hidden">&rpar;</span>
            <span class="caps hidden">0</span>
            <span class="shiftCaps hidden">&rpar;</span>
          </span>
          <span class="eng">
            <span class="caseDown">0</span>
            <span class="caseUp hidden">&rpar;</span>
            <span class="caps hidden">0</span>
            <span class="shiftCaps hidden">&rpar;</span>
          </span>
        </div>
        <div class="key Minus">
          <span class="rus hidden">
            <span class="caseDown hidden">-</span>
            <span class="caseUp hidden">_</span>
            <span class="caps hidden">-</span>
            <span class="shiftCaps hidden">_</span>
          </span>
          <span class="eng"><span class="caseDown">-</span>
            <span class="caseUp hidden">_</span>
            <span class="caps hidden">-</span>
            <span class="shiftCaps hidden">_</span>
          </span>
        </div>
        <div class="key Equal">
          <span class="rus hidden">
            <span class="caseDown hidden">=</span>
            <span class="caseUp hidden">+</span>
            <span class="caps hidden">=</span>
            <span class="shiftCaps hidden">+</span>
          </span>
          <span class="eng">
            <span class="caseDown">=</span>
            <span class="caseUp hidden">+</span>
            <span class="caps hidden">=</span>
            <span class="shiftCaps hidden">+</span>
          </span>
        </div>
        <div class="key backspace_key Backspace">Backspace</div>
      </div>
      <div class="keyboard__row">
        <div class="key tab_key Tab">Tab</div>
        <div class="key KeyQ">
          <span class="eng">
            <span class="caseDown">q</span>
            <span class="caseUp hidden">Q</span>
            <span class="caps hidden">Q</span>
            <span class="shiftCaps hidden">q</span>
          </span>
          <span class="rus hidden">
            <span class="caseDown hidden">й</span>
            <span class="caseUp hidden">Й</span>
            <span class="caps hidden">Й</span>
            <span class="shiftCaps hidden">й</span>
          </span>
        </div>
        <div class="key KeyW">
          <span class="eng">
            <span class="caseDown">w</span>
            <span class="caseUp hidden">W</span>
            <span class="caps hidden">W</span>
            <span class="shiftCaps hidden">w</span>
          </span>
          <span class="rus hidden">
            <span class="caseDown hidden">ц</span>
            <span class="caseUp hidden">Ц</span>
            <span class="caps hidden">Ц</span>
            <span class="shiftCaps hidden">ц</span>
          </span>
        </div>
        <div class="key KeyE">
          <span class="rus hidden">
            <span class="caseDown hidden">у</span>
            <span class="caseUp hidden">У</span>
            <span class="caps hidden">У</span>
            <span class="shiftCaps hidden">у</span>
          </span>
          <span class="eng">
            <span class="caseDown">e</span>
            <span class="caseUp hidden">E</span>
            <span class="caps hidden">E</span>
            <span class="shiftCaps hidden">e</span>
          </span>
        </div>
        <div class="key KeyR">
          <span class="rus hidden">
            <span class="caseDown hidden">к</span>
            <span class="caseUp hidden">К</span>
            <span class="caps hidden">К</span>
            <span class="shiftCaps hidden">к</span>
          </span>
          <span class="eng">
            <span class="caseDown">r</span>
            <span class="caseUp hidden">R</span>
            <span class="caps hidden">R</span>
            <span class="shiftCaps hidden">r</span>
          </span>
        </div>
        <div class="key KeyT">
          <span class="rus hidden">
            <span class="caseDown hidden">е</span>
            <span class="caseUp hidden">Е</span>
            <span class="caps hidden">Е</span>
            <span class="shiftCaps hidden">е</span></span>
          <span class="eng">
            <span class="caseDown">t</span>
            <span class="caseUp hidden">T</span>
            <span class="caps hidden">T</span>
            <span class="shiftCaps hidden">t</span>
          </span>
        </div>
        <div class="key KeyY">
          <span class="rus hidden">
            <span class="caseDown hidden">н</span>
            <span class="caseUp hidden">Н</span>
            <span class="caps hidden">Н</span>
            <span class="shiftCaps hidden">н</span>
          </span>
          <span class="eng">
            <span class="caseDown">y</span>
            <span class="caseUp hidden">Y</span>
            <span class="caps hidden">Y</span>
            <span class="shiftCaps hidden">y</span>
          </span>
        </div>
        <div class="key KeyU">
          <span class="rus hidden">
            <span class="caseDown hidden">г</span>
            <span class="caseUp hidden">Г</span>
            <span class="caps hidden">Г</span>
            <span class="shiftCaps hidden">г</span>
          </span>
          <span class="eng">
            <span class="caseDown">u</span>
            <span class="caseUp hidden">U</span>
            <span class="caps hidden">U</span>
            <span class="shiftCaps hidden">u</span>
          </span>
        </div>
        <div class="key KeyI">
          <span class="rus hidden">
            <span class="caseDown hidden">ш</span>
            <span class="caseUp hidden">Ш</span>
            <span class="caps hidden">Ш</span>
            <span class="shiftCaps hidden">ш</span>
          </span>
          <span class="eng">
            <span class="caseDown">i</span>
            <span class="caseUp hidden">I</span>
            <span class="caps hidden">I</span>
            <span class="shiftCaps hidden">i</span>
          </span>
        </div>
        <div class="key KeyO">
          <span class="rus hidden">
            <span class="caseDown hidden">щ</span>
            <span class="caseUp hidden">Щ</span>
            <span class="caps hidden">Щ</span>
            <span class="shiftCaps hidden">щ</span>
          </span>
          <span class="eng">
            <span class="caseDown">o</span>
            <span class="caseUp hidden">O</span>
            <span class="caps hidden">O</span>
            <span class="shiftCaps hidden">o</span>
          </span>
        </div>
        <div class="key KeyP">
          <span class="rus hidden">
            <span class="caseDown hidden">з</span>
            <span class="caseUp hidden">З</span>
            <span class="caps hidden">З</span>
            <span class="shiftCaps hidden">з</span>
          </span>
          <span class="eng">
            <span class="caseDown">p</span>
            <span class="caseUp hidden">P</span>
            <span class="caps hidden">P</span>
            <span class="shiftCaps hidden">p</span>
          </span>
        </div>
        <div class="key BracketLeft">
          <span class="rus hidden"><span class="caseDown hidden">х</span>
            <span class="caseUp hidden">Х</span>
            <span class="caps hidden">Х</span>
            <span class="shiftCaps hidden">х</span>
          </span>
          <span class="eng">
            <span class="caseDown">[</span>
            <span class="caseUp hidden">{</span>
            <span class="caps hidden">[</span>
            <span class="shiftCaps hidden">{</span>
          </span>
        </div>
        <div class="key BracketRight">
          <span class="rus hidden"><span class="caseDown hidden">ъ</span>
            <span class="caseUp hidden">Ъ</span>
            <span class="caps hidden">Ъ</span>
            <span class="shiftCaps hidden">ъ</span></span>
          <span class="eng">
            <span class="caseDown">]</span>
            <span class="caseUp hidden">}</span>
            <span class="caps hidden">]</span>
            <span class="shiftCaps hidden">}</span>
          </span>
        </div>
        <div class="key del_key Delete">Del</div>
      </div>
      <div class="keyboard__row">
        <div class="key caps_lock_key CapsLock">CapsLock</div>
        <div class="key KeyA">
          <span class="rus hidden">
            <span class="caseDown hidden">ф</span>
            <span class="caseUp hidden">Ф</span>
            <span class="caps hidden">Ф</span>
            <span class="shiftCaps hidden">ф</span></span>
          <span class="eng">
            <span class="caseDown">a</span>
            <span class="caseUp hidden">A</span>
            <span class="caps hidden">A</span>
            <span class="shiftCaps hidden">a</span>
          </span>
        </div>
        <div class="key KeyS">
          <span class="rus hidden">
            <span class="caseDown hidden">ы</span>
            <span class="caseUp hidden">Ы</span>
            <span class="caps hidden">Ы</span>
            <span class="shiftCaps hidden">ы</span>
          </span>
          <span class="eng">
            <span class="caseDown">s</span>
            <span class="caseUp hidden">S</span>
            <span class="caps hidden">S</span>
            <span class="shiftCaps hidden">s</span>
          </span>
        </div>
        <div class="key KeyD">
          <span class="rus hidden">
            <span class="caseDown hidden">в</span>
            <span class="caseUp hidden">В</span>
            <span class="caps hidden">В</span>
            <span class="shiftCaps hidden">в</span>
          </span>
          <span class="eng">
            <span class="caseDown">d</span>
            <span class="caseUp hidden">D</span>
            <span class="caps hidden">D</span>
            <span class="shiftCaps hidden">d</span>
          </span>
        </div>
        <div class="key KeyF">
          <span class="rus hidden">
            <span class="caseDown hidden">а</span>
            <span class="caseUp hidden">А</span>
            <span class="caps hidden">А</span>
            <span class="shiftCaps hidden">а</span>
          </span>
          <span class="eng">
            <span class="caseDown">f</span>
            <span class="caseUp hidden">F</span>
            <span class="caps hidden">F</span>
            <span class="shiftCaps hidden">f</span>
          </span>
        </div>
        <div class="key KeyG">
          <span class="rus hidden">
            <span class="caseDown hidden">п</span>
            <span class="caseUp hidden">П</span>
            <span class="caps hidden">П</span>
            <span class="shiftCaps hidden">п</span>
          </span>
          <span class="eng">
            <span class="caseDown">g</span>
            <span class="caseUp hidden">G</span>
            <span class="caps hidden">G</span>
            <span class="shiftCaps hidden">g</span>
          </span>
        </div>
        <div class="key KeyH">
          <span class="rus hidden">
            <span class="caseDown hidden">р</span>
            <span class="caseUp hidden">Р</span>
            <span class="caps hidden">Р</span>
            <span class="shiftCaps hidden">р</span>
          </span>
          <span class="eng">
            <span class="caseDown">h</span>
            <span class="caseUp hidden">H</span>
            <span class="caps hidden">H</span>
            <span class="shiftCaps hidden">h</span>
          </span>
        </div>
        <div class="key KeyJ">
          <span class="rus hidden">
            <span class="caseDown hidden">о</span>
            <span class="caseUp hidden">О</span>
            <span class="caps hidden">О</span>
            <span class="shiftCaps hidden">о</span>
          </span>
          <span class="eng">
            <span class="caseDown">j</span>
            <span class="caseUp hidden">J</span>
            <span class="caps hidden">J</span>
            <span class="shiftCaps hidden">j</span>
          </span>
        </div>
        <div class="key KeyK">
          <span class="rus hidden">
            <span class="caseDown hidden">л</span>
            <span class="caseUp hidden">Л</span>
            <span class="caps hidden">Л</span>
            <span class="shiftCaps hidden">л</span>
          </span>
          <span class="eng">
            <span class="caseDown">k</span>
            <span class="caseUp hidden">K</span>
            <span class="caps hidden">K</span>
            <span class="shiftCaps hidden">k</span>
          </span>
        </div>
        <div class="key KeyL">
          <span class="rus hidden">
            <span class="caseDown hidden">д</span>
            <span class="caseUp hidden">Д</span>
            <span class="caps hidden">Д</span>
            <span class="shiftCaps hidden">д</span>
          </span>
          <span class="eng">
            <span class="caseDown">l</span>
            <span class="caseUp hidden">L</span>
            <span class="caps hidden">L</span>
            <span class="shiftCaps hidden">l</span>
          </span>
        </div>
        <div class="key Semicolon">
          <span class="rus hidden">
            <span class="caseDown hidden">ж</span>
            <span class="caseUp hidden">Ж</span>
            <span class="caps hidden">Ж</span>
            <span class="shiftCaps hidden">ж</span>
          </span>
          <span class="eng">
            <span class="caseDown">;</span>
            <span class="caseUp hidden">:</span>
            <span class="caps hidden">;</span>
            <span class="shiftCaps hidden">:</span>
          </span>
        </div>
        <div class="key Quote">
          <span class="rus hidden">
            <span class="caseDown hidden">э</span>
            <span class="caseUp hidden">Э</span>
            <span class="caps hidden">Э</span>
            <span class="shiftCaps hidden">э</span>
          </span>
          <span class="eng">
            <span class="caseDown">'</span>
            <span class="caseUp hidden">"</span>
            <span class="caps hidden">'</span>
            <span class="shiftCaps hidden">"</span>
          </span>
        </div>
        <div class="key enter_key">Enter</div>
      </div>
      <div class="keyboard__row">
        <div class="key shift_key shift_left ShiftLeft">Shift</div>
        <div class=" key KeyZ">
          <span class="rus hidden">
            <span class="caseDown hidden">я</span>
            <span class="caseUp hidden">Я</span>
            <span class="caps hidden">Я</span>
            <span class="shiftCaps hidden">я</span>
          </span>
          <span class="eng">
            <span class="caseDown">z</span>
            <span class="caseUp hidden">Z</span>
            <span class="caps hidden">Z</span>
            <span class="shiftCaps hidden">z</span>
          </span>
        </div>
        <div class="key KeyX">
          <span class="rus hidden">
            <span class="caseDown hidden">ч</span>
            <span class="caseUp hidden">Ч</span>
            <span class="caps hidden">Ч</span>
            <span class="shiftCaps hidden">ч</span></span>
          <span class="eng"><span class="caseDown">x</span>
            <span class="caseUp hidden">X</span>
            <span class="caps hidden">X</span>
            <span class="shiftCaps hidden">x</span>
          </span>
        </div>
        <div class="key KeyC">
          <span class="rus hidden">
            <span class="caseDown hidden">с</span>
            <span class="caseUp hidden">С</span>
            <span class="caps hidden">С</span>
            <span class="shiftCaps hidden">с</span>
          </span>
          <span class="eng">
            <span class="caseDown">c</span>
            <span class="caseUp hidden">C</span>
            <span class="caps hidden">C</span>
            <span class="shiftCaps hidden">c</span>
          </span>
        </div>
        <div class="key KeyV">
          <span class="rus hidden">
            <span class="caseDown hidden">м</span>
            <span class="caseUp hidden">М</span>
            <span class="caps hidden">М</span>
            <span class="shiftCaps hidden">м</span>
          </span>
          <span class="eng">
            <span class="caseDown">v</span>
            <span class="caseUp hidden">V</span>
            <span class="caps hidden">V</span>
            <span class="shiftCaps hidden">v</span>
          </span>
        </div>
        <div class="key KeyB">
          <span class="rus hidden">
            <span class="caseDown hidden">и</span>
            <span class="caseUp hidden">И</span>
            <span class="caps hidden">И</span>
            <span class="shiftCaps hidden">и</span>
          </span>
          <span class="eng">
            <span class="caseDown">b</span>
            <span class="caseUp hidden">B</span>
            <span class="caps hidden">B</span>
            <span class="shiftCaps hidden">b</span>
          </span>
        </div>
        <div class="key KeyN">
          <span class="rus hidden"><span class="caseDown hidden">т</span>
            <span class="caseUp hidden">Т</span>
            <span class="caps hidden">Т</span>
            <span class="shiftCaps hidden">т</span>
          </span>
          <span class="eng">
            <span class="caseDown">n</span>
            <span class="caseUp hidden">N</span>
            <span class="caps hidden">N</span>
            <span class="shiftCaps hidden">n</span>
          </span>
        </div>
        <div class="key KeyM">
          <span class="rus hidden">
            <span class="caseDown hidden">ь</span>
            <span class="caseUp hidden">Ь</span>
            <span class="caps hidden">Ь</span>
            <span class="shiftCaps hidden">ь</span>
          </span>
          <span class="eng">
            <span class="caseDown">m</span>
            <span class="caseUp hidden">M</span>
            <span class="caps hidden">M</span>
            <span class="shiftCaps hidden">m</span>
          </span>
        </div>
        <div class="key Comma">
          <span class="rus hidden">
            <span class="caseDown hidden">б</span>
            <span class="caseUp hidden">Б</span>
            <span class="caps hidden">Б</span>
            <span class="shiftCaps hidden">б</span>
          </span>
          <span class="eng">
            <span class="caseDown">,</span>
            <span class="caseUp hidden">&lt;</span>
            <span class="caps hidden">,</span>
            <span class="shiftCaps hidden">&lt;</span>
          </span>
        </div>
        <div class="key Period">
          <span class="rus hidden">
            <span class="caseDown hidden">ю</span>
            <span class="caseUp hidden">Ю</span>
            <span class="caps hidden">Ю</span>
            <span class="shiftCaps hidden">ю</span>
          </span>
          <span class="eng">
            <span class="caseDown">.</span>
            <span class="caseUp hidden">&gt;</span>
            <span class="caps hidden">.</span>
            <span class="shiftCaps hidden">&gt;</span>
          </span>
        </div>
        <div class="key Slash">
          <span class="rus hidden">
            <span class="caseDown hidden">.</span>
            <span class="caseUp hidden">,</span>
            <span class="caps hidden">.</span>
            <span class="shiftCaps hidden">,</span>
          </span>
          <span class="eng">
            <span class="caseDown">/</span>
            <span class="caseUp hidden">?</span>
            <span class="caps hidden">/</span>
            <span class="shiftCaps hidden">?</span>
          </span>
        </div>
        <div class="key ArrowUp">&uarr;</div>
        <div class="key shift_key shift_right ShiftRight">Shift</div>
      </div>
      <div class="keyboard__row">
        <div class="key ctrl_key ctrl_left ControlLeft">Ctrl</div>
        <div class="key win_key MetaLeft">en</div>
        <div class="key alt_key alt_left AltLeft">Alt</div>
        <div class="key space_key Space"></div>
        <div class="key alt_key alt_right AltRight">Alt</div>
        <div class="key ArrowLeft">&larr;</div>
        <div class="key ArrowDown">&darr;</div>
        <div class="key ArrowRight">&rarr;</div>
        <div class="key ctrl_key ctrl_right ControlRight">Ctrl</div>
      </div>
    </div>
    <p>Клавиатура создана в операционной системе Windows</p>
    <p>Для переключения языка комбинация: левые ctrl + alt</p>
    <label class="switch">Скрыть клавиатуру
      <input type="checkbox" class="checkbox">
      <div class="slider"></div>
    </label>
  </div>
`;
  body.insertAdjacentHTML('afterbegin', html);
}
