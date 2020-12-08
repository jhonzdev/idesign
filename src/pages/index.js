import React, {useState} from 'react';
import Sidebar from '../components/Sidebar';
import Navbar from '../components/Navbar';
import HeroSection from '../components/HeroSection';
import InfoSection from '../components/InfoSection';
import { homeObjOne } from '../components/InfoSection/Data';
import Portfolio from '../components/Portfolio';
import Services from '../components/Services';
import Contact from '../components/Contact';
import Footer from '../components/Footer';

const Home = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => {
        setIsOpen(!isOpen)
    };

    return (
        <>
            <Navbar toggle={toggle} />
            { isOpen ? <Sidebar isOpen={isOpen} toggle={toggle} /> : null }
            <HeroSection />
            <InfoSection {...homeObjOne}/>
            <Portfolio />
            <Services />
            <Contact />
            <Footer />
        </>
    )
}

export default Home
