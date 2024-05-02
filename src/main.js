import TripEventsPresenter from './presenter/trip-events-presenter';
import FiltersPresenter from './presenter/filters-presenter';
import EventPointModel from './model/model';

const filtersElement = document.querySelector('.trip-controls__filters');
const tripEventsListElement = document.querySelector('.trip-events__list');
const filtersPresenter = new FiltersPresenter({ filtersElement });

const eventPointsModel = new EventPointModel();
const tripEventsPresenter = new TripEventsPresenter({
  tripEventsListElement,
  eventPointsModel,
});

filtersPresenter.init();
tripEventsPresenter.init();
