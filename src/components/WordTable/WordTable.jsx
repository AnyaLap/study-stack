import React, { useState, useEffect, useContext} from 'react';
import "./WordTable.css";
import wordsDef from '../../wordsDef.json';
import { ModalHome } from '../Modal/ModalHome';
import { MyContext } from '../../context/Context';
import { AddWord } from './AddWord/AddWord';
import { isLatinLowerCase, isCyrillicLowerCase, isTranscriptionValid, hasEmptyFields } from '../../validation';

export const WordTable = () => {

  const [editIndex, setEditIndex] = useState(null);
  const [editedWord, setEditedWord] = useState({english: '', transcription: '', russian: ''});
  const { wordsContext, deleteWord, updateWord} = useContext(MyContext);
  const [wordList, setWordList] = useState(wordsDef);
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Обновляем wordList, когда wordsContext изменяется
  useEffect(() => {
    setWordList(wordsContext.length ? wordsContext : wordsDef);
  }, [wordsContext]);

  // Откроем модальное окно при загрузке компонента
  useEffect(() => {
    setIsModalOpen(true);
  }, []);
  // Закроем модальное окно при загрузке компонента
  const closeModal = () => setIsModalOpen(false);

  // Добавление слова в таблицу
  const handleEdit = (id, word) => {
    setEditIndex(id);
    setEditedWord(word);
  };
  // Изменение слова в таблице
  const handleChange = (key, value) => {
    setEditedWord({ ...editedWord, [key]: value });
  };

  // Сохранение слова в таблице
  const handleSave = () => {
    const { english, transcription, russian } = editedWord;
    
    if (hasEmptyFields(editedWord)) return alert("Ошибка: Все поля должны быть заполнены.");

    if (!isLatinLowerCase(english)) return alert("Ошибка: Слово должно содержать только латинские буквы в нижнем регистре.");
    if (!isCyrillicLowerCase(russian)) return alert("Ошибка: Перевод должен содержать только кириллицу в нижнем регистре.");
    if (!isTranscriptionValid(transcription)) return alert("Ошибка: Транскрипция может содержать только латинские буквы и специальные символы.");
    // Если все проверки пройдены
    console.log("Сохраненные данные:", editedWord);

    updateWord(editedWord.id, editedWord);
    setEditIndex(null);
  };
  // Отмена
    const handleCancel = () => setEditIndex(null);
  // Удаление слова
    const handleDelete = (id) => {
      deleteWord(id);
    console.log(`Удаление слова с индексом ${id}`);
  }
  return (
      <>
    <div className='table'>
    <AddWord />
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

            <td className={editIndex === id ? 'changed-background' : ''}>{word.id}</td>
            <td className={editIndex === id ? 'changed-background' : ''}>
                {editIndex === id ? (
                    <input
                    type="text"
                    name="english"
                    value={editedWord.english}
                    onChange={(e) => handleChange('english', e.target.value)}
                    className={`td_input ${editedWord.english ? '' : 'error-input'}`}
                    />
                ) : (
                    <span>{word.english}</span>
                )}
            </td>
            <td className={editIndex === id ? 'changed-background' : ''}>
                {editIndex === id ? (
                    <input
                    type="text"
                    name="transcription"
                    value={editedWord.transcription}
                    onChange={(e) => handleChange('transcription', e.target.value)}
                    className={`td_input ${editedWord.transcription ? '' : 'error-input'}`}
                    />
                ) : (
                    <span>{word.transcription}</span>
                )}
            </td>
            <td className={editIndex === id ? 'changed-background' : ''}>
                {editIndex === id ? (
                    <input
                    type="text"
                    name="russian"
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
    </div>
    <div>
    <ModalHome isOpen={isModalOpen} onClose={closeModal}/>
    </div>
    </>
  );
}