
import './App.css';
import Mainsection from './components/Mainsection/Mainsection';
import Navbar from './components/NavBar/Navbar';
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar2 from './components/NavBar/NavBar2';
import Mainsection2 from './components/Mainsection/Mainsection2';

function App() {
  return (
    <div className="App">
      <NavBar2 />
      <Mainsection2 />
      {/* This is Test Message */}
      {/* <Navbar /> */}
      {/* <Mainsection />
      <Button variant="primary">Primary</Button>{' '} */}
    </div>
  );
}

export default App;
