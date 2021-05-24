import './nav.css'
import { useState } from 'react';


export default function NavBar() {

    const [colorChange, setColorchange] = useState(false);

    const changeNavbarColor = () => {
        if (window.scrollY >= 80) {
            setColorchange(true);
        }
        else {
            setColorchange(false);
        }
    };
    window.addEventListener('scroll', changeNavbarColor);

    return (
        <div> 
            <nav className={colorChange ? 'navBarScroll' : 'navBar'}>
            {/* <div className={colorChange ? 'xyz' : 'bgi'}>
                hy
            </div> */}
                <input type="checkbox" id="check" />
                <label for="check" className="checkbtn">
                    <i className="fas fa-bars"></i>
                </label>
                <label className="logo">S.Areeb</label>
                <ul>
                    <li><a className='act' href="#Home">Home</a></li>
                    <li><a className='act' href="#About">About</a></li>
                    <li><a className='act' href="#Service">Services</a></li>
                    <li><a className='act' href="#Portfolio">Portfolio</a></li>
                    <li><a className='act' href="#Contact">Contact</a></li>
                </ul>
            </nav>
        </div>
    );
}