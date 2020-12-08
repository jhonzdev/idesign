import React, {useEffect} from 'react';
import Icon1 from '../../images/one.png';
import Icon2 from '../../images/two.png';
import Icon3 from '../../images/three.png';
import Icon4 from '../../images/four.png';
import Icon5 from '../../images/five.png';
import Icon6 from '../../images/six.png';
import image1 from '../../images/svg-4.svg';
import Aos from 'aos';
import 'aos/dist/aos.css';
import { 
    ContactContainer, 
    ContactWrapper, 
    ContactCol1,
    ContactTitle, 
    ContactCol2,
    ContainerRow,
    ContactIcon,
    ContainerTextIcon,
    ContactIconWrapper,
    ContactImg
} from './ContactElements';

const Contact = () => {
    useEffect(() => {
        Aos.init({ duration: 2000});
    }, []);

    return (
        <ContactContainer id="contact">
            <ContactWrapper>
                <ContactCol1 data-aos="fade-right">
                    <ContactTitle>Contact Us</ContactTitle>
                    <ContainerRow>
                        <ContactIcon src={Icon1}/>
                        <ContainerTextIcon>521 Santan St. Batasan Hills Quezon City</ContainerTextIcon>
                    </ContainerRow>
                    <ContainerRow>
                        <ContactIcon src={Icon2}/>
                        <ContainerTextIcon>fgdesign@gmail.com</ContainerTextIcon>
                    </ContainerRow>
                    <ContainerRow>
                        <ContactIcon src={Icon3}/>
                        <ContainerTextIcon>+639999999999</ContainerTextIcon>
                    </ContainerRow>
                    <ContactIconWrapper>
                        <ContactIcon src={Icon4}/>
                        <ContactIcon src={Icon5}/>
                        <ContactIcon src={Icon6}/>
                    </ContactIconWrapper>
                </ContactCol1>
                <ContactCol2 data-aos="fade-up">
                    <ContactImg src={image1} alt="contact" />
                </ContactCol2>    
            </ContactWrapper>            
        </ContactContainer>
    )
}

export default Contact
