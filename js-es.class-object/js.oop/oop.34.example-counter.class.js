class Counter {
  #count = 0;

  constructor(counter) {
    this.countElement = counter.querySelector("span");
    this.buttonElement = counter.querySelector("button");

    // Initializes count
    this.#count = parseInt(this.countElement.textContent);

    // Adds event listener
    this.buttonElement.addEventListener("click", this.increaseCount);
  }

  updateCounter() {
    this.countElement.textContent = this.#count;
  }

  increaseCount = () => {
    this.#count = this.#count + 1;
    this.updateCounter();
  };
}

const counter = new Counter(document.querySelector(".counter"));
