function Card(props) {
    
    function handleCardClick() {
        props.onCardClick(props.card);
    }
    
    return (
        <li className="place">
            <img className="place__photo" src={props.card.link} alt="Фото места" onClick={handleCardClick}/>
            <button className="place__delete-button" type="button"></button>
            <div className="place__description">
                <h2 className="place__title">{props.card.name}</h2>
                <div className="place__like-container">
                    <button className="place__like" type="button"></button>
                    <p className="place__like-counter">{props.card.likes.length}</p>
                </div>
            </div>
        </li>
    )
}

export default Card;