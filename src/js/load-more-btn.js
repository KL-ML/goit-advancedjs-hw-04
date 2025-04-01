export default class LoadMoreButton {
  static HIDDEN_CLASS = 'hidden';
  static END_MESSAGE_CLASS = 'end-message';

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

  addEndCollectionMessage() {
    this.button.classList.add(LoadMoreButton.END_MESSAGE_CLASS);
    this.button.textContent =
      "We're sorry, but you've reached the end of search results.";
  }

  removeEndCollectionMessage() {
    this.button.classList.remove(LoadMoreButton.END_MESSAGE_CLASS);
    this.button.textContent =
      "Load more";
  }
}