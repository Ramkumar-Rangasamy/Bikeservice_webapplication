import './App.css';

import 'bootstrap/dist/css/bootstrap.css';

import { BrowserRouter,Routes,Route } from 'react-router-dom';
import { User } from './Components/Userlogin/User';
import { Booking } from './Components/booking/Booking';


function App() {
  return (
    <>
    <BrowserRouter>
        <Routes>
          <Route path='/' element={[<User/>]}/>
          <Route path='/booking' element={[<Booking/>]}/>
        </Routes>
      </BrowserRouter>
    
    </>
  );
}

export default App;
