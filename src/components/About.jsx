import aboutim from '../assets/images/about1.jpg';

export default function HeroSection() {
    return (
        <div className="container-fluid p-0" style={{ backgroundColor: '#161D27' }}>
            <div className="container text-white p-5 gap-5" style={{ backgroundColor: '#1F2732' }}>
                <div className="row align-items-center">
                    {/* Image first on mobile, second on desktop */}
                    <div className="col-12 col-md-6 order-1 order-md-0">
                        <img src={aboutim} alt="About" className="img-fluid" />
                    </div>

                    {/* Text second on mobile, first on desktop */}
                    <div className="col-12 col-md-6 order-0 order-md-1">
                        <h3 className="fw-bold lh-5 text-warning">ABOUT US</h3>
                        <h2 className="text-white lh-5 mt-4">LOREMS, IPSUM DOLOR <br /> & SITECHANGES</h2>
                        <p className='mt-4'>
                            Lorem, ipsum dolor & sit amet consectetur adipisicing elit. Quam, sed.
                            Animi delectus amet praesentium incidunt, adipisci sequi repudiandae!
                            Non dolores nihil quod odio ad quae fugiat labore. Aspernatur, eveniet natus? cumque! Doloribus, asperiores. Doloremque, cumque? Doloribus, asperiores.
                        </p>
                        <p className='mt-4'>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum
                            cumque! Doloribus, asperiores. Doloremque, cumque? Doloribus, asperiores.
                            Doloremque, cumque? Doloribus, asperiores. Doloremque, cumque? Doloribus,
                            asperiores. Doloremque, cumque? Doloribus, asperiores.cumque! Doloribus, asperiores. Doloremque, cumque? Doloribus, asperiores.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}
