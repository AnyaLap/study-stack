import React, { useState, useEffect} from 'react';
import "./WordTable.css";
import words from '../../words.json';
import { ModalHome } from "../Modal/ModalHome";

export const WordTable = () => {

  const [editIndex, setEditIndex] = useState(null);
  const [shouldChangeBackground, setShouldChangeBackground] = useState(false);
  const [editedWord, setEditedWord] = useState({id: null, english: '', transcription: '', russian: ''});
  const [wordList, setWordList] = useState(words);
  const [isModalOpen, setIsModalOpen] = useState(false);
  // Регулярные выражения для полей таблицы
  const isLatinLowerCase = (str) => /^[a-z]+$/.test(str);
  const isCyrillicLowerCase = (str) => /^[а-яё]+$/.test(str);
  const isTranscriptionValid = (str) => /^[a-zA-Zа-яА-ЯёЁʼˈⁿᵍ-]*$/.test(str);

  useEffect(() => {
    // Откроем модальное окно при загрузке компонента
    setIsModalOpen(true);
  }, []);

  const closeModal = () => {
    // Закроем модальное окно при загрузке компонента
    setIsModalOpen(false);
  };

  // Добавление слова в таблицу
  const handleEdit = (id, word) => {
    setEditIndex(id);
    setShouldChangeBackground(true);
    setEditedWord(word);
  };
// Изменение слова в таблице
  const handleChange = (key, value) => {
    setEditedWord({ ...editedWord, [key]: value });
  };
 // Проверка на наличие пустых полей
 const hasEmptyFields = () => {
  return !editedWord.english || !editedWord.transcription || !editedWord.russian;
};
// Сохранение слова в таблице
  const handleSave = () => {
      if (!hasEmptyFields()) {

        const { english, transcription, russian } = editedWord;
        // Проверка на соответствие условиям
        if (!isLatinLowerCase(english)) {
            alert("Ошибка: Слово должно содержать только латинские буквы в нижнем регистре.");
            return;
        }

        if (!isCyrillicLowerCase(russian)) {
            alert("Ошибка: Перевод должен содержать только кириллицу в нижнем регистре.");
            return;
        }

        if (!isTranscriptionValid(transcription)) {
            alert("Ошибка: Транскрипция может содержать только латинские буквы и специальные символы.");
            return;
        }

        // Если все проверки пройдены
        console.log("Сохраненные данные:", editedWord);

      const updatedList = wordList.map((word) => {
        if (word.id === editedWord.id) {
          return editedWord;
        }
        return word;
      });
    
      setWordList(updatedList);
      setEditIndex(null);
    }
  };
// Отмена
  const handleCancel = () => {
    setEditIndex(null);
  }
// Удаление слова из таблицы с созданием нового массива
  const handleDelete = (id) => {
    const filteredList = wordList.filter((word) => word.id !== id);
    setWordList(filteredList);

    const updatedList = filteredList.map((word, index) => {
      return {...word, id: index + 1};
    });
    setWordList(updatedList);
    setEditIndex(null);
  
    console.log(`Удаление слова с индексом ${id}`);
  }

  return (
      <>
    <table className='table-words'>
      <thead>
        <tr>
          <th>ID</th>
          <th>Слово</th>
          <th>Транскрипция</th>
          <th>Перевод</th>
          <th>Действия</th>
        </tr>
      </thead>
      <tbody>
          {wordList.map((word, id) => (
          <tr key={word.id}>

            <td className={shouldChangeBackground && editIndex === id ? 'changed-background' : ''}>{word.id}</td>
            <td className={shouldChangeBackground && editIndex === id ? 'changed-background' : ''}>
                {editIndex === id ? (
                    <input
                    type="text"
                    value={editedWord.english}
                    onChange={(e) => handleChange('english', e.target.value)}
                    className={`td_input ${editedWord.english ? '' : 'error-input'}`}
                    />
                ) : (
                    <span>{word.english}</span>
                )}
            </td>
            <td className={shouldChangeBackground && editIndex === id ? 'changed-background' : ''}>
                {editIndex === id ? (
                    <input
                    type="text"
                    value={editedWord.transcription}
                    onChange={(e) => handleChange('transcription', e.target.value)}
                    className={`td_input ${editedWord.transcription ? '' : 'error-input'}`}
                    />
                ) : (
                    <span>{word.transcription}</span>
                )}
            </td>
            <td className={shouldChangeBackground && editIndex === id ? 'changed-background' : ''}>
                {editIndex === id ? (
                    <input
                    type="text"
                    value={editedWord.russian}
                    onChange={(e) => handleChange('russian', e.target.value)}
                    className={`td_input ${editedWord.russian ? '' : 'error-input'}`}
                    />
                ) : (
                    <span>{word.russian}</span>
                )}
            </td>
            
            <td>
                {editIndex === id ? (
                    <div className="table-btn__container">
                    <button
                     className={`table-btn ${hasEmptyFields() ? 'disabled' : ''}`}
                     onClick={handleSave}
                     disabled={hasEmptyFields()}
                     >Сохранить
                    </button>
                    <button className='table-btn' onClick={handleCancel}>Отмена</button>
                    </div>
                ) : (
                    <div className='table-btn__container'>
                    <button className='table-btn' onClick={() => handleEdit(id, word)}>Изменить</button>
                    <button className='table-btn' onClick={() => handleDelete(word.id)}>Удалить</button>
                    </div>
                )}
            </td>
          </tr>
        ))}
      </tbody>
    </table>
    <div>
    <ModalHome isOpen={isModalOpen} onClose={closeModal}/>
    </div>
    </>
  );
}