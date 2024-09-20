import popupCloseIcon from "../images/popup-close-icon.svg";
function Popup(props) {
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
        <form className="popup__form" autoComplete="off">
          <fieldset className="popup__name">
            {props.children}
            <button
              className="popup__button popup__button_type_send"
              type="submit"
              onClick={props.onSubmit}
            >
              {props.buttonName}
            </button>
          </fieldset>
        </form>
      </div>
    </div>
  );
}

export default Popup;
