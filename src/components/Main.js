import React from 'react';
import api from '../utils/api';
import Card from './Card';

function Main({onEditAvatar, onEditProfile, onAddPlace, onCardClick}) {

    const [userName, setUserName] = React.useState('');
    const [userDescription, setUserDescription] = React.useState('');
    const [userAvatar, setUserAvatar] = React.useState('');
    const [cards, setCards] = React.useState([]);

    React.useEffect(() => {   
        Promise.all([api.getUserInfo(), api.getInitialCards()])
            .then(([user, cards]) => {
                setUserName(user.name);
                setUserDescription(user.about);
                setUserAvatar(user.avatar);
                setCards(cards);
            })
            .catch((err) => {
                console.log(err);
            })
    }, [])

    return (
        <main className="content">

            <section className="profile">
                <div className="profile__avatar-edit">
                    <img className="profile__avatar" src={userAvatar} alt="Фото-аватар"/>
                    <button className="profile__avatar-edit-button" type="button" onClick={onEditAvatar}></button>
                </div>
                <div className="profile__info">
                    <div className="profile__edit">
                        <h1 className="profile__name">{userName}</h1>
                        <button className="profile__edit-button" type="button" onClick={onEditProfile}></button>
                    </div>
                    <p className="profile__profession">{userDescription}</p>
                </div>
                <button className="profile__add-button" type="button" onClick={onAddPlace}></button>
            </section>
            
            <section className="elements">
                <ul className="elements__list">
                    {
                        cards.map((card) => 
                            <Card key={card._id} card={card} onCardClick={onCardClick} />
                        )
                    }
                </ul>
            </section>

        </main>
    );
}

export default Main;