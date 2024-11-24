import './App.css';
import { Header } from './components/Header/Header';
import { Footer } from './components/Footer/Footer';
import { Outlet } from 'react-router-dom';
import { Loader } from './components/Loader/Loader';
import { Provider } from "mobx-react";
import wordsStore from '../src/stores/WordsStore';

function App() {
  return (
    <Provider {...wordsStore}>
    <div className="content">
      <Loader />
      <Header />
      <main className="main">
          <Outlet />
      </main>
      <Footer />
    </div>
    </Provider>
  );
}


export default App;