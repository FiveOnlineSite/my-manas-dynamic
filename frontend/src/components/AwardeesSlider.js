import React from "react";
import Slider from "react-slick";

const AwardeesSlider = ({ awardees }) => {
  const PrevArrow = (props) => {
    const { onClick } = props;
    return (
      <button className='slick-prev custom-arrow' onClick={onClick}>
        <img src='/images/icons/chevron-down (1).png' alt='left-arrow' />
      </button>
    );
  };

  const NextArrow = (props) => {
    const { onClick } = props;
    return (
      <button className='slick-next custom-arrow' onClick={onClick}>
        <img src='/images/icons/chevron-down.png' alt='right-arrow' />
      </button>
    );
  };

  const settings = {
    centerMode: true, // Enable center mode
    centerPadding: "20px", // Padding around the centered slide
    slidesToShow: 3, // Number of slides to show
    autoplay: true, // Enable autoplay
    autoplaySpeed: 2000, // Autoplay speed in milliseconds
    focusOnSelect: true, // Focus on the selected slide
    infinite: true,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    dots: true,
    responsive: [
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          centerMode: false, // Enable center mode
          // centerPadding: "150px",
        },
      },
      // {
      //   breakpoint: 500,
      //   settings: {
      //     slidesToShow: 1,
      //     slidesToScroll: 1,
      //   },
      // },
    ],
  };
  if (!awardees?.length) return null;

  return (
    <div className='container'>
      <div className='awardee-div'>
        <Slider {...settings}>
          {awardees[0] && (
            <div className='awardee-title'>
              <div className='d-flex align-items-center'>
                <div>
                  <img
                    src={awardees[0].image?.url}
                    alt={awardees[0].image?.altText}
                    className='w-100 schol-img-two'
                  />
                </div>
                <div className='d-flex flex-column w-100 px-2'>
                  <div className='d-flex flex-row justify-content-between '>
                    <h4>{awardees[0].name}</h4>
                    <h6>{awardees[0].year}</h6>
                  </div>
                  <h5>{awardees[0].institute}</h5>
                </div>
              </div>
              <div dangerouslySetInnerHTML={{ __html: awardees[0].review }} />
            </div>
          )}

          {awardees[1] && (
            <div className='awardee-title'>
              <div className='d-flex align-items-center'>
                <div>
                  <img
                    src={awardees[1].image?.url}
                    alt={awardees[1].image?.altText}
                    className='w-100 schol-img-two'
                  />
                </div>
                <div className='d-flex flex-column w-100 px-2'>
                  <div className='d-flex flex-row justify-content-between '>
                    <h4>{awardees[1].name}</h4>
                    <h6>{awardees[1].year}</h6>
                  </div>
                  <h5>{awardees[1].institute}</h5>
                </div>
              </div>
              <div dangerouslySetInnerHTML={{ __html: awardees[1].review }} />
            </div>
          )}

          {awardees[2] && (
            <div className='awardee-title'>
              <div className='d-flex align-items-center'>
                <div>
                  <img
                    src={awardees[2].image?.url}
                    alt={awardees[2].image?.altText}
                    className='w-100 schol-img-two'
                  />
                </div>
                <div className='d-flex flex-column w-100 px-2'>
                  <div className='d-flex flex-row justify-content-between '>
                    <h4>{awardees[2].name}</h4>
                    <h6>{awardees[2].year}</h6>
                  </div>
                  <h5>{awardees[2].institute}</h5>
                </div>
              </div>
              <div dangerouslySetInnerHTML={{ __html: awardees[2].review }} />
            </div>
          )}

          {awardees[3] && (
            <div className='awardee-title'>
              <div className='d-flex align-items-center'>
                <div>
                  <img
                    src={awardees[3].image?.url}
                    alt={awardees[3].image?.altText}
                    className='w-100 schol-img-two'
                  />
                </div>
                <div className='d-flex flex-column w-100 px-2'>
                  <div className='d-flex flex-row justify-content-between '>
                    <h4>{awardees[3].name}</h4>
                    <h6>{awardees[3].year}</h6>
                  </div>
                  <h5>{awardees[3].institute}</h5>
                </div>
              </div>
              <div dangerouslySetInnerHTML={{ __html: awardees[3].review }} />
            </div>
          )}
        </Slider>
      </div>
    </div>
  );
};

export default AwardeesSlider;
