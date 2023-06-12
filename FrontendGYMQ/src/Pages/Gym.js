import '../App.css'
import DataGym from '../Layouts/DataGym/DataGym';
import { NavBar } from '../Layouts/NavBar/NavBar';

export function Gym() {
    return ( 
        <div className='gym'>
            <div className='header'><NavBar/></div>
            <div className='gymMain'><DataGym/></div>           
        </div>
    );
}