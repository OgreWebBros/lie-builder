import { BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';

import Footer from './components/footer';
import Header from './components/header';
import Lie from './components/lie'
import Liebrary from './components/liebrary'

import './App.scss';

function App() {
  return (
    <Router basename="/lie-builder">
    <div className="app">
      <Header />
      <div className="motes motes--back"/>
      <div className="motes motes--mid"/>
      <Switch>
            <Route path="/liebrary" render={() => <Liebrary/>}/>
            <Route exact path="/" render={() => <Lie />}/>
        </Switch>
      <div className="motes motes--front"/>
      <Footer />
    </div>
    </Router>
  );
}

export default App;
