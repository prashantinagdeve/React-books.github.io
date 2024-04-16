import Bookview from './Components/Bookview';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Newnav from './Components/Newnav';
import Login from './Components/Login';


function App() {
  return (
    <Router>
        <Newnav/>
        <Routes>

          <Route path='/' element={<Bookview/>} />
          <Route path='/Login' element={<Login/>} />
         
          
          
          
          

        </Routes>
      </Router>
  );
}

export default App;
