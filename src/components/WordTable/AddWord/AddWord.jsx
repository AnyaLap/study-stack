import { useContext, useState } from "react";
import { MyContext } from '../../../context/Context';
import "./AddWord.css";
import { isLatinLowerCase, isCyrillicLowerCase, isTranscriptionValid, hasEmptyFields } from '../../../validation';

export const AddWord = () => {
    const { addWord } = useContext(MyContext);

    const [newWord, setNewWord] = useState({
        english:"",
        russian:"",
        transcription:"",
        tags: "newWord",
        tags_json:"newWord",
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        
         // Проверка пустых полей
        if (hasEmptyFields(newWord.english, newWord.transcription, newWord.russian)) return alert("Ошибка: Все поля должны быть заполнены.");
         // Проверка на правильность ввода
        if (!isLatinLowerCase(newWord.english)) return alert("Ошибка: Слово должно содержать только латинские буквы в нижнем регистре.");
        if (!isCyrillicLowerCase(newWord.russian)) return alert("Ошибка: Перевод должен содержать только кириллицу в нижнем регистре.");
        if (!isTranscriptionValid(newWord.transcription)) return alert("Ошибка: Транскрипция может содержать только латинские буквы и специальные символы.");

        addWord(newWord);
        setNewWord({
            english: "",
            russian: "",
            transcription: "",
            tags: "newWord",
            tags_json:"newWord",
        });
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setNewWord((prevValue) => ({ ...prevValue, [name]: value }));
    }

    return (
        <form onSubmit={handleSubmit} className="form-word">
            <div>
                    <input
                        type="text"
                        name="english"
                        value={newWord.english}
                        className="form-input td_input"
                        placeholder="Слово"
                        onChange={handleChange}
                        required
                    />
            </div>
            <div>
                    <input
                        type="text"
                        name="transcription"
                        value={newWord.transcription}
                        className="form-input td_input"
                        placeholder="Транскрипция"
                        onChange={handleChange}
                        required
                    />
            </div>
            <div>
                    <input
                        type="text"
                        name="russian"
                        value={newWord.russian}
                        className="form-input td_input"
                        placeholder="Перевод"
                        onChange={handleChange}
                        required
                    />
            </div>
            <button type="submit" className='table-btn'>Добавить Слово</button>
        </form>
    );
};