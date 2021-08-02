import Lie from './components/lie'
import Header from './components/header';
import Footer from './components/footer';

import './App.scss';


function App() {
  return (
    <div class="app">
      <Header />
      <svg className="motes motes--back" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 71.14">
        <path d="M48 24A24 24 0 0024 0a24.013 24.013 0 00-1.57 48A44.55 44.55 0 017.12 71.14C29.87 70.14 48 50.64 48 26.81v-1.59c-.01-.41 0-.81 0-1.22zM100 24A24 24 0 0076 0a24.013 24.013 0 00-1.57 48 44.55 44.55 0 01-15.31 23.14c22.75-1 40.88-20.5 40.88-44.33v-1.59c-.01-.41 0-.81 0-1.22z" />
      </svg>

      <div className="motes motes--mid"></div>
      <Lie />
      <svg className="motes motes--front" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 71.14">
        <path d="M48 24A24 24 0 0024 0a24.013 24.013 0 00-1.57 48A44.55 44.55 0 017.12 71.14C29.87 70.14 48 50.64 48 26.81v-1.59c-.01-.41 0-.81 0-1.22zM100 24A24 24 0 0076 0a24.013 24.013 0 00-1.57 48 44.55 44.55 0 01-15.31 23.14c22.75-1 40.88-20.5 40.88-44.33v-1.59c-.01-.41 0-.81 0-1.22z" />
      </svg>
      <Footer />
    </div>
  );
}

export default App;
