import { Route, Routes } from 'react-router-dom'
import { Home } from './Pages/Home';
import { HomeUser } from './Pages/HomeUser';
import { Routines } from './Pages/Routines';
import { RoutinesUser } from './Pages/RoutinesUser';
import { Gym } from './Pages/Gym';
import { Information } from './Pages/Information';
import { Store } from './Pages/Store';
import { Gimnasios } from './Pages/Gimnasios';
import Logins from './Layouts/Login';
import RequireAuth from './Layouts/RequireAuth';
import { StoreUser } from './Pages/StoreUser';
import { GymUser } from './Pages/GymUser';

function App() {
  return (
  <Routes>
    <Route path='/' element={<Home/>}/>
    <Route path='/Home' element={<HomeUser/>}/>
    <Route path='/login' element={<Logins/>}/>
    <Route path='/Rutinas' element={<Routines/>}/>
    <Route path='/Usuario-Rutinas' element={<RoutinesUser/>}/>
    <Route path='/Gimnasios' element={<Gym/>}/>
    <Route path='/Usuario-Gimnasios' element={<GymUser/>}/>
    <Route path='/Informacion' element={<Gimnasios/>}/>
    <Route element={<RequireAuth allwedRoles={[2001]}/>}>
      
    </Route>
    <Route path='/Usuario-Tienda' element={<StoreUser/>}/>
    <Route path='/Tienda' element={<Store/>}/>
    <Route path='/info' element={<Information/>}/>
  </Routes>
  ); 
}

export default App;
