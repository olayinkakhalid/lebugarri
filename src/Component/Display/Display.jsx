import './Display.css'
import img1 from '../../assets/image 5.jpg'
import img2 from '../../assets/image 4.jpg'
import img3 from '../../assets/image 3.jpg'
import img4 from '../../assets/image 2.jpg'
import img8 from '../../assets/image 8.png'
import img9 from '../../assets/image 9.png'
import img6 from '../../assets/image 6.png'
import React, { useRef } from 'react'
import back_icon from '../../assets/back-button.png'
import next_icon from '../../assets/forward-button.png'

const Display = () => {

    const flex = useRef();
    let tx = 0;

    const slideForward = () => {
        if (tx > -50) {
            tx -= 35;
        }
        flex.current.style.transform = `translateX(${tx}%)`
    }

    const slideBackward = () => {
        if (tx < 0) {
            tx += 35;
        }
        flex.current.style.transform = `translateX(${tx}%)`
    }

    return (
        <div className='display'>
            <img src={back_icon} alt="" className='back-btn' onClick={slideBackward} />

            <div className="img-flex container flex">
                <ul ref={flex}>
                    <li>
                        <img src={img1} alt="" className='img1' />
                    </li>


                    <li>
                        <img src={img2} alt="" className='img2' />
                    </li>

                    <li>
                        <img src={img3} alt="" className='img3' />
                    </li>

                    <li>
                        <img src={img4} alt="" className='img4' />
                    </li>


                    <li>
                        <img src={img8} alt="" className='img8' />
                    </li>

                    <li>
                        <img src={img9} alt="" className='img9' />
                    </li>

                    <li>
                        <img src={img6} alt="" className='img6' />
                    </li>

                </ul>
            </div>

            <img src={next_icon} alt="" className='next-btn' onClick={slideForward} />


            <div className="slider">
                <ul>
                    <li>
                        <img src={img1} alt="" className='img1' />
                    </li>


                    <li>
                        <img src={img2} alt="" className='img2' />
                    </li>

                    <li>
                        <img src={img3} alt="" className='img3' />
                    </li>

                    <li>
                        <img src={img4} alt="" className='img4' />
                    </li>


                    <li>
                        <img src={img8} alt="" className='img8' />
                    </li>

                    <li>
                        <img src={img9} alt="" className='img9' />
                    </li>

                    <li>
                        <img src={img6} alt="" className='img6' />
                    </li>

                </ul>
            </div>
        </div>
    )
}

export default Display