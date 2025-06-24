import React from 'react';
import aboutim from '../assets/images/about1.jpg';
import overlayImg from '../assets/images/overlay.jpg'; // Replace with actual image path

export default function ImageSetup() {
    return (
        <div className="container-fluid p-0" style={{ backgroundColor: '#161D27' }}>
            <div className="container text-white p-5 gap-5" style={{ backgroundColor: '#1F2732' }}>
                <div className="row align-items-center">
                    <div className="col-12 col-md-6 order-1 order-md-0 position-relative">
                        {/* Main Image */}
                        <div
                            style={{
                                border: "30px solid white",
                                display: "inline-block",
                                width: "90%",
                                boxSizing: "content-box",
                            }}
                        >
                            <img
                                src={aboutim}
                                alt="Main"
                                className="img-fluid w-100"
                                style={{ display: "block", borderRadius: "8px" }}
                            />
                        </div>

                        {/* Overlay Image */}
                        <img
                            src={overlayImg}
                            alt="Overlay"
                            className="img-fluid position-absolute"
                            style={{
                                width: "40%",
                                right: "3.5%",
                                bottom: "3%",
                                border: "20px solid white",
                            }}
                        />
                    </div>





                    {/* Text Content */}
                    <div className="col-12 col-md-6 order-0 order-md-1">
                        <h3 className="fw-bold lh-5 text-warning">ABOUT US</h3>
                        <h2 className="text-white lh-5 mt-4">LOREMS, IPSUM DOLOR <br /> & SITECHANGES</h2>
                        <p className='mt-4'>
                            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quam, sed. Animi
                            delectus amet praesentium incidunt, adipisci sequi repudiandae! Non dolores
                            nihil quod odio ad quae fugiat labore. Aspernatur, eveniet natus?
                        </p>
                        <p className='mt-4'>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum
                            cumque! Doloribus, asperiores. Doloremque, cumque? Doloribus, asperiores.
                            Doloremque, cumque? Doloribus, asperiores. Doloremque, cumque? Doloribus,
                            asperiores. Doloremque, cumque? Doloribus, asperiores.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}
