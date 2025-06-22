import Header from '../components/Header';
import HeroSection1 from '../components/HeroSection1';
import HeroSection2 from '../components/HeroSection2';
import HeroSection3 from '../components/HeroSection3';
import Footer from '../components/Footer';
import About from '../components/About';
import Team from '../components/Team';
import Contact from '../components/Contact';



export default function Home() {
  return (
    <>
      <Header />
      <HeroSection1/>
      <HeroSection2/>
      <HeroSection3/>
      <About />
      
      <Team />
      <Contact />
      <Footer />
     
    </>
  );
}
