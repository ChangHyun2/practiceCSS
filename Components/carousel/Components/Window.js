import { Slider } from "./Slider.js";
import { DotNavigation } from "./DotNavigation.js";

export class Window {
  constructor($target, windowConfig) {
    this.$target = $target;
    this.$className = windowConfig.classList;
    this.sliderConfig = windowConfig.config.slider;
    this.DotNavigationConfig = windowConfig.config.dotNavigation;
    this.render();
  }

  render() {
    if (!this.$el) {
      this.$el = document.createElement("div");
      this.$el.className = this.className;
    }

    this.slider = new Slider(this.$el, this.sliderConfig);
    this.dotNavigation = new DotNavigation(this.$el, this.DotNavigationConfig);

    this.$target.append(this.$el);
  }
}
