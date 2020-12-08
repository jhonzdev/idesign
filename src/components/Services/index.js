import React, {useEffect} from 'react';
import Icon1 from '../../images/logo.png';
import Icon2 from '../../images/banner.png';
import Icon3 from '../../images/label.png';
import Icon4 from '../../images/gdesign.png';
import Aos from 'aos';
import 'aos/dist/aos.css';
import { 
    ServicesContainer, 
    ServicesH1, 
    ServicesWrapper, 
    ServicesCard, 
    ServicesIcon, 
    ServicesH2, 
    ServicesP 
} from './ServicesElements';

const Services = () => {
    useEffect(() => {
        Aos.init({ duration: 2000});
    }, []);
    
    return (
        <ServicesContainer id="services">
            <ServicesH1>Our Services</ServicesH1>
            <ServicesWrapper data-aos="fade-up">
                <ServicesCard>
                    <ServicesIcon src={Icon1} />
                    <ServicesH2>Logo Design</ServicesH2>
                    <ServicesP>We can make you Amazing Logo Design. Dont</ServicesP>
                </ServicesCard>

                <ServicesCard>
                    <ServicesIcon src={Icon2} />
                    <ServicesH2>Banner Design</ServicesH2>
                    <ServicesP>We can make you Tarp and any banner design just.</ServicesP>
                </ServicesCard>

                <ServicesCard>
                    <ServicesIcon src={Icon3} />
                    <ServicesH2>Label Desgin</ServicesH2>
                    <ServicesP>We are making Product Design and Porduct Pack</ServicesP>
                </ServicesCard>

                <ServicesCard>
                    <ServicesIcon src={Icon4} />
                    <ServicesH2>Graphic Design</ServicesH2>
                    <ServicesP>We can make you any Design you like just Pm us.</ServicesP>
                </ServicesCard>
            </ServicesWrapper>
        </ServicesContainer>
    )
}

export default Services
