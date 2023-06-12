import { Route, Routes } from 'react-router-dom'
import { Home } from './Pages/Home';
import { HomeUser } from './Pages/HomeUser';
import { Routines } from './Pages/Routines';
import { RoutinesUser } from './Pages/RoutinesUser';
import { Gym } from './Pages/Gym';
import { Information } from './Pages/Information';
import { Store } from './Pages/Store';

function App() {
  return (
  <Routes>
    <Route path='/' element={<Home/>}/>
    <Route path='/Rutinas' element={<Routines/>}/>
    <Route path='/Gimnasios' element={<Gym/>}/>
    <Route path='/Tienda' element={<Store/>}/>
    <Route path='/home' element={<HomeUser/>}/>
    <Route path='/routinesuser' element={<RoutinesUser/>}/>
    <Route path='/info' element={<Information/>}/>
  </Routes>
  ); 
}

export default App;
