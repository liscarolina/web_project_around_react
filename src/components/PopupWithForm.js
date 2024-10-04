import popupCloseIcon from "../images/popup-close-icon.svg";

function PopupWithForm(props) {
  return (
    <div
      className={`popup ${props.isOpen ? "popup_opened" : ""}`}
      id={props.id}
    >
      <div className="popup__container">
        <button
          onClick={props.onClose}
          className="popup__button popup__button_type_close"
          type="button"
        >
          <img className="popup__icon" src={popupCloseIcon} alt="Cerrar" />
        </button>
        <h2 className="popup__title">{props.title}</h2>
        <form
          className="popup__form"
          autoComplete="off"
          onSubmit={props.onSubmit}
        >
          <fieldset className="popup__name">
            <input
              className="popup__item popup__item_type_name"
              type={props.inputFirst.type}
              name={props.inputFirst.name}
              placeholder={props.inputFirst.placeholder}
              value={props.inputFirst.value}
              required
              minLength="2"
              maxLength="40"
              onChange={props.onChangeInput}
            />
            <span className="popup__error popup__error-name"></span>
            <input
              className="popup__item popup__item_type_about"
              type={props.inputSecond.type}
              name={props.inputSecond.name}
              placeholder={props.inputSecond.placeholder}
              value={props.inputSecond.value}
              required
              minLength="2"
              maxLength="200"
              onChange={props.onChangeInput}
            />
            <span className="popup__error popup__error-about"></span>
            <button
              className="popup__button popup__button_type_send"
              type="submit"
              // onClick={props.onSubmit}
            >
              {props.buttonName}
            </button>
          </fieldset>
        </form>
      </div>
    </div>
  );
}

export default PopupWithForm;
