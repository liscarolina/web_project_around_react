import React from "react";
import likeButton from "../images/like.svg";
import trash from "../images/trash.svg";
import CurrentUserContext from "./contexts/CurrentUserContext";

function Card(props) {
  const CurrentUser = React.useContext(CurrentUserContext);
  const isOwn = props.cardOwnerId === CurrentUser._id;
  const isLiked = props.cardLikes.some((i) => i._id === CurrentUser._id);
  const cardLikeButtonClassName = `.elements__button_type_like-active`;
  return (
    <div className="elements__card">
      <img
        className="elements__image"
        src={props.cardImage}
        alt="boton de cerrado"
        onClick={() => props.handleCardClick(props.cardName, props.cardImage)}
      />

      <button
        className={`elements__button elements__button_type_trash ${
          isOwn ? "" : "elements__button_type_trash_inactive"
        }`}
        type="button"
        onClick={props.handleDeleteCard}
      >
        <img
          className="elements__icon elements__icon_type_trash-cap"
          src={trash}
          alt="Botón de eliminar"
        />
      </button>
      <div className="elements__title">
        <h3 className="elements__text">{props.cardName}</h3>
        <div>
          <button
            className="elements__button elements__button_type_like"
            type="button"
            onClick={props.handleCardLike}
          >
            <img
              className="elements__icon elements__icon_type_like-icon"
              src={likeButton}
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
