import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import './Main.css'
import mainimg from '../../assets/image pic.png'

const Main = () => {

    useEffect(() => {
        AOS.init({ duration: 1000 });
    }, []);

    return (
        <div className='main' data-aos="flip-up">


            <div className="article">
                <p className='title'>Garri — The Pride of Simplicity</p>

                <p className='info'>
                    Garri isn’t just food — it’s culture.
                    Made from finely processed cassava, garri represents creativity, resilience, and the beauty of everyday life. Whether soaked in cold water with sugar and groundnuts or served hot as eba beside rich soups, garri remains a timeless favorite across generations.
                    From rural kitchens to city tables, it tells one story — that simplicity can still be golden.
                </p>

                <button>
                    Shop Now
                </button>
            </div>


            <img src={mainimg} alt="" className='intro' />

        </div>
    )
}

export default Main