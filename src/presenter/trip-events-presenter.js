import EditPointView from '../view/EditPointView';
import PointItemView from '../view/PointItemView';
import SortView from '../view/SortView';
import { render } from '../render';

export default class TripEventsPresenter {
  constructor({ tripEventsListElement, eventPointsModel }) {
    this.tripEventsElement = tripEventsListElement;
    this.eventPointsModel = eventPointsModel;
  }

  init() {
    this.eventPoints = [...this.eventPointsModel.getEventPoints()];
    render(new SortView(), this.tripEventsElement);
    render(new EditPointView(this.eventPoints[0]), this.tripEventsElement);
    for (let i = 1; i < 4; i++) {
      render(new PointItemView(this.eventPoints[i]), this.tripEventsElement);
    }
  }
}
