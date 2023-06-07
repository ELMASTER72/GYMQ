import '../App.css'
import { HomeNavBar } from '../Layouts/HomeNavBar';
import { MainHome } from '../Layouts/MainHome';


export function Home() {
    return ( 
        <div>
            <div className='home_header'>
                <div><HomeNavBar/></div>
            </div>
            <div className='home_main'>
                <div><MainHome/></div>
            </div>
        </div>
    );
}