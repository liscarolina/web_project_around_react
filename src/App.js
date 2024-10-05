import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import "../src/blocks/Elements.css";
import Header from "./components/Header.js";
import Main from "./components/Main.js";
import Footer from "./components/Footer.js";
import Popup from "./components/Popup.js";
import api from "./utils/Api.js";
import Card from "./components/Card.js";
import ImagePopup from "./components/ImagePopup.js";
import CurrentUserContext from "./components/contexts/CurrentUserContext.js";
import EditAvatarPopup from "./components/EditAvatarPopup.js";
import EditProfilePopup from "./components/EditProfilePopup.js";
import AddPlacePopup from "./components/AddPlacePopup.js";

function App() {
  const [initialCards, setInitialCards] = useState([]);
  const [currentUser, setUserInfo] = useState({});
  const [currentCard, setCurrentCard] = useState({
    name: "",
    link: "",
  });

  useEffect(() => {
    loadInfo();
  }, []);

  async function loadInfo() {
    const currentUser = await api.getUserInfo();
    const initialCards = await api.getInitialCards();
    setUserInfo(currentUser);
    setInitialCards(initialCards);
  }

  const [isEditProfilePopupOpened, setIsEditProfilePopupOpened] =
    useState(false);
  const [addCardPopupIsOpened, addCardSetPopoupIsOpened] = useState(false);
  const [editAvatarPopupIsOpened, editAvatarSetPopoupIsOpened] =
    useState(false);
  const [deleteCardPopupIsOpened, deleteCardSetPopoupIsOpened] =
    useState(false);
  const [imageCardPopupIsOpened, imageCardSetPopoupIsOpened] = useState(false);

  function onEditProfileClick() {
    setIsEditProfilePopupOpened(true);
  }

  function onAddPlaceClick() {
    addCardSetPopoupIsOpened(true);
  }

  function onEditAvatarClick() {
    editAvatarSetPopoupIsOpened(true);
  }

  // function onDeleteCardClick() {
  //   deleteCardSetPopoupIsOpened(true);
  // }

  function onImageCardClick(name, link) {
    imageCardSetPopoupIsOpened(true);
    setCurrentCard({ name, link });
  }

  function closeAllPopups() {
    imageCardSetPopoupIsOpened(false);
    // deleteCardSetPopoupIsOpened(false);
    setIsEditProfilePopupOpened(false);
    editAvatarSetPopoupIsOpened(false);
    addCardSetPopoupIsOpened(false);
  }

  function onCardLike(card) {
    const isLiked = card.likes.some((i) => i._id === currentUser._id);
    api.handleCardLike(card._id, isLiked).then((newCard) => {
      setInitialCards((state) =>
        state.map((c) => (c._id === card._id ? newCard : c))
      );
    });
  }

  function onCardDelete(card) {
    api.deleteCard(card._id).then(() => {
      setInitialCards((state) =>
        state.filter((c) => (c._id === card._id ? false : true))
      );
    });
  }

  function handleUpdateUser({ name, about }) {
    api
      .changeProfile(name, about)
      .then(() =>
        setUserInfo((state) => ({ ...state, name: name, about: about }))
      );
    setIsEditProfilePopupOpened(false);
  }

  function handleUpdateAvatar({ link }) {
    api
      .changeAvatar(link)
      .then(() => setUserInfo((state) => ({ ...state, avatar: link })));
    editAvatarSetPopoupIsOpened(false);
  }

  function handleAddPlaceSubmit(newCard) {
    api
      .createCard(newCard.name, newCard.link)
      .then((cardResponse) => setInitialCards([cardResponse, ...initialCards]));
    addCardSetPopoupIsOpened(false);
  }

  return (
    <>
      <div className="page">
        <CurrentUserContext.Provider value={currentUser}>
          <Header />
          <Main
            handleEditProfileClick={onEditProfileClick}
            handleAddPlaceClick={onAddPlaceClick}
            handleEditAvatarClick={onEditAvatarClick}
          >
            <div className="elements__cards">
              {initialCards.map((card) => {
                return (
                  <Card
                    card={card}
                    cardLikes={card.likes}
                    cardOwnerId={card.owner._id}
                    cardName={card.name}
                    cardImage={card.link}
                    cardCounter={card.likes.length}
                    Key={card._id}
                    handleCardDelete={onCardDelete}
                    // handleDeleteClick={onDeleteCardClick}
                    handleCardClick={onImageCardClick}
                    handleCardLike={onCardLike}
                  ></Card>
                );
              })}
            </div>
          </Main>
          <Footer />
          <EditProfilePopup
            title="Editar Perfil"
            isOpen={isEditProfilePopupOpened}
            onClose={closeAllPopups}
            onUpdateUser={handleUpdateUser}
          />
          <EditAvatarPopup
            title="Cambiar foto de perfil"
            isOpen={editAvatarPopupIsOpened}
            onClose={closeAllPopups}
            onUpdateAvatar={handleUpdateAvatar}
          />

          <AddPlacePopup
            title="Nuevo Lugar"
            isOpen={addCardPopupIsOpened}
            onClose={closeAllPopups}
            onAddCard={handleAddPlaceSubmit}
          />
          <Popup
            id="delete-popup"
            title="¿Estás seguro/a?"
            buttonName="Sí"
            onSubmit={() => null}
            onClose={closeAllPopups}
            isOpen={deleteCardPopupIsOpened}
          />
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
