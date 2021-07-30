function PopupWithForm(props) {
    return (
        <div className={`popup popup_type_${props.name} ${props.isOpen ? 'popup_opened' : ''}`}>
            <div className="popup__content">
                <button className="popup__close-icon" type="button" onClick={props.onClose}></button>
                <h3 className="popup__title">{props.title}</h3>
                <form className={`popup__form popup__form_type_${props.name}`} name={props.name} novalidate>
                    {props.children}
                </form>
            </div>
        </div>
    )
}

export default PopupWithForm;