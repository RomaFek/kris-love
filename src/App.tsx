import React, { useState } from 'react';
import './App.css';
import photo from '../assets/photo_2024-10-27 19.14.49.jpeg';
import photo2 from '../assets/photo_2024-10-27 19.14.55.jpeg';


function App() {
    const [message, setMessage] = useState('');
    const [isModalOpen, setModalOpen] = useState(false);
    const [selectedFact, setSelectedFact] = useState(null);
    interface Fact {
        label: string;
        text: any;
    }
    const facts = [
        { label: 'Факт 1', text: 'Кристина любит путешествия.' },
        { label: 'Факт 2', text: 'Кристиночка обожает уютные вечера с M&Ms и интересным сериалом.' },
        { label: 'Факт 3', text: 'Её улыбка способна поднимать настроение не только мне, но и всем вокруг.' },
        { label: 'Факт 4', text: 'Малышка знает, как создать атмосферу в доме, и всегда украшает его с любовью.' },
        { label: 'Факт 5', text: 'Она всегда поддержит и даст дельный совет в любой ситуации, благодаря этому я добился успехов.' },
        { label: 'Факт 6', text: 'Её чувство стиля - это что-то особенное. Она всегда выглядит великолепно!' },
        { label: 'Факт 7', text: 'У неё есть любимые шоколадки kinder, которые помогают сделать ее счастливее.' },
        { label: 'Факт 8', text: 'Её любимый цвет - розовый, именно поэтому страничка в таких цветах.' },
        { label: 'Факт 9', text: 'Она не боится быть искренней.' },
        { label: 'Факт 10', text: 'Кристиночка обожает прогулки и всегда добивается цели по шагам.' },
        { label: 'Факт 11', text: 'Она не боится пробовать новое.' },
        { label: 'Факт 12', text: 'Для меня каждый день рядом с ней — это маленький праздник' },
    ];

    const showMessage = () => {
        setMessage('Милая, это всего лишь набросок на скорую руку. Если тебе понравится идея, обещаю сделать для тебя сайт, который затмит любой сайт в мире! 💖😄');
    };

    const openModal = (fact: Fact) => {
        setSelectedFact(fact.text);
        setModalOpen(true);
    };

    const closeModal = () => {
        setModalOpen(false);
        setSelectedFact(null);
    };

    return (
        <div className="container">
            <h1>Интернет страничка самой прекрасной девушки на свете!</h1>

            <div className="top-section">
                <img className="photo" src="/assets/photo_2024-10-27 19.14.49.jpeg" alt="Kristina"/>
                <div className="text">
                    <p>Моя дорогая Кристина, я создал эту страницу, чтобы каждый смог хотя бы немного понять, насколько
                        ты необыкновенна и прекрасна.
                        Этот проект — лишь скромная попытка выразить, как много ты для меня значишь.
                        Я мечтал передать через него каждую искру моей любви, чтобы ты, читая эти строки, почувствовала,
                        как сильно бьется мое сердце ради тебя.
                        Ты — мой свет, моя опора, моя вдохновляющая муза. Ты наполняешь мой мир смыслом, и ради твоей
                        улыбки я готов на всё.
                        Ты для меня — целый мир, и если бы мне пришлось отдать за тебя свою жизнь, я бы сделал это, не
                        раздумывая.
                        Я люблю тебя бесконечно, и каждый миг, проведенный рядом с тобой, для меня бесценен.
                    </p>
                </div>
            </div>

            <div className="facts-photo-section">
                <div className="facts-section">
                    <div className="facts-semi-section">
                        {facts.map((fact, index) => (
                            <button key={index} className="fact" onClick={() => openModal(fact)} aria-haspopup="dialog">
                                {fact.label}
                            </button>
                        ))}
                    </div>
                    <img className="photo2" src="/assets/photo_2024-10-27 19.14.52.jpeg" alt="Kristina"/>
                </div>
            </div>

            {isModalOpen && (
                <div className="modal" role="dialog" aria-modal="true">
                    <div className="modal-content">
                        <span className="close-button" onClick={closeModal}>&times;</span>
                        <p>{selectedFact}</p>
                    </div>
                </div>
            )}

            <div className="content-section">
                <button onClick={showMessage}>Пытаюсь оправдаться</button>
            </div>
            {message && <p className="message">{message}</p>}
        </div>
    );
}

export default App;
