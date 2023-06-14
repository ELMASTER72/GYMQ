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
import { Payment } from './Pages/Payment';

function App() {
  return (
  <Routes>
    <Route path='/' element={<Home/>}/>
    <Route path='/login' element={<Logins/>}/>
    <Route path='/Rutinas' element={<Routines/>}/>
    <Route path='/Gimnasios' element={<Gym/>}/>
    <Route path='/Informacion' element={<Gimnasios/>}/>
    <Route path='/Pago' element={<Payment/>}/>
    <Route element={<RequireAuth allwedRoles={[2001]}/>}>
      
    </Route>
    <Route path='/Tienda' element={<Store/>}/>
    <Route path='/home' element={<HomeUser/>}/>
    <Route path='/routinesuser' element={<RoutinesUser/>}/>
    <Route path='/info' element={<Information/>}/>
  </Routes>
  ); 
}

export default App;
