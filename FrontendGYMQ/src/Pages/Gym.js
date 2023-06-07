import '../App.css'
import FileGym from '../Layouts/FileGym';
import { HomeNavBar } from '../Layouts/HomeNavBar';

export function Gym() {
    return ( 
        <div className='gym'>
            <div className='home_header'>
                <div><HomeNavBar/></div>
            </div>
            <div className='gym-target'>
                <FileGym/>
            </div>
            
        </div>
    );
}