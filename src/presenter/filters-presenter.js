import FiltersView from '../view/FiltersView';
import { render } from '../render';

export default class FiltersPresenter {
  constructor({ filtersElement }) {
    this.filtersElement = filtersElement;
  }

  init() {
    render(new FiltersView(), this.filtersElement);
  }
}
