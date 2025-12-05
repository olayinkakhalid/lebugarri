import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import './Nav.css'
import logo from '../../assets/logo.jpg'
import { Link } from "react-scroll";


const Nav = () => {

    useEffect(() => {
        AOS.init({ duration: 1000 });
    }, []);

    return (
        <div className='nav' data-aos="flip-up">
            <img src={logo} alt="" className='logo' />

            <ul>
                <li>
                    {/* <Link to="home" smooth={true} offset={0} duration={500}>Home</Link> */}
                    <a href="/">Home</a>
                </li>
                <li>
                    <Link to="about" smooth={true} offset={-100} duration={500}>About Us</Link>
                </li>
                <li>
                    <Link to="testimonial" smooth={true} offset={0} duration={500}>Testimonial</Link>
                </li>
                <li>
                    {/* <Link to="contact" smooth={true} offset={0} duration={500}>Contact Us</Link> */}
                    <a href="/contact">contact us</a>
                </li>
                <li>
                    <a href="#">E-commerce</a>
                </li>
            </ul>


            <div className='btn'>
                <button>
                    Shop Now
                </button>

            </div>


            <div class="button-container">
                <a href="/">
                    <button class="button">
                        <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 1024 1024" stroke-width="0" fill="currentColor" stroke="currentColor" class="icon">
                            <path d="M946.5 505L560.1 118.8l-25.9-25.9a31.5 31.5 0 0 0-44.4 0L77.5 505a63.9 63.9 0 0 0-18.8 46c.4 35.2 29.7 63.3 64.9 63.3h42.5V940h691.8V614.3h43.4c17.1 0 33.2-6.7 45.3-18.8a63.6 63.6 0 0 0 18.7-45.3c0-17-6.7-33.1-18.8-45.2zM568 868H456V664h112v204zm217.9-325.7V868H632V640c0-22.1-17.9-40-40-40H432c-22.1 0-40 17.9-40 40v228H238.1V542.3h-96l370-369.7 23.1 23.1L882 542.3h-96.1z"></path>
                        </svg>
                    </button>
                </a>
                <a href="">
                    <button class="button">
                        <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24" stroke-width="0" fill="currentColor" stroke="currentColor" class="icon">
                            <path d="M12 2C6.49 2 2 6.49 2 12s4.49 10 10 10 10-4.49 10-10S17.51 2 12 2zm7.93 9h-3.02a14.78 14.78 0 0 0-1.21-4.5A8.03 8.03 0 0 1 19.93 11zM12 4c1.53 1.8 2.58 4.13 2.9 7h-5.8c.32-2.87 1.37-5.2 2.9-7zm-4.7 1.5A14.78 14.78 0 0 0 6.09 11H3.07a8.03 8.03 0 0 1 4.23-5.5zM3.07 13h3.02c.26 2.03 1.01 3.89 2.21 5.5A8.03 8.03 0 0 1 3.07 13zm8.93 7c-1.53-1.8-2.58-4.13-2.9-7h5.8c-.32 2.87-1.37 5.2-2.9 7zm4.7-1.5c1.2-1.61 1.95-3.47 2.21-5.5h3.02a8.03 8.03 0 0 1-4.23 5.5z" />
                        </svg>
                    </button>
                </a>
                <a href="/contact">
                    <button class="button">
                        <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24" stroke-width="0" fill="currentColor" stroke="currentColor" class="icon">
                            <path d="M12 2.5a5.5 5.5 0 0 1 3.096 10.047 9.005 9.005 0 0 1 5.9 8.181.75.75 0 1 1-1.499.044 7.5 7.5 0 0 0-14.993 0 .75.75 0 0 1-1.5-.045 9.005 9.005 0 0 1 5.9-8.18A5.5 5.5 0 0 1 12 2.5ZM8 8a4 4 0 1 0 8 0 4 4 0 0 0-8 0Z"></path>
                        </svg>
                    </button>
                </a>

                <button class="button">
                    <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" stroke-linejoin="round" stroke-linecap="round" viewBox="0 0 24 24" stroke-width="2" fill="none" stroke="currentColor" class="icon">
                        <circle r="1" cy="21" cx="9"></circle>
                        <circle r="1" cy="21" cx="20"></circle>
                        <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path>
                    </svg>
                </button>
            </div>
        </div>
    )
}

export default Nav;