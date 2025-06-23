import Header from '../components/Header';
import HeroSection1 from '../components/HeroSection1';
import HeroSection2 from '../components/HeroSection2';
import HeroSection3 from '../components/HeroSection3';
import Footer from '../components/Footer';
import About from '../components/About';
import Team from '../components/Team';
import Contact from '../components/Contact';
import AutoTeam from '../components/AutoTeam';
import ThreeDotsTeam from '../components/ThreeDotsTeam';
import MedicalDetails from '../components/MedicalDetails';
import Pano from '../components/Pano';


export default function Home() {
  return (
    <>
      <Header />
      <HeroSection1/>
      <HeroSection2/>
      <HeroSection3/>
      <About />
      <Team />
      <AutoTeam/>
      <ThreeDotsTeam />
      <MedicalDetails/>
      <Pano/>
      <Contact />
      <Footer />
     
    </>
  );
}
