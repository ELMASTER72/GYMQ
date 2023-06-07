import '../App.css'
import { MainHome } from '../Layouts/MainHome';
import { NavBarUser } from '../Layouts/NavBarUser';

export function HomeUser() {
    return ( 
        <div>
            <div className='home_header'>
                <div><NavBarUser/></div>
            </div>
            <div className='home_main'>
                <div><MainHome/></div>
            </div>
        </div>
    );
}