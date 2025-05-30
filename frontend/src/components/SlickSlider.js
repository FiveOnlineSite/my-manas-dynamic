import React, { useState, useRef, useEffect } from "react";
import Slider from "react-slick";
import { createPortal } from "react-dom";

const SlickSlider = ({ items, settings }) => {
  const [selectedVideo, setSelectedVideo] = useState(null);
  const videoRef = useRef(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = (video) => {
    setSelectedVideo(video);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setSelectedVideo(null);
    setIsModalOpen(false);
  };

  // Effect to disable body scroll when modal is open
  useEffect(() => {
    if (isModalOpen) {
      document.body.style.overflow = "hidden"; // Disable scrolling
    } else {
      document.body.style.overflow = "auto"; // Enable scrolling when modal is closed
    }

    // Cleanup when component unmounts or modal is closed
    return () => {
      document.body.style.overflow = "auto"; // Ensure scrolling is enabled when modal is closed
    };
  }, [isModalOpen]); // Runs whenever `isModalOpen` changes

  useEffect(() => {
    if (isModalOpen && selectedVideo && videoRef.current) {
      videoRef.current.play();
      videoRef.current.muted = false;
    }
  }, [isModalOpen, selectedVideo]);

  const Modal = () =>
    isModalOpen &&
    createPortal(
      <div
        className="modal fade show overflow-hidden"
        tabIndex="-1"
        role="dialog"
        style={{
          display: "block",
          backgroundColor: "rgba(0, 0, 0, 0.8)",
          zIndex: 1050, // Ensure modal is above other content
        }}
        onClick={closeModal}
      >
        <div
          className="modal-dialog modal-xl modal-dialog-centered"
          role="document"
        >
          <div className="modal-content">
            <div className="modal-header p-0">
              <button
                type="button"
                onClick={(e) => {
                  e.stopPropagation();
                  closeModal();
                }}
              >
                <i className="fa-solid fa-circle-xmark"></i>
              </button>
            </div>
            <div className="modal-body text-center m-0">
              {selectedVideo ? (
                <video
                  ref={videoRef}
                  controls
                  className="modal-video"
                  onClick={(e) => e.stopPropagation()}
                  onCanPlay={() => {
                    if (videoRef.current) {
                      videoRef.current.play();
                    }
                  }}
                >
                  <source src={selectedVideo} type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              ) : (
                <p>No video selected</p>
              )}
            </div>
          </div>
        </div>
      </div>,
      document.body // Render modal at the root level
    );

  return (
    <>
      <Slider {...settings}>
        {items.map((item, index) => (
          <div className="element" key={index}>
            {item.video ? (
              <div className="video-thumbnail-container">
                <img
                  className="slider-thumbnail"
                  src={item.image || item.video_thumbnail}
                  alt={`Thumbnail ${index}`}
                />
                <div
                  className="play-icon-overlay"
                  onClick={() => openModal(item.video)}
                >
                  <img src="/images/icons/Group 8249.png" alt="play-icon" />
                </div>
              </div>
            ) : (
              <img
                src={item.image}
                alt="Slider Img"
                className="slider-thumbnail"
              />
            )}
          </div>
        ))}
      </Slider>
      <Modal />
    </>
  );
};

export default SlickSlider;
