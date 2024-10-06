import './App.css';
import { Header } from './components/Header/Header';
import { Card } from './components/Card/Card';
import { Footer } from './components/Footer/Footer';
import { words } from './words';
import { WordTable } from './components/WordTable/WordTable';

function App() {
  return (
    <div className="content">
      <Header />
      <main className="main">
          <div className='container'>
             {words.map((word) => (
                <Card
                  key={word.id}
                  id={word.id}
                  english={word.english}
                  transcription={word.transcription}
                  russian={word.russian}
                  tags={word.tags}
                />
              ))}
          </div>
          <div>
            <WordTable/>
          </div>
      </main>
      <Footer />
    </div>
  );
}

export default App;