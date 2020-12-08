import React, {useState} from 'react';
import image1 from '../../images/bg.jpg';
import { Button } from '../ButtonElements';
import { 
    HeroContainer, 
    HeroBg, 
    VideoBg, 
    HeroContent, 
    HeroH1, 
    HeroP, 
    HeroBtnWrapper, 
    ArrowForward, 
    ArrowRight 
} from './HeroElements';

const HeroSection = () => {
    const [hover, setHover] = useState(false);

    const onHover = () => {
        setHover(!hover);
    }

    return (
        <HeroContainer>
            <HeroBg>
                <VideoBg src={image1} />
            </HeroBg>
            <HeroContent>
                <HeroH1>FGDesign is a Graphic Designer</HeroH1>
                <HeroP>
                    Kick start your business, beautiful social media designs, and a complete brand identity.
                </HeroP>
                <HeroBtnWrapper>
                    <Button 
                        to='portfolio' 
                        smooth={true}
                        duration={500}
                        spy={true}
                        exact='true' 
                        onMouseEnter={onHover} 
                        onMouseLeave={onHover} 
                        primary='true' 
                        dark='true'>
                        Get Continue { hover ? <ArrowForward /> : <ArrowRight />}
                    </Button>
                </HeroBtnWrapper>
            </HeroContent>
        </HeroContainer>
    )
}

export default HeroSection
