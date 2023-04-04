
import './App.css';
import Navbar from './components/Navbar'
import { Route, Routes } from 'react-router-dom';
import Home from './screens/Home';
import About from './screens/About';
import News from './screens/News';

function App() {
  return (
    <>
      <Navbar />
      <div className='screens-con'>
        <Routes>
          <Route exact path='/' Component={Home} />
          <Route exact path='/about' Component={About} />
          <Route exact path='/news' Component={News} />
        </Routes>
      </div>
    </>
    
    
  );
}

export default App;
