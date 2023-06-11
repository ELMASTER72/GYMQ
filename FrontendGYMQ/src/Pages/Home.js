import '../App.css'
import { Main } from '../Layouts/Main/Main';
// import { HomeNavBar } from '../Layouts/HomeNavBar';
// import { MainHome } from '../Layouts/MainHome';
import { NavBar } from '../Layouts/NavBar/NavBar';

export function Home() {
    return ( 
        <div className='home'>
            <div className='header'><NavBar/></div>
            <div className='homePage'><Main/></div>
        </div>
    );
}