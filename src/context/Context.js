import { createContext, useEffect, useState } from "react";

export const MyContext = createContext();

export const MyProvider = ({children}) => {

    const [wordsContext, setWordsContext] = useState([]);

    useEffect(() => {
        fetch('http://itgirlschool.justmakeit.ru/api/words')
        .then((response) => {
            if (!response.ok) {
                throw new Error ('not ok');
            }
            else {
                return response.json();
            }
        })
        .then((data) => {
            setWordsContext(data);
        })
        .catch((error) => {
            console.error('Error data:', error);
        });
    }, [wordsContext]);

    const addWord = (newWord) => {
        fetch('http://itgirlschool.justmakeit.ru/api/words/add', {
            mode: 'no-cors',
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(newWord),
        })
            .then((response) => {
                if (!response.ok) {
                    throw new Error('Failed to add word');
                }
                return response.json();
            })
            .then((data) => {
                setWordsContext((prev) => [...prev, data]); // Добавьте новое слово в контекст
            })
            .catch((error) => {
                console.error('Error adding word:', error);
            });
    };

    const updateWord = (id, updatedWord) => {
        fetch(`http://itgirlschool.justmakeit.ru/api/words/${id}/update`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(updatedWord),
        })
            .then((response) => {
                if (!response.ok) {
                    throw new Error('Failed to update word');
                }
                return response.json();
            })
            .then((data) => {
                setWordsContext((prev) => 
                    prev.map((word) => (word.id === id ? data : word)) // Обновите слово в контексте
                );
            })
            .catch((error) => {
                console.error('Error updating word:', error);
            });
    };

    const deleteWord = (id) => {
        fetch(`http://itgirlschool.justmakeit.ru/api/words/${id}/delete`, {
            method: 'POST',
        })
            .then((response) => {
                if (!response.ok) {
                    throw new Error('Failed to delete word');
                }
                // Удалите слово из контекста
                setWordsContext((prev) => prev.filter((word) => word.id !== id));
            })
            .catch((error) => {
                console.error('Error deleting word:', error);
            });
    };


    return <MyContext.Provider value={{ wordsContext, setWordsContext, addWord, updateWord, deleteWord}}>{children}</MyContext.Provider>;
}
