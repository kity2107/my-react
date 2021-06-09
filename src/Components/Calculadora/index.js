import { useState } from 'react';

import './styles.css';

export default function Calcular() {
  return (
    <div class="calculator">
      <div class="value">{0}</div>
      <div class="buttons-container">
        <button class="button function ac">AC</button>
        <button class="button function pm">±</button>
        <button class="button function percent">%</button>
        <button class="button operator division">÷</button>
        <button class="button number-7">7</button>
        <button class="button number-8">8</button>
        <button class="button number-9">9</button>
        <button class="button operator multiplication">×</button>
        <button class="button number-4">4</button>
        <button class="button number-5">5</button>
        <button class="button number-6">6</button>
        <button class="button operator subtraction">−</button>
        <button class="button number-1" value="1">
          1
        </button>
        <button class="button number-2">2</button>
        <button class="button number-3">3</button>
        <button class="button operator addition">+</button>
        <button class="button number-0">0</button>
        <button class="button decimal">.</button>
        <button class="button operator equal">=</button>
      </div>
    </div>
  );
}
