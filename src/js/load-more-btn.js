export default class LoadMoreButton {
  static HIDDEN_CLASS = 'hidden';

  constructor(buttonEl) {
    this.button = buttonEl;
  }

  disable() {
    this.button.disabled = true;
  }

  enable() {
    this.button.disabled = false;
  }

  hide() {
    this.button.classList.add(LoadMoreButton.HIDDEN_CLASS);
  }

  show() {
    this.button.classList.remove(LoadMoreButton.HIDDEN_CLASS);
  }
}