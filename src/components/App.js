import React from 'react';
import Header from './Header';
import Main from './Main';
import Footer from './Footer';
import PopupWithForm from './PopupWithForm';
import ImagePopup from './ImagePopup';

function App() {

    const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = React.useState(false);
    const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = React.useState(false);
    const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = React.useState(false);
    const [selectedCard, setSelectedCard] = React.useState({ isClicked: false, name: '', link: '', _id: '' });

    function handleEditAvatarClick() {
        setIsEditAvatarPopupOpen(true);
    }
    
    function handleEditProfileClick() {
        setIsEditProfilePopupOpen(true);
    }

    function handleAddPlaceClick() {
        setIsAddPlacePopupOpen(true);
    }

    function handleCardClick(card) {
        setSelectedCard({ isClicked: true, name: card.name, link: card.link, _id: card._id });
    }

    function closeAllPopups() {
        setIsEditAvatarPopupOpen(false);
        setIsEditProfilePopupOpen(false);
        setIsAddPlacePopupOpen(false);
        setSelectedCard({ isClicked: false, name: '', link: '', _id: '' });
    }

    return (
        <div className="body">
            <div className="page">
                <Header />
                <Main 
                onEditAvatar={handleEditAvatarClick}
                onEditProfile={handleEditProfileClick}
                onAddPlace={handleAddPlaceClick}
                onCardClick={handleCardClick}
                />
                <Footer />
            </div>    
            
            <PopupWithForm name="edit" title="Редактировать профиль" button="Сохранить" isOpen={isEditProfilePopupOpen} onClose={closeAllPopups}>
                <input id="name-input" className="popup__input popup__input_type_name" type="text" name="name" placeholder="Имя" minLength="2" maxLength="40" required/>
                <span className="popup__input-error name-input-error"></span>
                <input id="profession-input" className="popup__input popup__input_type_profession" type="text" name="profession" placeholder="Род деятельности" minLength="2" maxLength="200" required/>
                <span className="popup__input-error profession-input-error"></span>
            </PopupWithForm>
            
            <PopupWithForm name="add" title="Новое место" button="Сохранить" isOpen={isAddPlacePopupOpen} onClose={closeAllPopups}>
                <input id="title-input" className="popup__input popup__input_type_title" type="text" name="name" placeholder="Название" minLength="2" maxLength="30" required/>
                <span className="popup__input-error title-input-error"></span>
                <input id="link-input" className="popup__input popup__input_type_link" type="url" name="link" placeholder="Ссылка на картинку" required/>
                <span className="popup__input-error link-input-error"></span>
            </PopupWithForm>

            <PopupWithForm name="avatar" title="Обновить аватар" button="Сохранить" isOpen={isEditAvatarPopupOpen} onClose={closeAllPopups}>
                <input id="avatar-input" className="popup__input popup__input_type_avatar" type="url" name="avatar" placeholder="Ссылка на аватар" required/>
                <span className="popup__input-error avatar-input-error"></span>
            </PopupWithForm>

            <PopupWithForm name="confirm" title="Вы уверены?" button="Да" />

            <ImagePopup card={selectedCard} onClose={closeAllPopups} />

        </div>
    );
}

export default App;
