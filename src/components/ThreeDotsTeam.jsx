import React, { useEffect, useRef, useState } from 'react';
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

export default function ThreeDotsTeam() {
  const scrollRef = useRef(null);
  const [isHovered, setIsHovered] = useState(false);
  const [scrollIndex, setScrollIndex] = useState(0);
  const itemWidth = 325; // Same as original scroll step
  const totalItems = teamMembers.length;
  const visibleCount = 4; // Approx how many visible at once

  const totalDots = 3;

  const scrollToPosition = (dotIndex) => {
    if (scrollRef.current) {
      const container = scrollRef.current;
      const maxScrollLeft = container.scrollWidth - container.clientWidth;
      const step = maxScrollLeft / (totalDots - 1);
      container.scrollTo({
        left: step * dotIndex,
        behavior: 'smooth',
      });
    }
  };

  useEffect(() => {
    const interval = setInterval(() => {
      if (!isHovered && scrollRef.current) {
        const container = scrollRef.current;
        const maxScrollLeft = container.scrollWidth - container.clientWidth;

        const newPosition = container.scrollLeft + itemWidth;
        if (newPosition >= maxScrollLeft - 10) {
          // Go back to start
          container.scrollTo({ left: 0, behavior: 'smooth' });
          setScrollIndex(0);
        } else {
          container.scrollBy({ left: itemWidth, behavior: 'smooth' });
          setScrollIndex((prev) => prev + 1);
        }
      }
    }, 5000);

    return () => clearInterval(interval);
  }, [isHovered]);

  return (
    <div className="container my-5">
      <div className="text-center mb-5">
        <h6 className="text-warning fw-semibold">MEET OUR LEGAL TEAM</h6>
        <h2 className="fw-bold">DEDICATED MINDS WITH A PASSION FOR JUSTICE</h2>
        <p className="text-muted">
          Our diverse team of legal professionals combines deep expertise, unwavering integrity, and a client-first mindset to ensure the best outcomes in every case.
        </p>
      </div>

      <div
        className="position-relative"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <div
          className="d-flex flex-row"
          ref={scrollRef}
          style={{
            overflowX: 'hidden',
            overflowY: 'hidden',
            scrollBehavior: 'smooth',
            WebkitOverflowScrolling: 'touch',
          }}
        >
          {teamMembers.map((member, idx) => (
            <div
              className="flex-shrink-0 px-2 col-12 col-sm-6 col-md-4 col-lg-3"
              style={{ maxWidth: '100%' }}
              key={idx}
            >
              <div className="position-relative mb-4">
                <img
                  src={member.img}
                  className="img-fluid w-100"
                  style={{ maxHeight: '300px', objectFit: 'cover' }}
                  alt={member.name}
                />
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

        {/* Dots for navigation */}
        <div className="d-flex justify-content-center mt-4">
          {[0, 1, 2].map((index) => (
            <button
              key={index}
              onClick={() => scrollToPosition(index)}
              className="mx-1 rounded-circle"
              style={{
                width: 12,
                height: 12,
                border: 'none',
                backgroundColor: '#ffc107',
                opacity: index === Math.round(scrollIndex / 2.7) ? 1 : 0.4,
              }}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
