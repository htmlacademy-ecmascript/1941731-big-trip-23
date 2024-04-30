import AddNewPointView from '../view/AddNewPointView';
import EditPointView from '../view/EditPointView';
import PointItemView from '../view/PointItemView';
import SortView from '../view/SortView';
import {render} from '../render';

export default class TripEventsPresenter{
  constructor({tripEventsListElement}) {
    this.tripEventsElement = tripEventsListElement;
  }

  init(){
    render(new SortView(),this.tripEventsElement);
    render(new EditPointView(),this.tripEventsElement);
    render(new AddNewPointView(),this.tripEventsElement);
    for (let i = 0; i < 3; i++){
      render(new PointItemView(),this.tripEventsElement);
    }
  }
}
