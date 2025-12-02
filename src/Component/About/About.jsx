import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import './About.css'
import img from '../../assets/image 7.png'

const About = () => {

    useEffect(() => {
        AOS.init({ duration: 1000 });
    }, []);

    return (
        <div className='about' data-aos="fade-down">
            <div className="sub-about">
                <p className='title'>
                    About Us
                </p>

                <p className='sub-title'>
                    At [Mufad Garri],
                </p>

                <p className='content'>
                    we celebrate the beauty of simplicity through one of Africa’s most beloved foods — Garri. <br />
                    Our mission is to preserve tradition while bringing a modern touch to a timeless favorite. <br />
                    From carefully selected cassava roots to clean, authentic processing, we ensure every grain <br />
                    of garri tells a story of quality, culture, and care.We believe garri is more than food — it’s heritage. <br />
                    Every pack we produce carries the pride of our land, the strength of our people, and the warmth of home. <br />
                    Whether you enjoy it soaked, molded, or shared among friends, our garri connects generations with every taste. <br />
                    Welcome to the home of golden grains — where tradition meets taste.
                </p>
            </div>


            <img src={img} alt="" />


        </div>
    )
}

export default About