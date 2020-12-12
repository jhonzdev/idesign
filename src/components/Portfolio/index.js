import React, {useEffect} from 'react';
import bsize1 from '../../images/bsize1.jpg';
import bsize2 from '../../images/bsize2.jpg';
import up1 from '../../images/up1.jpg';
import up2 from '../../images/up2.jpg';
import mockup1 from '../../images/mockup1.jpg';
import mockup2 from '../../images/mockup2.jpg';
import mockup3 from '../../images/mockup3.jpg';
import mockup4 from '../../images/mockup4.jpg';
import Aos from 'aos';
import 'aos/dist/aos.css';
import { 
    PortContainer,
    PortWraperT,
    PortTitle,
    PortSubtitle,
    PortWrapper,
    PortSemiCont,
    ImgCol1,
    ImgCol2,
    ImgCol3,
    ImgCol4,
    ImgCol5,
    ImgCol6,
    ImgCol7,
    ImgCol8 }
from './PortfolioElements';

const Portfolio = () => {
    useEffect(() => {
        Aos.init({ duration: 2000});
    }, []);
    return (
        <>
            <PortContainer id="portfolio">
                <PortSemiCont>
                    <PortWraperT data-aos="fade-up">
                        <PortTitle>Our Portfolio</PortTitle>
                        <PortSubtitle>See our Beautiful work and awesome project.</PortSubtitle>
                    </PortWraperT>
                    <PortWrapper data-aos="fade-up">
                        <ImgCol1 src={up1} alt="Image 1" />
                        <ImgCol2 src={mockup1} alt="Image 2" />
                        <ImgCol3 src={bsize1} alt="Image 3" />
                        <ImgCol4 src={mockup2} alt="Image 4" />
                        <ImgCol5 src={mockup3} alt="Image 5" />
                        <ImgCol6 src={up2} alt="Image 6" />
                        <ImgCol7 src={bsize2} alt="Image 7" />
                        <ImgCol8 src={mockup4} alt="Image 8" />
                    </PortWrapper>
                </PortSemiCont>
            </PortContainer>
        </>
    )
}

export default Portfolio
