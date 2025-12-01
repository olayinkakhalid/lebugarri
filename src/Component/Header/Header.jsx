import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import './Header.css'
import garri from '../../assets/image.jpg'

const Header = () => {

    useEffect(() => {
        AOS.init({ duration: 1000 });
    }, []);

    return (
        <div className='header container' data-aos="fade-up">
            <p className='content'>
                Get your <br />
                <span>Garri here</span>
            </p>

            <img src={garri} alt="" className='banner' />
        </div>
    )
}

export default Header