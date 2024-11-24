import { makeAutoObservable, runInAction } from "mobx";
import wordsDef from '../wordsDef.json';

class WordsStore {

    wordsContext = [];

    constructor() {
        makeAutoObservable(this);
        this.fetchWords();
    }

    fetchWords = () => {
        fetch('/api/words')
        .then((response) => {
            if (!response.ok) {
                throw new Error ('not ok');
            }
            else {
                return response.json();
            }
        })
        .then((data) => {
            runInAction(() => {
                this.wordsContext = data;
            });
        })
        .catch((error) => {
            console.error('Error data:', error);
            runInAction(() => {
                this.wordsContext = wordsDef;
            });
        });
    };

    addWord = (newWord) => {
        fetch('/api/words/add', {
            mode: 'no-cors',
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(newWord),
        })
            .then((response) => {
                console.log(response);
                if (!response.ok) {
                    throw new Error('Failed to add word');
                }
                return response.json();
            })
            .then((addedWord) => {
                runInAction(() => {
                    this.wordsContext.push(addedWord);
                });
            })
            .catch((error) => {
                console.error('Error adding word:', error);
            });
    };

    updateWord = (id, updatedWord) => {
        fetch(`/api/words/${id}/update`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(updatedWord),
        })
            .then((response) => {
                console.log(response);
                if (!response.ok) {
                    throw new Error('Failed to update word');
                }
                return response.json();
            })
            .then((data) => {
                runInAction(() => {
                    this.wordsContext = this.wordsContext.map((word) => (word.id === data.id ? data : word));
                });
            })
            .catch((error) => {
                console.error('Error updating word:', error);
            });
    };

    deleteWord = (id) => {
        fetch(`/api/words/${id}/delete`, {
            method: 'POST',
        })
            .then((response) => {
                console.log(response);
                if (!response.ok) {
                    throw new Error('Failed to delete word');
                }
                runInAction(() => {
                    this.wordsContext = this.wordsContext.filter((item) => item.id !== id);
                });
            })
            .catch((error) => {
                console.error('Error deleting word:', error);
            });
    };

}
const wordsStore = new WordsStore();
export default wordsStore;