import '../App.css'
import { HomeNavBar } from '../Layouts/HomeNavBar';
import InfoGym from '../Layouts/InfoGym';

export function Information() {
    return ( 
        <div>
            <div className='home_header'>
                <div><HomeNavBar/></div>
            </div>
            <div className='infoGym'>
                <InfoGym/>
            </div>
        </div>
    );
}