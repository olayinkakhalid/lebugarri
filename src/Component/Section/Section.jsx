import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import './Section.css'

const Section = () => {

    useEffect(() => {
        AOS.init({ duration: 1000 });
    }, []);

    return (
        <div className='section' data-aos="zoom-in">
            <p className='title'>
                The Gold Standard is Here
            </p>

            <p className='subtitle'>
                Finally, Truly Stone-Free Garri
            </p>


            <div className="ul-display">
                <ul>
                    <li>
                        Garri Lebu delivers a Flawless taste experience, free from impurities, grit, <br />
                        or stress.We combine Artisan processing with Certified standards, making us <br />
                        the Superior choice for your table.Taste the difference quality makes.
                    </li>

                    <li>
                        Crisp, comforting, and full of flavor — garri is more than a meal; it’s a lifestyle. <br />
                        From a quick soak with sugar and milk to a bold bowl of eba and soup, garri <br />
                        keeps it real. Simple roots, rich taste — that’s Africa’s original comfort food.
                    </li>

                    <li>
                        Born from cassava and perfected by tradition, garri stands as a symbol of African <br />
                        strength and ingenuity. It feeds families, fuels dreams, and unites cultures. <br />
                        Every grain tells a story — of hands that worked, hearts that shared, and generations that thrived.
                    </li>
                </ul>

                <ul>
                    <li>
                        Garri is a popular West African food made from fermented and roasted cassava. <br />
                        Its versatility makes it a household favorite — served dry, soaked, or molded as eba. <br />
                        Affordable,nutritious, and loved by millions, garri is proof that great things come from simple roots.
                    </li>

                    <li>
                        Hot day? Soak it cold with milk and sugar. Rainy evening? Roll it into soft eba <br />
                        and pair with rich soup. Garri adjusts to every mood, every table, every story. <br />
                        It’s the one meal that unites people across class, time, and taste.
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default Section