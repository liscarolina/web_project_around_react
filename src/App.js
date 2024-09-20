import { useEffect } from "react";
import { useState } from "react";
import "../src/blocks/Elements.css";
import Header from "./components/Header.js";
import Main from "./components/Main.js";
import Footer from "./components/Footer.js";
import PopupWithForm from "./components/PopupWithForm.js";
import Popup from "./components/Popup.js";
import api from "./utils/Api.js";
import Card from "./components/Card.js";

function App() {
  const [initialCards, setInitialCards] = useState([]);
  const [userInfo, setUserInfo] = useState({});
  const [counter, setCounter] = useState(0);

  useEffect(() => {
    loadInfo();
  }, []);

  async function loadInfo() {
    const userInfo = await api.getUserInfo();
    const initialCards = await api.getInitialCards();
    setUserInfo(userInfo);
    setInitialCards(initialCards);
  }

  const [profileState, setProfileState] = useState({
    name: "",
    about: "",
  });
  const [profilePopupIsOpened, profileSetPopoupIsOpened] = useState(false);
  const [addCardPopupIsOpened, addCardSetPopoupIsOpened] = useState(false);
  const [editAvatarPopupIsOpened, editAvatarSetPopoupIsOpened] =
    useState(false);
  const [deleteCardPopupIsOpened, deleteCardSetPopoupIsOpened] =
    useState(false);

  const handleOnChangeInput = (evt) => {
    setProfileState((state) => ({
      ...state,
      [evt.target.name]: evt.target.value,
    }));
  };

  function onCounterCardClick() {
    setCounter(counter + 1);
  }

  function onEditProfileClick() {
    profileSetPopoupIsOpened(true);
  }

  function onEditProfileClose() {
    profileSetPopoupIsOpened(false);
  }

  function onAddPlaceClick() {
    addCardSetPopoupIsOpened(true);
  }

  function onAddPlaceClose() {
    addCardSetPopoupIsOpened(false);
  }

  function onEditAvatarClick() {
    editAvatarSetPopoupIsOpened(true);
  }

  function onEditAvatarClose() {
    editAvatarSetPopoupIsOpened(false);
  }

  // function onDeleteCardClick() {
  //   deleteCardSetPopoupIsOpened(true);
  // }

  function onDeleteCardClose() {
    deleteCardSetPopoupIsOpened(false);
  }

  return (
    <>
      <div className="page">
        <Header />
        <Main
          userName={userInfo.name}
          userDescription={userInfo.about}
          userAvatar={userInfo.avatar}
          handleEditProfileClick={onEditProfileClick}
          handleAddPlaceClick={onAddPlaceClick}
          handleEditAvatarClick={onEditAvatarClick}
          handleCardLike={onCounterCardClick}
        >
          <div className="elements__cards">
            {initialCards.map((card) => {
              return (
                <Card
                  cardName={card.name}
                  cardImage={card.link}
                  cardCounter={card.likes}
                  key={card.owner._Id}
                />
              );
            })}
          </div>
        </Main>

        <Footer />
        <PopupWithForm
          id="profile"
          title="Editar Perfil"
          buttonName="Guardar"
          inputFirst={{
            type: "text",
            name: "name",
            placeholder: "Nombre",
            value: profileState.name,
          }}
          inputSecond={{
            type: "text",
            name: "about",
            placeholder: "Acerca de mí",
            value: profileState.about,
          }}
          onChangeInput={handleOnChangeInput}
          onSubmit={() => null}
          onClose={onEditProfileClose}
          isOpen={profilePopupIsOpened}
        />
        <PopupWithForm
          id="add-popup"
          title="Nuevo Lugar"
          buttonName="Guardar"
          inputFirst={{
            type: "text",
            name: "place",
            placeholder: "Título",
            value: profileState.place,
          }}
          inputSecond={{
            type: "url",
            name: "link",
            placeholder: "Enlace a la imagen",
            value: profileState.link,
          }}
          onChangeInput={handleOnChangeInput}
          onSubmit={() => null}
          onClose={onAddPlaceClose}
          isOpen={addCardPopupIsOpened}
        />
        <Popup
          id="delete-popup"
          title="¿Estás seguro/a?"
          buttonName="Sí"
          onSubmit={() => null}
          onClose={onDeleteCardClose}
          isOpen={deleteCardPopupIsOpened}
        />
        <Popup
          id="avatar-popup"
          title="Cambiar foto de perfil"
          buttonName="Guardar"
          onChangeInput={handleOnChangeInput}
          onSubmit={() => null}
          onClose={onEditAvatarClose}
          isOpen={editAvatarPopupIsOpened}
        >
          <input
            className="popup__item popup__item_type_about"
            id="link-input"
            type="url"
            name="link"
            placeholder="Enlace a la imagen"
            value={profileState.link}
            required
          />
          <span className="popup__error popup__error-link"></span>
        </Popup>

        {/* <div className="popup" id="popup_image">
          <div className="popup__container popup__container-window">
            <button
              className="popup__button popup__button_type_close"
              type="button"
              id="window-close-button"
            >
              <img
                className="popup__icon popup__icon_type_close"
                src="<%=require('./images/popup-close-icon.svg')%>"
                alt="Cerrar"
              />
            </button>
            <img
              className="popup__window-image"
              src=" "
              alt="imagen del lugar"
            />
            <h3 className="popup__window-name"></h3>
          </div>
        </div> */}
      </div>
    </>
  );
}

export default App;
