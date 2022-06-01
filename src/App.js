

import Home from './components/Home';
import Nav from './components/Nav';
import Slide from './components/Slide';
import styled from 'styled-components';
import Footer from './components/Footer';
import {BrowserRouter} from 'react-router-dom'

function App() {

  
  return (
    <BrowserRouter>
    <div className="App">
      <Appstyle>

        <Nav />
        <Slide />
        <Home />
        <Footer />
      </Appstyle>
    </div>
    </BrowserRouter>
  );
}

export default App;
const Appstyle= styled.div`
 background: #282828;

`;
