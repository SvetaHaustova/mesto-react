function ImagePopup(props) {
    return (
        <div className={`popup popup_type_view ${props.card ? 'popup_opened' : '' }`}>
            <div className="popup__place-view">
                <button className="popup__close-icon" type="button" onClick={props.onClose}></button>
                <img className="popup__place-photo" src={props.card.link} alt="Фото места"/>
                <p className="popup__place-title">{props.card.name}</p>
            </div>
        </div>
    )
}

export default ImagePopup;