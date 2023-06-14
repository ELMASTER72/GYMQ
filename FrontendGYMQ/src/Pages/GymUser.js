import '../App.css'
import DataGym from '../Layouts/DataGym/DataGym';
import { UserNavBar } from '../Layouts/NavBar/UserNavBar';

export function GymUser() {
    return ( 
        <div className='gym'>
            <div className='header'><UserNavBar/></div>
            <div className='gymMain'><DataGym/></div>           
        </div>
    );
}