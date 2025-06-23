import React, { useState } from "react";
import { Modal, Button } from "react-bootstrap";
import { FaPlayCircle } from "react-icons/fa";
import pano from "../assets/images/pano.jpg";

const Pano = () => {
  const [show, setShow] = useState(false);

  return (
    <>
      {/* Parallax Wrapper */}
      <div
        className="position-relative d-flex justify-content-center align-items-center text-center"
        style={{
          backgroundImage: `url(${pano})`,
          backgroundAttachment: "fixed", // key to parallax
          backgroundSize: "cover",
          backgroundPosition: "center",
          height: "50vh",
          borderRadius: "0",
        }}
      >
        <Button
          variant="light"
          onClick={() => setShow(true)}
          className="rounded-circle p-0 border-0"
          style={{ background: "rgba(255,255,255,0.8)" }}
        >
          <FaPlayCircle size={64} color="#000" />
        </Button>
      </div>

      {/* Modal with YouTube Video */}
      <Modal
        show={show}
        onHide={() => setShow(false)}
        centered
        size="xl"
      >
        <Modal.Body className="p-0">
          <iframe
            title="YouTube Video"
            src="https://www.youtube.com/embed/-qfEOE4vtxE"
            width="100%"
            height="600"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            style={{ border: "none" }}
          />
        </Modal.Body>
      </Modal>
    </>
  );
};

export default Pano;
