console.log("hi");

import { Carousel } from "../Components/Carousel.js.js.js.js";

export class App {
  constructor() {
    this.carousel = new Carousel(document.getElementById("App"));
  }

  init() {
    this.carousel.fetchImages();
    this.carousel.render();
  }
  fetchData() {
    fetch("https://picsum.photos/v2/list")
      .then((res) => res.json())
      .then((res) => {
        this.images = res.slice(0, 5);
      });
  }
  get images() {
    return App.images;
  }
  static images(images) {
    this.images = images;
  }
}
const app = new App();
App.images(app.fetchData());
app.init();
