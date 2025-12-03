import './Contactpage.css'
import 'aos/dist/aos.css'
import AOS from 'aos'
import React, { useEffect } from 'react'
import shop from '../../assets/shop.jpg'

const Contactpage = () => {

    useEffect(() => {
        AOS.init({ duration: 1000 });
    }, []);

    return (
        <div className="contact-container" data-aos="fade-up">
            <div className="map">
                <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3960.123456!2d3.3792!3d6.5244!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x103bf58a1b12345%3A0xabcdef1234567890!2sYour+Place!5e0!3m2!1sen!2sng!4v1234567890"
                    style={{ border: 0 }}
                    allowFullScreen=""
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="location-map"
                    width="600"
                    height="400"
                ></iframe>
            </div>


            <div className="form">
                <form>
                    <div className="form-flex">
                        <div className="details">
                            <label htmlFor=""></label>
                            <input type="text" placeholder="First Name" required />

                            <label htmlFor=""></label>
                            <input type="email" placeholder="Valid mail" required />
                        </div>

                        <div className="link">
                            <label htmlFor=""></label>
                            <input type="text" placeholder="Last Name" required />

                            <label htmlFor=""></label>
                            <input type="email" placeholder="Other names (optional)" />
                        </div>
                    </div>

                    <textarea name="" id="" rows={8} placeholder='what makes you come here...'>

                    </textarea>
                </form>

                <button className='form-btn'>
                    submit
                </button>
            </div>

        </div>

    )
}

export default Contactpage