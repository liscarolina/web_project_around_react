import { useState } from "react";
import "../src/blocks/Elements.css";
import Header from "./components/Header.js";
import Main from "./components/Main.js";
import Footer from "./components/Footer.js";
import PopupWithForm from "./components/PopupWithForm.js";

function App() {
  const [profileState, setProfileState] = useState({
    name: "",
    about: "",
  });

  const [popupIsOpened, setpopoupIsOpened] = useState(false);

  const handleOnChangeInput = (evt) => {
    setProfileState((state) => ({
      ...state,
      [evt.target.name]: evt.target.value,
    }));
  };

  const closeAllPopups = () => {
    setpopoupIsOpened(false);
  };

  function onEditProfileClick() {
    setpopoupIsOpened(true);
  }

  //}

  return (
    <>
      <div className="page">
        <Header />
        <Main handleEditProfileClick={onEditProfileClick} />
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
          isOpen={popupIsOpened}
        />
        {/* <PopupWithForm
          id="add-popup"
          title="Nuevo Lugar"
          buttonName="Guardar"
          inputFirst={{
            // type: "text",
            name: "place",
            placeholder: "Título",
            value: profileState.name,
          }}
          inputSecond={{
            // type: "url",
            name: "link",
            placeholder: "Enlace a la imagen",
            value: profileState.about,
          }}
          onChangeInput={handleOnChangeInput}
          onSubmit={() => null}
        /> */}
        {/* <PopupWithForm
          id="delete-popup"
          title="¿Estás seguro/a?"
          buttonName="Sí"
          onSubmit={() => null}
        /> */}
        {/* <PopupWithForm
          id="avatar-popup"
          title="Cambiar foto de perfil"
          buttonName="Guardar"
          inputFirst={{
            type: "url",
            name: "link",
            placeholder: "Enlace a la imagen",
            value: profileState.name,
          }}
          onChangeInput={handleOnChangeInput}
          onSubmit={() => null}
        /> */}

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
        </div>
        <div className="popup" id="profile">
          <div className="popup__container">
            <button
              className="popup__button popup__button_type_close"
              type="button"
            >
              <img
                className="popup__icon"
                src="<%=require('./images/popup-close-icon.svg')%>"
                alt="Cerrar"
              />
            </button>
            <h2 className="popup__title">Editar Perfil</h2>
            <form className="popup__form" autocomplete="off">
              <fieldset className="popup__name">
                <input
                  className="popup__item popup__item_type_name"
                  type="text"
                  name="name"
                  placeholder="Nombre"
                  value=""
                  required
                  minlength="2"
                  maxlength="40"
                />
                <span className="popup__error popup__error-name"></span>
                <input
                  className="popup__item popup__item_type_about"
                  type="text"
                  name="about"
                  placeholder="Acerca de mí"
                  value=""
                  required
                  minlength="2"
                  maxlength="200"
                />
                <span className="popup__error popup__error-about"></span>
                <button
                  className="popup__button popup__button_type_send"
                  type="submit"
                >
                  Guardar
                </button>
              </fieldset>
            </form>
          </div>
        </div> */}
        {/* <div className="popup" id="add-popup">
          <div className="popup__container">
            <button
              className="popup__button popup__button_type_close"
              type="button"
              id="close-add-popup"
            >
              <img
                className="popup__icon"
                src="<%=require('./images/popup-close-icon.svg')%>"
                alt="Cerrar"
              />
            </button>
            <h2 className="popup__title">Nuevo Lugar</h2>
            <form className="popup__form" id="add-form">
              <fieldset className="popup__name">
                <input
                  className="popup__item popup__item_type_name"
                  autocomplete="off"
                  id="place-input"
                  type="text"
                  name="place"
                  placeholder="Título"
                  minlength="2"
                  maxlength="30"
                  required
                />
                <span className="popup__error popup__error-place"></span>
                <input
                  className="popup__item popup__item_type_about"
                  id="link-input"
                  type="url"
                  name="link"
                  placeholder="Enlace a la imagen"
                  required
                />
                <span className="popup__error popup__error-link"></span>
                <button
                  className="popup__button popup__button_type_send"
                  id="add-card-button"
                  type="submit"
                >
                  Guardar
                </button>
              </fieldset>
            </form>
          </div>
        </div> */}
        {/* <div className="popup" id="delete-popup">
          <div className="popup__container">
            <button
              className="popup__button popup__button_type_close"
              type="button"
            >
              <img
                className="popup__icon"
                src="<%=require('./images/popup-close-icon.svg')%>"
                alt="Cerrar"
              />
            </button>
            <h2 className="popup__title popup__title-delete">
              ¿Estás seguro/a?
            </h2>
            <button
              className="popup__button popup__button_type_send"
              type="submit"
              id="delete-button"
            >
              Sí
            </button>
          </div>
        </div> */}
        {/* <div className="popup" id="avatar-popup">
          <div className="popup__container">
            <button
              className="popup__button popup__button_type_close"
              type="button"
              id="close-add-popup"
            >
              <img
                className="popup__icon"
                src="<%=require('./images/popup-close-icon.svg')%>"
                alt="Cerrar"
              />
            </button>
            <h2 className="popup__title popup__title-profile-pic">
              Cambiar foto de perfil
            </h2>
            <form className="popup__form" id="avatar-form">
              <fieldset className="popup__name">
                <input
                  className="popup__item popup__item_type_about"
                  id="link-input"
                  type="url"
                  name="link"
                  placeholder="Enlace a la imagen"
                  required
                />
                <span className="popup__error popup__error-link"></span>
                <button
                  className="popup__button popup__button_type_send"
                  id="add-card-button"
                  type="submit"
                >
                  Guardar
                </button>
              </fieldset>
            </form>
          </div>
        </div> */}
      </div>
    </>
  );
}

export default App;
