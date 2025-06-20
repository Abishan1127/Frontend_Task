import Header from '../components/Header';
import HeroCarousel from '../components/HeroCarousel';
import Footer from '../components/Footer';
import About from '../components/About';
import HerotextCarousel from '../components/HerotextCarousel';
import Team from '../components/Team';


export default function Home() {
  return (
    <>
      <Header />
      <HeroCarousel/>
      <HerotextCarousel />
      <About />

      <Team />
      <Footer />
     
    </>
  );
}
