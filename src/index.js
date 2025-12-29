import "./style.css";

export default class Carousel {
  #currentIndex = 0;
  #slides;
  #nextBtn;
  #prevBtn;
  #slideWidth;
  #track;

  constructor({ slides = [], track = null, nextBtn = null, prevBtn = null }) {
    this.#slides = slides;
    this.#track = track;
    this.#nextBtn = nextBtn;
    this.#prevBtn = prevBtn;
    this.#slideWidth = this.#slides[0].offsetWidth; // With of each slide which is expected to be same for all slide elements
    this.#initializeEventListeners();
  }

  #updateCurrentIndex(increment = true) {
    if (!increment) {
      --this.#currentIndex;
      return;
    }

    ++this.#currentIndex;
  }

  #initializeEventListeners() {
    this.#nextBtn.addEventListener("click", this.#showNextSlide.bind(this));
    this.#prevBtn.addEventListener("click", this.#showPreviousSlide.bind(this));
  }
  #showNextSlide() {
    console.log("Next");
    this.#updateCurrentIndex();
    console.log(this.#currentIndex);
    this.#run();
  }
  #showPreviousSlide() {
    console.log("Pev");
    this.#updateCurrentIndex(false);
    console.log(this.#currentIndex);
    this.#run();
  }
  #run() {
    const distanceToSlide = this.#slideWidth * this.#currentIndex;
    console.log(distanceToSlide);
    this.#track.style.transform = `translateX(-${distanceToSlide}px)`;
  }
}

const slides = document.querySelectorAll("[data-slide]");
const nextBtn = document.querySelector("[data-next-btn]");
const prevBtn = document.querySelector("[data-prev-btn]");
const track = document.querySelector("[data-track]");

new Carousel({ slides, track, nextBtn, prevBtn });
