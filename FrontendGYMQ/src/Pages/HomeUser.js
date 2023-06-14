import '../App.css'
import { UserNavBar } from '../Layouts/NavBar/UserNavBar';
import { Main } from '../Layouts/Main/Main';

export function HomeUser() {
    return ( 
        <div>
            <div className='header'><UserNavBar/></div>
            <div className='homePage'><Main/></div>
        </div> 
    );
}