function PopupWithForm({name, isOpen, onClose, title, button, children}) {
    return (
        <div className={`popup popup_type_${name} ${isOpen ? 'popup_opened' : ''}`}>
            <div className="popup__content">
                <button className="popup__close-icon" type="button" onClick={onClose}></button>
                <h3 className="popup__title">{title}</h3>
                <form className={`popup__form popup__form_type_${name}`} name={name} noValidate>
                    {children}
                    <button className="popup__save-button" type="submit">{button}</button>
                </form>
            </div>
        </div>
    )
}

export default PopupWithForm;