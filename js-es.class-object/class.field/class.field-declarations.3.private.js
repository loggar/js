class Counter extends HTMLElement {
  #x = 0;

  clicked() {
    this.#x++;
    window.requestAnimationFrame(this.render.bind(this));
  }

  constructor() {
    super();
    this.onclick = this.clicked.bind(this);
  }

  connectedCallback() {
    this.render();
  }

  render() {
    this.textContent = this.#x.toString();
  }
}
window.customElements.define("num-counter", Counter);

// Details of this proposal
// https://tc39.github.io/proposal-class-fields/

// Orthogonality

class C {
  z;
  #w = 2;
  [b];
}
