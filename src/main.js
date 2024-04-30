import TripEventsPresenter from './presenter/trip-events-presenter';
import FiltersPresenter from './presenter/filters-presenter';

const filtersElement = document.querySelector('.trip-controls__filters');
const tripEventsListElement = document.querySelector('.trip-events__list');
const filtersPresenter = new FiltersPresenter({filtersElement});
const tripEventsPresenter = new TripEventsPresenter({tripEventsListElement});

filtersPresenter.init();
tripEventsPresenter.init();
