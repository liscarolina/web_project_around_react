import React from "react";
import PopupWithForm from "../components/PopupWithForm.js";
import CurrentUserContext from "./contexts/CurrentUserContext.js";
import { useState } from "react";

function EditProfilePopup({ onClose, isOpen, title, onUpdateUser }) {
  const [profileState, setProfileState] = useState({
    name: "",
    about: "",
  });
  const CurrentUser = React.useContext(CurrentUserContext);

  React.useEffect(() => {
    setProfileState({ name: CurrentUser.name, about: CurrentUser.about });
  }, [CurrentUser]);

  const handleOnChangeInput = (evt) => {
    setProfileState((state) => ({
      ...state,
      [evt.target.name]: evt.target.value,
    }));
  };

  function handleSubmit(e) {
    e.preventDefault();
    onUpdateUser({
      name: profileState.name,
      about: profileState.about,
    });
  }

  return (
    <PopupWithForm
      id="profile"
      title={title}
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
      onUpdateUser={onUpdateUser}
      onSubmit={handleSubmit}
      onClose={onClose}
      isOpen={isOpen}
    />
  );
}

export default EditProfilePopup;
