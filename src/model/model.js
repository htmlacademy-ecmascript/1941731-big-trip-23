import { mockedEventPoints } from '../mocks/points';
import { mockedOffers } from '../mocks/offers';
import { mockedDestinations } from '../mocks/destinations';

export default class EventPointModel {
  eventPoints = mockedEventPoints.map((eventPoint) => ({
    ...eventPoint,
    offers: eventPoint.offers.map((offerId) =>
      mockedOffers.find((offer) => offer.id === offerId),
    ),
    destination: mockedDestinations.find(
      (destination) => destination.id === eventPoint.destination,
    ),
  }));

  offers = mockedOffers;
  destinations = mockedDestinations;

  getEventPoints = () => this.eventPoints;

  getOffers = () => this.offers;
  getDestinations = () => this.destinations;
}
