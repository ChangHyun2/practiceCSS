export class Arrow {
  constructor($target, option) {
    this.$target = $target;
    this.$classList = option.classList;
    this.iconHTML = option.iconHTML;
    this.render();
  }

  render() {
    if (!this.$el) {
      this.$el = document.createElement("button");
      this.$classList.forEach((className) => this.$el.classList.add(className));
    }
    this.$el.innerHTML = this.iconHTML;
    this.$target.append(this.$el);
  }
}
