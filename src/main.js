import {render} from "./render"
import ListSort from "./view/list-sort";
import ListFilter from "./view/list-filter";
import ListContent from "./view/list-content";
const siteTripEventsElement = document.querySelector('.trip-events')
const siteTripFiltersContainer = document.querySelector('.trip-controls__filters')
render(new ListFilter(), siteTripFiltersContainer)
render(new ListSort(), siteTripEventsElement)
render(new ListContent(), siteTripEventsElement)

