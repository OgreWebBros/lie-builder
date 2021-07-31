import Lie from './components/lie'
import Header from './components/header';
import Footer from './components/footer';

import './App.scss';


function App() {
  return (
    <div class="app">
      <Header />
      <div className="motes motes--back"></div>
      <div className="motes motes--mid"></div>
      <Lie />
      <div className="motes motes--front"></div>
      <Footer />
    </div>
  );
}

export default App;
