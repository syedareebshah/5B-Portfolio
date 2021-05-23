import NavBar from './comp/nav/nav';
import Home from './comp/home/home'
import Service from './comp/Services/service';
import Prec from './comp/Prec';
import Presenter from './comp/pre';
import PulseExample from './comp/Anim';
import Zoom from 'react-reveal/Zoom';
import Anim from './comp/Anim';
import About from './comp/About/About';
import Contact from './comp/Contact/Contact';

function App() {
  return (
    <div style={{backgroundColor:'#E5F1FB'}}>
      <NavBar />
      <Home />
      <h1>Services</h1>
      <About />
      <h1>Portfolio</h1>
      <Contact />
      
      
    </div>
  );
}

export default App;
