import { Route, Routes } from 'react-router-dom'
import { Home } from './Pages/Home';
import { HomeUser } from './Pages/HomeUser';
import { Routines } from './Pages/Routines';
import { RoutinesUser } from './Pages/RoutinesUser';
import { Gym } from './Pages/Gym';
import { Information } from './Pages/Information';

function App() {
  return (
  <Routes>
    <Route path='/' element={<Home/>}/>
    <Route path='/home' element={<HomeUser/>}/>
    <Route path='/routines' element={<Routines/>}/>
    <Route path='/routinesuser' element={<RoutinesUser/>}/>
    <Route path='/gimnasios' element={<Gym/>}/>
    <Route path='/info' element={<Information/>}/>
  </Routes>
  );
}

export default App;
