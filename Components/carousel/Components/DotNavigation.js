import { App } from "../App.js";

export class DotNavigation {
  constructor($target, config) {
    console.log();
    this.$target = $target;
    this.config = config;
    this.activeDotIndex = 0;
    this.render();
    this.updateActiveDot(0);
  }
  render() {
    if (!this.$el) {
      this.$el = document.createElement("el");
      this.$el.className = this.config.classList.el;
    }

    this.$el.innerHTML = `<li class="${this.config.classList.li}"><i class="fas fa-circle"></i></li>`.repeat(
      images.length
    );

    this.$target.append(this.$el);
    this.$dots = this.$el.children;
  }

  updateActiveDot(activeDotIndex) {
    console.log(this.$dots);
    // update prev active dot
    this.$dots[this.activeDotIndex].classList.remove("dot--active");

    // update new active dot
    this.activeDotIndex = activeDotIndex;
    this.$dots[this.activeDotIndex].classList.add("dot--active");
  }
}
