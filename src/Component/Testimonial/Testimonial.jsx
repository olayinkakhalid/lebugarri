import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import './Testimonial.css'

const Testimonial = () => {

    useEffect(() => {
        AOS.init({ duration: 1000 });
    }, []);

    return (
        <div className='testimonial' data-aos="fade-up">
            <p className='title'>
                Testimonial
            </p>

            <div className="flex-card">
                <div className="card">
                    <div className="header-con">
                        <img src="" alt="" />

                        <p> Lorem ipsum dolor</p>
                    </div>

                    <p className='content'>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo corrupti tempore nihil neque similique, animi quos necessitatibus aperiam minus id nisi quas quibusdam sit voluptatibus laboriosam dolorum esse eligendi alias?
                    </p>
                </div>

                <div className="card">
                    <div className="header-con">
                        <img src="" alt="" />

                        <p> Lorem ipsum dolor</p>
                    </div>

                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo corrupti tempore nihil neque similique, animi quos necessitatibus aperiam minus id nisi quas quibusdam sit voluptatibus laboriosam dolorum esse eligendi alias?
                    </p>
                </div>

                <div className="card">
                    <div className="header-con">
                        <img src="" alt="" />

                        <p> Lorem ipsum dolor</p>
                    </div>

                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo corrupti tempore nihil neque similique, animi quos necessitatibus aperiam minus id nisi quas quibusdam sit voluptatibus laboriosam dolorum esse eligendi alias?
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Testimonial