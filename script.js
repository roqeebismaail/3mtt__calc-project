'use strict';

// Blueprint class for the calculator
class Calculator {
  constructor(id, btnInitial, btnPrimary, btnSecondary) {
    this.id = id;
    this.btnInitial = btnInitial;
    this.btnPrimary = btnPrimary;
    this.btnSecondary = btnSecondary;
  }

  display() {
    // Inject calculator HTML
    document.getElementById(this.id).innerHTML = `
      <div class="calc-container d-flex flex-col">
        <div class="calc-float calc-float-notch">
          <span class="material-symbols-outlined notch notch--cam">radio_button_checked</span>
          <span class="material-symbols-outlined notch notch--piece">unknown_med</span>
        </div>

        <div class="calc-float calc-float-bar">
          <span class="material-symbols-outlined">signal_cellular_alt</span>
          <span class="material-symbols-outlined">wifi</span>
          <span class="material-symbols-outlined">battery_horiz_075</span>
        </div>

        <div class="calc-display">
          <span id="expr"></span>
          <span id="calc-expr"></span>
        </div>

        <div class="d-grid calc-operation">
          <button class="btn r1c1 ${this.btnSecondary}">C</button>
          <button class="btn r1c2 ${this.btnSecondary}">DEL</button>
          <button class="btn r1c3 ${this.btnSecondary}">%</button>
          <button class="btn r1c4 ${this.btnPrimary}">÷</button>

          <button class="btn r2c1 ${this.btnInitial}">7</button>
          <button class="btn r2c2 ${this.btnInitial}">8</button>
          <button class="btn r2c3 ${this.btnInitial}">9</button>
          <button class="btn r2c4 ${this.btnPrimary}">x</button>

          <button class="btn r3c1 ${this.btnInitial}">4</button>
          <button class="btn r3c2 ${this.btnInitial}">5</button>
          <button class="btn r3c3 ${this.btnInitial}">6</button>
          <button class="btn r3c4 ${this.btnPrimary}">-</button>

          <button class="btn r4c1 ${this.btnInitial}">1</button>
          <button class="btn r4c2 ${this.btnInitial}">2</button>
          <button class="btn r4c3 ${this.btnInitial}">3</button>
          <button class="btn r4c4 ${this.btnPrimary}">+</button>

          <button class="btn btn--0 r5ca ${this.btnInitial}">0</button>
          <button class="btn r5c3 ${this.btnInitial}">.</button>
          <button class="btn r5c4 ${this.btnPrimary}">=</button>
        </div>
      </div>
    `;

    // Button event handling
    document.querySelectorAll(`#${this.id} button`).forEach((btn) => {
      btn.addEventListener('click', (ev) => {
        const value = ev.target.innerText;

        console.log(value);

        const expr = document.querySelector("#expr");
        const calcExpr = document.querySelector("#calc-expr");

        if (value === "=") {
          let expression = expr.textContent
            .replace(/x/g, "*")
            .replace(/%/g, "/100")
            .replace(/÷/g, "/");

          try {
            calcExpr.textContent = eval(expression);
          } catch (e) {
            calcExpr.textContent = "Error Input";
          }
        } else if (value === "C") {
          expr.textContent = "";  // Clear the expression area
          calcExpr.textContent = ""; // Clear the result area
        } else if (value.toLowerCase() === "del") {
          expr.textContent = expr.textContent.slice(0, -1); // Remove last character
        } else {
          expr.textContent += value; // Append the clicked value to the expression
        }
      });
    });
  }
}

// Instantiate the calculator
new Calculator("cont", "btn-initial", "btn-primary", "btn-secondary").display();
