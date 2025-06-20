import React, { useRef } from 'react';
import team1 from '../assets/images/team1.jpg';
import team2 from '../assets/images/team2.jpg';
import team3 from '../assets/images/team3.jpg';
import team4 from '../assets/images/team4.jpg';
import team5 from '../assets/images/team5.jpg';
import team6 from '../assets/images/team6.jpg';
import team7 from '../assets/images/team7.jpg';
import team8 from '../assets/images/team8.jpg';

const teamMembers = [
  { name: 'stark leona', title: 'Director', img: team1 },
  { name: 'cham karan', title: 'Assistant Director', img: team2 },
  { name: 'shuva shiya', title: 'Associate', img: team3 },
  { name: 'rose kingdon', title: 'Associate', img: team4 },
  { name: 'John Carter', title: 'Associate', img: team5 },
  { name: 'Emily Stone', title: 'Senior Associate', img: team6 },
  { name: 'Michael Wang', title: 'Associate', img: team7 },
  { name: 'Sarah Lee', title: 'Legal Assistant', img: team8 },
];

export default function TeamSection() {
  const scrollRef = useRef(null);

  const scrollLeft = () => {
    scrollRef.current.scrollBy({ left: -325, behavior: 'smooth' });
  };

  const scrollRight = () => {
    scrollRef.current.scrollBy({ left: 325, behavior: 'smooth' });
  };

  return (
    <div className="container my-5">
      <div className="text-center mb-5">
        <h6 className="text-warning fw-semibold">MEET OUR LEGAL TEAM</h6>
        <h2 className="fw-bold">DEDICATED MINDS WITH A PASSION FOR JUSTICE</h2>
        <p className="text-muted">
          Our diverse team of legal professionals combines deep expertise, unwavering integrity, and a client-first mindset to ensure the best outcomes in every case.
        </p>
      </div>

      <div className="position-relative">
        <div
          className="d-flex flex-row"
          ref={scrollRef}
          style={{
            overflowX: 'hidden', // hide horizontal scrollbar
            scrollBehavior: 'smooth',
            WebkitOverflowScrolling: 'touch'
          }}
        >
          {teamMembers.map((member, idx) => (
            <div
              className="flex-shrink-0 px-2 col-12 col-sm-6 col-md-4 col-lg-3"
              style={{ maxWidth: '100%' }}
              key={idx}
            >
              <div className="position-relative mb-4">
                <img src={member.img} className="img-fluid w-100 
                "style={{ maxHeight: '300px' }} alt={member.name} />
                <div
                  className="position-absolute start-0 end-0 text-white text-center py-2 px-3 mx-3"
                  style={{
                    top: '100%',
                    transform: 'translateY(-50%)',
                    backgroundColor: '#11161E',
                    zIndex: 2,
                  }}
                >
                  <div className="fw-bold text-warning">{member.name}</div>
                  <div>{member.title}</div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="d-flex justify-content-center gap-3 mt-3">
          <button className="btn btn-dark rounded-circle" onClick={scrollLeft}>
            <span className="carousel-control-prev-icon" />
          </button>
          <button className="btn btn-dark rounded-circle" onClick={scrollRight}>
            <span className="carousel-control-next-icon" />
          </button>
        </div>
      </div>
    </div>
  );
}
