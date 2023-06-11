import '../App.css'
import { NavBar } from '../Layouts/NavBar/NavBar';
import GymCards from '../Ui/Cards/GymCards';

export function Gym() {
    return ( 
        <div className='gym'>
            <div className='header'><NavBar/></div>
            <div className='gymMain'><GymCards/></div>           
        </div>
    );
}