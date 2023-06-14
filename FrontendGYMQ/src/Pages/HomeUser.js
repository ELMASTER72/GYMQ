import '../App.css'
import { UserNavBar } from '../Layouts/NavBar/UserNavBar';
import { MainHome } from '../Layouts/MainHome';

export function HomeUser() {
    return ( 
        <div>
            <div className='header'><UserNavBar/></div>
            <div className='homePage'><MainHome/></div>
        </div> 
    );
}