import {render} from "../render"
import ListSort from "../view/list-sort";
import ListFilter from "../view/list-filter";
import ListContent from "../view/list-content";
import EditPoint from "../view/edit-point";
import Point from "../view/point";
const siteTripEventsElement = document.querySelector('.trip-events')
const siteTripFiltersContainer = document.querySelector('.trip-controls__filters')


export default class BoardPresenter {
  init() {
    render(new ListFilter(), siteTripFiltersContainer)
    render(new ListSort(), siteTripEventsElement)
    render(new ListContent(), siteTripEventsElement)
    const siteListContent = document.querySelector('.trip-events__list')
    render(new EditPoint, siteListContent)
    for (let i = 0; i < 3; i++) {
      render(new Point, siteListContent)
    }
  }
}
