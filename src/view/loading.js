import {createElement} from "../render";

const createLoadingTemplate = () => ` <p class="trip-events__msg">Loading...</p>`

export default class Loading {
  getTemplate() {
    return createLoadingTemplate()
  }

  getElement() {
    if (!this.element) {
      this.element = createElement(this.getTemplate())
    }
    return this.element
  }

  removeElement() {
    this.element = null
  }
}
