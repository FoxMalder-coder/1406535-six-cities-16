type PlaceCardProps = {
  prefix: string;
}

function PlaceCard({prefix}: PlaceCardProps) {
  const size = prefix === 'favorites' ? [150, 110] : [260, 200];

  return (
    <article className={`${prefix}__card place-card`}>
      <div className="place-card__mark">
        <span>Premium</span>
      </div>
      <div className={`${prefix}__image-wrapper place-card__image-wrapper`}>
        <a href="#">
          <img className="place-card__image" src="img/apartment-01.jpg" width={size[0]} height={size[1]} alt="Place image"/>
        </a>
      </div>
      <div className="place-card__info">
        <div className="place-card__price-wrapper">
          <div className="place-card__price">
            <b className="place-card__price-value">&euro;120</b>
            <span className="place-card__price-text">&#47;&nbsp;night</span>
          </div>
          <button className="place-card__bookmark-button button" type="button">
            <svg className="place-card__bookmark-icon" width="18" height="19">
              <use xlinkHref="#icon-bookmark"></use>
            </svg>
            <span className="visually-hidden">To bookmarks</span>
          </button>
        </div>
        <div className="place-card__rating rating">
          <div className="place-card__stars rating__stars">
            <span style={{width: '80%'}}></span>
            <span className="visually-hidden">Rating</span>
          </div>
        </div>
        <h2 className="place-card__name">
          <a href="#">Beautiful &amp; luxurious apartment at great location</a>
        </h2>
        <p className="place-card__type">Apartment</p>
      </div>
    </article>
  );
}

export default PlaceCard;
