import './App.css';
import { Header } from './components/Header/Header';
import { Card } from './components/Card/Card';
import { Footer } from './components/Footer/Footer';
import { words } from './words';
import { WordTable } from './components/WordTable/WordTable';
import { Slider } from './components/Slider/Slider';

function App() {
  return (
    <div className="content">
      <Header />
      <main className="main">
          <div>
            <Slider words={words} />
          </div>
          <div>
            <WordTable/>
          </div>
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
      </main>
      <Footer />
    </div>
  );
}

export default App;