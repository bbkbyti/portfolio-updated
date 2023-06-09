
import './App.css';
import { Routes, Route } from 'react-router-dom'

import Home from './pages/Home';
import Projects from './pages/Projects'
import Experience from './pages/Experience';
import Navbar from './components/Navbar';
import Footer from './components/Footer';



function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route exact path='/' element={<Home />} />
        <Route exact path='/projects' element={<Projects />} />
        <Route exact path='/experience' element={<Experience />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
