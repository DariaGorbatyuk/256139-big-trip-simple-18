import {createElement} from "../render";

const createListContentTemplate = () => `   <ul class="trip-events__list"></ul>`


export default class ListContent {
  getTemplate() {
    return createListContentTemplate()
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
