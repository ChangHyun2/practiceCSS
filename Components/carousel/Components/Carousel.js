import { Arrow } from "./Arrow.js";
import { Window } from "./Window.js";

const CarouselConfig = {
  prevArrow: {
    classList: ["carousel__arrow", "carousel__arrow-prev"],
    iconHTML: '<i class="fas fa-angle-left"></i>',
  },
  window: {
    classList: "carousel__window",
    config: {
      slider: {
        classList: "carousel__slider",
        images: ["./null.jpg"],
      },
      dotNavigation: {
        classList: {
          el: "dotNav",
          li: "dot",
          active: "dot--active",
        },
      },
    },
  },
  nextArrow: {
    classList: ["carousel__arrow", "carousel__arrow-next"],
    iconHTML: '<i class="fas fa-angle-right"></i>',
  },
};
export class Carousel {
  constructor($target, className = "carousel", config = CarouselConfig) {
    this.$target = $target;
    this.className = className;
    this.config = config;
  }

  render() {
    this.$el = document.createElement("div");
    this.$el.className = this.className;

    this.prevArrow = new Arrow(this.$el, this.config.prevArrow);
    this.window = new Window(this.$el, this.config.window);
    this.nextArrow = new Arrow(this.$el, this.config.nextArrow);

    this.$target.append(this.$el);
  }
  fetchImages(images) {
    this.config.window.config.images = images;
  }
}
