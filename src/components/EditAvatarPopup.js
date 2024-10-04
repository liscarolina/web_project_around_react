import React from "react";
import Popup from "./Popup.js";
// import CurrentUserContext from "./contexts/CurrentUserContext.js";
import { useState } from "react";

function EditAvatarPopup({ title, onClose, isOpen, onChangeInput }) {
  const [avatarState, setAvatarState] = useState({
    link: "",
  });

  const handleOnChangeInput = (evt) => {
    setAvatarState((state) => ({
      ...state,
      [evt.target.name]: evt.target.value,
    }));
  };

  return (
    <Popup
      id="avatar-popup"
      title={title}
      buttonName="Guardar"
      onSubmit={() => null}
      onClose={onClose}
      isOpen={isOpen}
    >
      <input
        className="popup__item popup__item_type_about"
        id="link-input"
        type="url"
        name="link"
        placeholder="Enlace a la imagen"
        value={avatarState.link}
        required
        onChange={handleOnChangeInput}
      />
      <span className="popup__error popup__error-link"></span>
    </Popup>
  );
}

export default EditAvatarPopup;
