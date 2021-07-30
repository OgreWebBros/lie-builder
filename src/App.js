import Lie from './components/lie'
import Header from './components/header';
import Footer from './components/footer';

import './App.scss';


function App() {
  return (
    <div class="app">
      <Header />
      <div id='stars' className="stars"></div>
      <div id='stars2' className="stars"></div>
      <Lie />
      <div id='stars3' className="stars"></div>
      <Footer />
    </div>
  );
}

export default App;
