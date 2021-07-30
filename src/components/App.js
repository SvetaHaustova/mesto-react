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
    const [selectedCard, setSelectedCard] = React.useState(false);

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
        setSelectedCard(card);
    }

    function closeAllPopups() {
        setIsEditAvatarPopupOpen(false);
        setIsEditProfilePopupOpen(false);
        setIsAddPlacePopupOpen(false);
        setSelectedCard(false);
    }

    return (
        <body className="body">
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
            
            <PopupWithForm name="edit" title="Редактировать профиль" isOpen={isEditProfilePopupOpen} onClose={closeAllPopups}>
                <input id="name-input" className="popup__input popup__input_type_name" type="text" name="name" placeholder="Имя" minlength="2" maxlength="40" required/>
                <span className="popup__input-error name-input-error"></span>
                <input id="profession-input" className="popup__input popup__input_type_profession" type="text" name="profession" placeholder="Род деятельности" minlength="2" maxlength="200" required/>
                <span className="popup__input-error profession-input-error"></span>
                <button className="popup__save-button" type="submit">Сохранить</button>
            </PopupWithForm>
            
            <PopupWithForm name="add" title="Новое место" isOpen={isAddPlacePopupOpen} onClose={closeAllPopups}>
                <input id="title-input" className="popup__input popup__input_type_title" type="text" name="name" placeholder="Название" minlength="2" maxlength="30" required/>
                <span className="popup__input-error title-input-error"></span>
                <input id="link-input" className="popup__input popup__input_type_link" type="url" name="link" placeholder="Ссылка на картинку" required/>
                <span className="popup__input-error link-input-error"></span>
                <button className="popup__save-button" type="submit">Сохранить</button>
            </PopupWithForm>

            <PopupWithForm name="avatar" title="Обновить аватар" isOpen={isEditAvatarPopupOpen} onClose={closeAllPopups}>
                <input id="avatar-input" className="popup__input popup__input_type_avatar" type="url" name="avatar" placeholder="Ссылка на аватар" required/>
                <span className="popup__input-error avatar-input-error"></span>
                <button className="popup__save-button" type="submit">Сохранить</button>
            </PopupWithForm>

            <PopupWithForm name="confirm" title="Вы уверены?" />

            <ImagePopup card={selectedCard} onClose={closeAllPopups} />

        </body>
    );
}

export default App;
