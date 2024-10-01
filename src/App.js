import React from "react";
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
import ImagePopup from "./components/ImagePopup.js";
import CurrentUserContext from "./components/contexts/CurrentUserContext.js";

function App() {
  const [initialCards, setInitialCards] = useState([]);
  const [currentUser, setUserInfo] = useState({});
  const [currentCard, setCurrentCard] = useState({
    name: "",
    link: "",
  });
  // const [counter, setCounter] = useState(0);

  useEffect(() => {
    loadInfo();
  }, []);

  async function loadInfo() {
    const currentUser = await api.getUserInfo();
    const initialCards = await api.getInitialCards();
    setUserInfo(currentUser);
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
  const [imageCardPopupIsOpened, imageCardSetPopoupIsOpened] = useState(false);

  const handleOnChangeInput = (evt) => {
    setProfileState((state) => ({
      ...state,
      [evt.target.name]: evt.target.value,
    }));
  };

  // function onCounterCardClick() {
  //   setCounter(counter + 1);
  // }

  function onEditProfileClick() {
    profileSetPopoupIsOpened(true);
  }

  function onAddPlaceClick() {
    addCardSetPopoupIsOpened(true);
  }

  function onEditAvatarClick() {
    editAvatarSetPopoupIsOpened(true);
  }

  function onDeleteCardClick() {
    deleteCardSetPopoupIsOpened(true);
  }

  function onImageCardClick(name, link) {
    imageCardSetPopoupIsOpened(true);
    setCurrentCard({ name, link });
  }

  function closeAllPopups() {
    imageCardSetPopoupIsOpened(false);
    deleteCardSetPopoupIsOpened(false);
    profileSetPopoupIsOpened(false);
    editAvatarSetPopoupIsOpened(false);
    addCardSetPopoupIsOpened(false);
  }

  const CurrentUser = React.useContext(CurrentUserContext);

  function onCardLike(card) {
    const isLiked = card.Likes.some((i) => i._id === CurrentUser._id);
    api.addCardLike(card._id, !isLiked).then((newCard) => {
      setCards((state) => state.map((c) => (c._id === card._id ? newCard : c)));
    });
  }

  return (
    <>
      <div className="page">
        <CurrentUserContext.Provider value={currentUser}>
          <Header />
          <Main
            // userName={CurrentUser.name}
            // userDescription={CurrentUser.about}
            // userAvatar={CurrentUser.avatar}
            handleEditProfileClick={onEditProfileClick}
            handleAddPlaceClick={onAddPlaceClick}
            handleEditAvatarClick={onEditAvatarClick}
          >
            <div className="elements__cards">
              {initialCards.map((card) => {
                return (
                  <Card
                    cardLikes={card.likes}
                    cardOwnerId={card.owner._id}
                    cardName={card.name}
                    cardImage={card.link}
                    cardCounter={card.likes.length}
                    Key={card._id}
                    handleDeleteCard={onDeleteCardClick}
                    handleCardClick={onImageCardClick}
                    handleCardLike={onCardLike}
                  ></Card>
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
            onClose={closeAllPopups}
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
            onClose={closeAllPopups}
            isOpen={addCardPopupIsOpened}
          />
          <Popup
            id="delete-popup"
            title="¿Estás seguro/a?"
            buttonName="Sí"
            onSubmit={() => null}
            onClose={closeAllPopups}
            isOpen={deleteCardPopupIsOpened}
          />
          <Popup
            id="avatar-popup"
            title="Cambiar foto de perfil"
            buttonName="Guardar"
            onChangeInput={handleOnChangeInput}
            onSubmit={() => null}
            onClose={closeAllPopups}
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
          <ImagePopup
            id="popup_image"
            name={currentCard.name}
            link={currentCard.link}
            isOpen={imageCardPopupIsOpened}
            onClose={closeAllPopups}
          />
        </CurrentUserContext.Provider>
      </div>
    </>
  );
}

export default App;
