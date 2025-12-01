import React from 'react'
import { Link } from "react-scroll";
import './Contact.css'
import whatsapp from '../../assets/whatsapp.svg'
import gmail from '../../assets/gmail-icon.svg'
import logo from '../../assets/logo.jpg'

const Contact = () => {
    return (
        <div className='footer contact'>
            <img src={logo} alt="" className='logo' />

            <ul>
                <li>
                    <Link to="header" smooth={true} offset={-200} duration={500}>Home</Link>
                </li>
                <li>
                    <Link to="about" smooth={true} offset={-100} duration={500}>About Us</Link>
                </li>
                <li>
                    <Link to="testimonial" smooth={true} offset={0} duration={500}>Testimonial</Link>
                </li>
                <li>
                    <Link to="contact" smooth={true} offset={0} duration={500}>Contact Us</Link>
                </li>
                <li>
                    <a href="#">E-commerce</a>
                </li>
            </ul>



            <p className='phone'>
                <img src={whatsapp} alt="" className='whatsapp' />

                +234 907 556 1339 <br />
                +234 815 557 1409
            </p>

            <p className='email'>
                <img src={gmail} alt="" className='mail' />

                Mufadentltd@gmail.com
            </p>

        </div>
    )
}

export default Contact