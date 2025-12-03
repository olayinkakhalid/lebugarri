import React from 'react'
import { Link } from "react-scroll";
import './Footer.css'
import whatsapp from '../../assets/whatsapp.svg'
import gmail from '../../assets/gmail-icon.svg'
import logo from '../../assets/logo.jpg'

const Contact = () => {
    return (
        <div className='footer contact'>

            <div className="footer-logo">
                <img src={logo} alt="Logo" />
            </div>
            <div className="footer-contact">
                <p>📞 WhatsApp: +234 801 234 5678</p>
                <p>📞 WhatsApp: +234 802 345 6789</p>
                <p>✉️ Email: info@example.com</p>
            </div>

        </div>
    )
}

export default Contact