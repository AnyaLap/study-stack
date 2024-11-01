import React, { useState } from 'react';
import "./WordTable.css";
import words from '../../words.json';

export const WordTable = () => {

  const [editIndex, setEditIndex] = useState(null);
  const [shouldChangeBackground, setShouldChangeBackground] = useState(false);
  const [editedWord, setEditedWord] = useState({id: null, english: '', transcription: '', russian: ''});
  const [wordList, setWordList] = useState(words);
  
  // Добавление слова в таблицу
  const handleEdit = (id, word) => {
    setEditIndex(id);
    setShouldChangeBackground(true);
    setEditedWord(word);
  }
// Изменение слова в таблице
  const handleChange = (key, value) => {
    setEditedWord({ ...editedWord, [key]: value });
  }
// Сохранение слова в таблице
  const handleSave = () => {

    const updatedList = wordList.map((word) => {
      if (word.id === editedWord.id) {
        return editedWord;
      }
      return word;
    });
  
    setWordList(updatedList);
    setEditIndex(null);
  }
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
                    <input className='td_input'
                    type="text"
                    value={editedWord.english}
                    onChange={(e) => handleChange('english', e.target.value)}
                    />
                ) : (
                    <span>{word.english}</span>
                )}
            </td>
            <td className={shouldChangeBackground && editIndex === id ? 'changed-background' : ''}>
                {editIndex === id ? (
                    <input className='td_input'
                    type="text"
                    value={editedWord.transcription}
                    onChange={(e) => handleChange('transcription', e.target.value)}
                    />
                ) : (
                    <span>{word.transcription}</span>
                )}
            </td>
            <td className={shouldChangeBackground && editIndex === id ? 'changed-background' : ''}>
                {editIndex === id ? (
                    <input className='td_input'
                    type="text"
                    value={editedWord.russian}
                    onChange={(e) => handleChange('russian', e.target.value)}
                    />
                ) : (
                    <span>{word.russian}</span>
                )}
            </td>
            
            <td>
                {editIndex === id ? (
                    <div className="table-btn__container">
                    <button className=' table-btn' onClick={handleSave}>Сохранить</button>
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
  );
}