export class Slider {
  constructor($target, config) {
    this.$target = $target;
    this.className = config.classList;
    this.images = config.images;
    this.render();
  }

  render() {
    if (!this.$el) {
      this.$el = document.createElement("div");
      this.$el.className = this.className;
    }

    this.$el.innerHTML = this.images
      .map((imageSrc) => `<img src="${imageSrc}"></img>`)
      .join("");

    this.$target.append(this.$el);
  }
}
