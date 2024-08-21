import { Offer, City } from '../../types';
import { useState } from 'react';
import { getPoint, getNumeralEnding } from '../../utils';
import { CITIES, DEFAULT_CITY, MapHeight } from '../../const';
import Header from '../../components/header/header';
import PlacesList from '../../components/places-list/places-list';
import Map from '../../components/map/map';
import LocationList from '../../components/location-list/location-list';

type MainPageProps = {
  offers: Offer[];
}

export default function MainPage({offers}: MainPageProps) {
  const [activeOffer, setActiveOffer] = useState<Offer | null>(null);
  const getCity = (cityName: string) => CITIES.find((city) => city.name === cityName);

  const [activeCity, setActiveCity] = useState(DEFAULT_CITY);
  const localOffers = offers.filter((offer) => offer.city.name === activeCity?.name);
  const localPoints = localOffers.map(getPoint);

  const handleOfferHover = (offer?: Offer) => {
    setActiveOffer(offer || null);
  };

  const handleCityChange = (cityName: string) => {
    setActiveCity(getCity(cityName) || DEFAULT_CITY);
  };

  return (
    <div className="page page--gray page--main">
      <Header />

      <main className="page__main page__main--index">
        <h1 className="visually-hidden">Cities</h1>
        <div className="tabs">
          <LocationList cities={CITIES} activeCity={activeCity.name} onChange={handleCityChange}/>
        </div>
        <div className="cities">
          <div className="cities__places-container container">
            <section className="cities__places places">
              <h2 className="visually-hidden">Places</h2>
              <b className="places__found">{getNumeralEnding(localOffers.length, 'place')} to stay in {activeCity.name}</b>
              <form className="places__sorting" action="#" method="get">
                <span className="places__sorting-caption">Sort by</span>
                <span className="places__sorting-type" tabIndex={0}>
                  Popular
                  <svg className="places__sorting-arrow" width="7" height="4">
                    <use xlinkHref="#icon-arrow-select"></use>
                  </svg>
                </span>
                <ul className="places__options places__options--custom places__options--opened">
                  <li className="places__option places__option--active" tabIndex={0}>Popular</li>
                  <li className="places__option" tabIndex={0}>Price: low to high</li>
                  <li className="places__option" tabIndex={0}>Price: high to low</li>
                  <li className="places__option" tabIndex={0}>Top rated first</li>
                </ul>
              </form>
              <PlacesList offers={localOffers} onHover={handleOfferHover} />
            </section>
            <div className="cities__right-section">
              <section className="cities__map map" style={{backgroundImage: 'none'}}>
                <Map position={activeCity} points={localPoints} activePoint={activeOffer && getPoint(activeOffer)} height={MapHeight.mainPage} />
              </section>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
