import './App.css';
import { Header } from './components/Header/Header';
import { Footer } from './components/Footer/Footer';
import { Outlet } from 'react-router-dom';
import { Loader } from './components/Loader/Loader';

function App() {
  return (
    <div className="content">
      <Loader />
      <Header />
      <main className="main">
          <Outlet />
      </main>
      <Footer />
    </div>
  );
}

export default App;