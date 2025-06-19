import aboutim from '../assets/images/about1.jpg';
export default function HeroSection() {
    return (
        <div className="container-fluid p-0"
            style={{ backgroundColor: '#161D27' }}>
            <div className="container d-flex align-items-center text-white p-5 gap-5 sm-flex-column sm-text-center"
                style={{ backgroundColor: '#1F2732' }}>
                <div className="row ">
                    <div className="col-6">
                        <img src={aboutim} alt="About" className="img-fluid " />
                    </div>
                    <div className="col-6">
                        <h2 className=" fw-bold lh-1 text-warning">ABOUT US</h2>
                        <h1 className="display-4 fw-bold lh-1"> </h1>
                        <p> Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quam, sed. Animi delectus amet praesentium incidunt, adipisci sequi repudiandae! Non dolores nihil quod odio ad quae fugiat labore. Aspernatur, eveniet natus?
                        </p>
                    </div>



                </div>
            </div>
        </div>
    );
}

