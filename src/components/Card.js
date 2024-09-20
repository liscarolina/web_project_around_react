function Card(props) {
  console.log(props);
  return (
    <div className="elements__card">
      <img
        className="elements__image"
        src=" "
        alt="boton de cerrado"
        style={{ backgroundImage: `url(${props.cardImage})` }}
      />

      <button
        className="elements__button elements__button_type_trash"
        type="button"
      >
        <img
          className="elements__icon elements__icon_type_trash-cap"
          src="<%=require('./images/trashcap.svg')%>"
          alt="Botón de eliminar"
        />
        <img
          className="elements__icon elements__icon_type_trash-can"
          src="<%=require('./images/trashcan.svg')%>"
          alt="Botón de eliminar"
        />
      </button>
      <div className="elements__title">
        <h3 className="elements__text">{props.cardName}</h3>
        <div>
          <button
            className="elements__button elements__button_type_like"
            type="button"
            // onClick={props.handleCardLike}
          >
            <img
              className="elements__icon elements__icon_type_like-icon"
              src="<%=require('./images/like.svg')%>"
              alt="Botón de gustar"
            />
          </button>
          <p className="elements__counter">{props.cardCounter}</p>
        </div>
      </div>
    </div>
  );
}

export default Card;
