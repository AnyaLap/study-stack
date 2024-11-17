import './App.css';
import { Header } from './components/Header/Header';
import { Footer } from './components/Footer/Footer';
import { Outlet } from 'react-router-dom';
import { MyProvider } from './context/Context';

function App() {
  return (
    <MyProvider>
    <div className="content">
      <Header />
      <main className="main">
          <Outlet />
      </main>
      <Footer />
    </div>
    </MyProvider>
  );
}

export default App;