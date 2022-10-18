
import './App.css';
import Mainsection from './components/Mainsection/Mainsection';
import Navbar from './components/NavBar/Navbar';
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar2 from './components/NavBar/NavBar2';
import Mainsection2 from './components/Mainsection/Mainsection2';
import CardContainer from './components/Section-three/CardContainer';
import SectionFour from "./components/section-four/SectionFour";
import Footer from './components/Footer/Footer';

function App() {
  return (
    <div className="App">
      <NavBar2 />
      <Mainsection2 />
      <CardContainer />
      {/* This is Test Message */}
      {/* <Navbar /> */}
      {/* <Mainsection />
      <Button variant="primary">Primary</Button>{' '} */}
      <SectionFour />
      <Footer />
    </div>
  );
}

export default App;
