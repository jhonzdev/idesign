import React, {useEffect} from 'react';
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
                        <ImgCol1 src="https://picsum.photos/300/600" alt="Image 1" />
                        <ImgCol2 src="https://picsum.photos/300/300" alt="Image 2" />
                        <ImgCol3 src="https://picsum.photos/600/300" alt="Image 3" />
                        <ImgCol4 src="https://picsum.photos/300/300" alt="Image 4" />
                        <ImgCol5 src="https://picsum.photos/300/300" alt="Image 5" />
                        <ImgCol6 src="https://picsum.photos/300/600" alt="Image 6" />
                        <ImgCol7 src="https://picsum.photos/600/300" alt="Image 7" />
                        <ImgCol8 src="https://picsum.photos/300/300" alt="Image 8" />
                    </PortWrapper>
                </PortSemiCont>
            </PortContainer>
        </>
    )
}

export default Portfolio
