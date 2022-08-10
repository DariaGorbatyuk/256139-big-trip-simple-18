import {render} from '../render';
import ListSortView from '../view/list-sort-view';
import ListFilterView from '../view/list-filter-view';
import ListContentView from '../view/list-content-view';
import EditPointView from '../view/edit-point-view';
import PointView from '../view/point-view';
const siteTripEventsElement = document.querySelector('.trip-events');
const siteTripFiltersContainer = document.querySelector('.trip-controls__filters');


export default class BoardPresenter {
  init() {
    render(new ListFilterView(), siteTripFiltersContainer);
    render(new ListSortView(), siteTripEventsElement);
    render(new ListContentView(), siteTripEventsElement);
    const siteListContent = document.querySelector('.trip-events__list');
    render(new EditPointView, siteListContent);
    for (let i = 0; i < 3; i++) {
      render(new PointView, siteListContent);
    }
  }
}
