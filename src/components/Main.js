import editProfileButtonLayover from "../images/edit-profile.svg";
import editProfileButtonIcon from "../images/profile-edit-button.svg";
import addCardButtonIcon from "../images/profile-add-button.svg";

function Main(props) {
  return (
    <main className="content">
      <section className="profile">
        <div className="profile__content">
          <img
            className="profile__avatar"
            src=""
            alt="Imagen de Jacques Costeau"
            onClick={props.handleEditAvatarClick}
            style={{ backgroundImage: `url(${props.userAvatar})` }}
          />
          <img
            className="profile__layover"
            src={editProfileButtonLayover}
            alt="Editar"
          />
          <div className="profile__info">
            <h1 className="profile__name">{props.userName}</h1>
            <h2 className="profile__description">{props.userDescription}</h2>
          </div>
          <button
            className="profile__button profile__button_type_edit"
            type="button"
            id="edit-button"
            onClick={props.handleEditProfileClick}
          >
            <img
              className="profile__icon profile__icon_type_edit"
              src={editProfileButtonIcon}
              alt="Botón de editar"
            />
          </button>
        </div>
        <button
          className="profile__button profile__button_type_add"
          type="button"
          id="add-button"
          onClick={props.handleAddPlaceClick}
        >
          <img
            className="profile__icon profile__icon_type_add"
            src={addCardButtonIcon}
            alt="Botón de añadir"
          />
        </button>
      </section>
      <section className="elements">
        {props.children}
        {/* <div className="elements__cards">
          <template className="elements__template">
            <div className="elements__card">
              <img className="elements__image" src=" " alt="boton de cerrado" />
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
                <h3 className="elements__text"></h3>
                <div>
                  <button
                    className="elements__button elements__button_type_like"
                    type="button"
                  >
                    <img
                      className="elements__icon elements__icon_type_like-icon"
                      src="<%=require('./images/like.svg')%>"
                      alt="Botón de gustar"
                    />
                  </button>
                  <p className="elements__counter">0</p>
                </div>
              </div>
            </div>
          </template>
        </div> */}
      </section>
    </main>
  );
}

export default Main;
