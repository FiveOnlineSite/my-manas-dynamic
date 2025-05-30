import React, { useEffect, useState } from "react";
import Layout from "../components/Layout";
import SlickSlider from "../components/SlickSlider";
import { NavLink } from "react-router-dom";
import ReachOut from "../components/ReachOut";
import Testimonials from "../components/Testimonials";
import { getRequest } from "../api/api";

const Home = () => {
  const [data, setData] = useState([]);
  const [OtherData, setOtherData] = useState([]);

  const fetchBannerData = async () => {
    try {
      const result = await getRequest("/home/banner");

      setData(result.data[0]);
    } catch (error) {}
  };

  const fetchOtherData = async () => {
    try {
      const responses = await Promise.allSettled([
        getRequest("/home/aboutus"),
        getRequest("/home/gallery"),
        getRequest("/home/mission"),
        getRequest("/testimonials"),
      ]);
      console.log(responses, "responsesfefe");

      const resultObj = {
        aboutus:
          responses[0].status === "fulfilled"
            ? responses[0].value.data[0]
            : null,
        gallery:
          responses[1].status === "fulfilled" ? responses[1].value.data : null,
        mission:
          responses[2].status === "fulfilled"
            ? responses[2].value.data[0]
            : null,
            testimonials:
          responses[3].status === "fulfilled"
            ? responses[3].value.data[0]
            : null,
      };

      setOtherData(resultObj);
    } catch (error) {
      console.error("Unexpected error:", error);
    }
  };

  console.log(OtherData, "gfhbh");

  useEffect(() => {
    fetchBannerData();
    fetchOtherData();
    // setData((prev) =>
    //   prev.map((item) => ({
    //     ...item,
    //     checked: false,
    //   }))
    // );
  }, []);

  const homeBanner = [
    // {
    //   image: "/images/slider/school-boy-holding-delicious-apple.png",
    // },
    {
      image: OtherData?.gallery?.[0]?.url,
      // video: "/videos/215471_tiny.mp4",
    },
    {
      image: OtherData?.gallery?.[1]?.url,
      // video: "/videos/89066-613200185_tiny.mp4",
    },
    {
      // video_thumbnail: "/images/slider/KG Students 04.jpg",
      // video: "/videos/215475_tiny.mp4",
      // video: "/videos/lv_0_20250221192441.mp4",
      image: OtherData?.gallery?.[2]?.url,
    },
    {
      image: OtherData?.gallery?.[3]?.url,
    },
  ];

  const homeBannerSettings = {
    dots: false,
    arrows: false,
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 4,
    autoplay: true,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 500,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <div>
      <Layout>
        {/* <section className="banner">
          <div className="container-fluid">
            <div className="left-img-div">
              <img
                className="left-img1 right-img-one"
                src="/images/banner/manas-1.png"
                alt="light-img"
                width="290px"
              />
              <img
                className="left-img2"
                src="/images/banner/Vector 2.png"
                alt="light-img"
              />
              <img
                className="left-img3 right-img-one"
                src="/images/banner/manas-3.png"
                alt="light-img"
                width="256px"
              />
            </div>
            <div className="banner-text">
              <h1
                className="banner-title wow"
                data-aos="fade-up" // Fade in as you scroll
                data-aos-duration="1500"
              >
                A Promising future begins here!
              </h1>

              <p
                className="paragraph wow"
                data-aos="fade-up" // Fade in as you scroll
                data-aos-duration="1500"
              >
                We foster equality and curiosity by providing both direct and
                indirect educational support, empowering children with quality
                teaching and personal growth opportunities
              </p>
              <NavLink to="/about-us">
                <button className="custom-btn white-btn wow">
                  <li className="nav-link ">Explore</li>
                </button>
              </NavLink>
            </div>

            <div className="right-img-div">
              <img
                className="right-img1"
                src="/images/banner/Vector 3.png"
                alt="right-img"
              />
              <img
                className="right-img2 right-img-one"
                src="/images/banner/manas-2.png"
                alt="right-img"
                width="225px"
              />
            </div>
          </div>
        </section> */}
        <section className='banner-two'>
          <div className='container-fluid'>
            <div className='banner-img'>
              <img
                src={data.images?.desktop?.url}
                alt={data.images?.desktop?.altText}
                width='100%'
                className='banner-image desktop-banner'
              />
              <img
                src={data.images?.mobile?.url}
                alt={data.images?.mobile?.altText}
                className='banner-image mobile-banner'
              />
            </div>

            <div className='banner-content'>
              <div className='banner-text'>
                <h1
                  className='banner-title wow'
                  data-aos='fade-up'
                  data-aos-duration='1500'
                >
                  {data.title}
                </h1>
                <p
                  className='paragraph wow'
                  data-aos='fade-up'
                  data-aos-duration='1500'
                >
                  <div dangerouslySetInnerHTML={{ __html: data.description }} />
                </p>
                <NavLink to={data.buttonLink}>
                  <button className='custom-btn white-btn wow'>
                    <li className='nav-link'>{data.buttonText}</li>
                  </button>
                </NavLink>
              </div>
            </div>
          </div>
        </section>

        <section className='bridging-gap'>
          <div className='container'>
            <div className='col-lg-12'>
              <div className='row'>
                <div
                  className='col-lg-6'
                  data-aos='fade-right' // Fade in as you scroll
                  data-aos-duration='1500'
                >
                  <div className='bridging-img'>
                    <img
                      src='/images/banner/Vector 6.png'
                      alt='vector-6'
                      className='bridging-img1'
                    />
                    <div className='bridging-img2'>
                      <img
                        src={OtherData?.aboutus?.image?.url}
                        alt={OtherData?.aboutus?.image?.url}
                      />
                    </div>

                    <img
                      src='/images/banner/Vector 7.png'
                      alt='vector-7'
                      className='bridging-img3'
                    />
                  </div>
                </div>
                <div
                  className='col-lg-6 wow'
                  data-aos='fade-left' // Fade in as you scroll
                  data-aos-duration='1500'
                >
                  <div className='bridging-text'>
                    <h6 className='section-subtitle'>
                      {OtherData?.aboutus?.subtitle}
                    </h6>

                    <h2 className='section-title'>
                      {OtherData?.aboutus?.title}
                    </h2>

                    <p className='paragraph bridge-para'>
                      <div
                        dangerouslySetInnerHTML={{
                          __html: OtherData?.aboutus?.description,
                        }}
                      />
                    </p>

                    <button className='custom-btn bridge-btn'>
                      <NavLink
                        to={OtherData?.aboutus?.buttonLink}
                        className='nav-link'
                      >
                        {OtherData?.aboutus?.buttonText}
                      </NavLink>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className='home-slider'>
          <div className='row'>
            <div
              className='home-slick-slider wow'
              data-aos='zoom-in' // Fade in as you scroll
              data-aos-duration='1500'
            >
              <SlickSlider settings={homeBannerSettings} items={homeBanner} />
            </div>
          </div>
        </section>

        <section className='strategies'>
          <div className='container'>
            <div className='col-lg-12'>
              <div className='row'>
                <div className='col-lg-7'>
                  <div
                    className='core-strategies-div wow'
                    data-aos='fade-right' // Fade in as you scroll
                    data-aos-duration='1500'
                  >
                    <h6 className='section-subtitle'>
                      {OtherData?.mission?.subtitle}
                    </h6>

                    <h2 className='section-title'>
                      {OtherData?.mission?.title}
                    </h2>

                    <div className='strategies-accordion'>
                      <div className='accordion' id='strategiesAccordion'>
                        <div className='accordion-item'>
                          <h2 className='accordion-header'>
                            <button
                              className='accordion-button'
                              type='button'
                              data-bs-toggle='collapse'
                              data-bs-target='#startegy1'
                              aria-expanded='true'
                              aria-controls='startegy1'
                            >
                              {OtherData?.mission?.accordions?.[0]?.title}
                            </button>
                          </h2>
                          <div
                            id='startegy1'
                            className='accordion-collapse collapse show'
                            data-bs-parent='#strategiesAccordion'
                          >
                            <div className='accordion-body'>
                              <p>
                                {
                                  OtherData?.mission?.accordions?.[0]
                                    ?.description
                                }
                              </p>
                            </div>
                          </div>
                        </div>
                        <div className='accordion-item'>
                          <h2 className='accordion-header'>
                            <button
                              className='accordion-button collapsed'
                              type='button'
                              data-bs-toggle='collapse'
                              data-bs-target='#startegy2'
                              aria-expanded='false'
                              aria-controls='startegy2'
                            >
                              {OtherData?.mission?.accordions?.[1]?.title}
                            </button>
                          </h2>
                          <div
                            id='startegy2'
                            className='accordion-collapse collapse'
                            data-bs-parent='#strategiesAccordion'
                          >
                            <div className='accordion-body'>
                              <p>
                                {
                                  OtherData?.mission?.accordions?.[1]
                                    ?.description
                                }
                              </p>
                            </div>
                          </div>
                        </div>
                        <div className='accordion-item'>
                          <h2 className='accordion-header'>
                            <button
                              className='accordion-button collapsed'
                              type='button'
                              data-bs-toggle='collapse'
                              data-bs-target='#startegy3'
                              aria-expanded='false'
                              aria-controls='startegy3'
                            >
                              {OtherData?.mission?.accordions?.[2]?.title}
                            </button>
                          </h2>
                          <div
                            id='startegy3'
                            className='accordion-collapse collapse'
                            data-bs-parent='#strategiesAccordion'
                          >
                            <div className='accordion-body'>
                              <p>
                                {
                                  OtherData?.mission?.accordions?.[2]
                                    ?.description
                                }
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  className='col-lg-5 wow'
                  data-aos='fade-left' // Fade in as you scroll
                  data-aos-duration='1500'
                >
                  <div className='core-strategies-img'>
                    <img
                      src={OtherData?.mission?.image?.url}
                      alt={OtherData?.mission?.image?.altText}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className='half-img-section'>
          <div className='container'>
            <div className='half-img-text'>
              <h2
                className='section-title text-center wow'
                data-aos='zoom-in' // Fade in as you scroll
                data-aos-duration='1500'
              >
                Bringing new opportunities to the underdogs since 2019
              </h2>

              {/* <button className="custom-btn bridge-btn read-btn">
                <NavLink className="nav-link" to="/">
                  READ OUR NEWSLETTER
                </NavLink>
              </button> */}
            </div>
          </div>
        </section>

        <section className='support-section'>
          <div className='container'>
            <div className='support-text-div' data-aos='fade-left'>
              <h2 className='extra-big-text'>Your support is meaningful.</h2>
              <div className='support-para'>
                <p className='paragraph bridge-para p-0'>
                  “Out of 100 students, 29 percent of girls and boys drop out of
                  school before completing the full cycle of elementary
                  education, and often they are the most marginalized children.”
                </p>
                <p className='paragraph bridge-para unicef'>©UNICEF</p>
              </div>
            </div>
          </div>
        </section>

        <Testimonials testimonials={OtherData?.testimonials || []} />

        <section className='news-events d-none'>
          <div className='container'>
            <div className='col-lg-12'>
              <div className='row'>
                <div
                  className='col-lg-5 order-lg-1 order-2 wow'
                  data-aos='fade-right'
                  data-aos-duration='1500'
                >
                  <div className='news-events-text'>
                    <h6 className='section-subtitle'>NEWS & EVENTS</h6>

                    <div className='d-flex justify-content-between w-100'>
                      <h2 className='section-title'>Editor’s Pick</h2>
                      <NavLink to='/' onClick={() => window.scrollTo(0, 0)}>
                        <div className='d-flex align-items-start'>
                          <img src='/images/icons/Group 8189.png' alt='arrow' />
                        </div>
                      </NavLink>
                    </div>

                    <div className='events-div'>
                      <NavLink
                        className='nav-link'
                        to='/'
                        onClick={() => window.scrollTo(0, 0)}
                      >
                        <div className='single-event d-flex'>
                          <img src='/images/icons/Group 8179.png' alt='arrow' />
                          <div className='ps-3'>
                            <div className='event-single-div d-flex'>
                              <h6>NEWS</h6>
                              <span>.</span>
                              <h6>Apr 21, 2020</h6>
                            </div>

                            <h5>From help to hope: our aid in Eutopia</h5>
                          </div>
                        </div>
                      </NavLink>

                      <NavLink
                        className='nav-link'
                        to='/'
                        onClick={() => window.scrollTo(0, 0)}
                      >
                        <div className='single-event d-flex'>
                          <img src='/images/icons/Group 8179.png' alt='arrow' />
                          <div className='ps-3'>
                            <div className='event-single-div d-flex'>
                              <h6>EVENT</h6>
                              <span>.</span>
                              <h6>Apr 21, 2020</h6>
                            </div>

                            <h5>Solutions to avoid global climate change</h5>
                          </div>
                        </div>
                      </NavLink>

                      <NavLink
                        className='nav-link'
                        to='/'
                        onClick={() => window.scrollTo(0, 0)}
                      >
                        <div className='single-event d-flex'>
                          <img src='/images/icons/Group 8179.png' alt='arrow' />
                          <div className='ps-3'>
                            <div className='event-single-div d-flex'>
                              <h6>NEWS</h6>
                              <span>.</span>
                              <h6>Apr 21, 2020</h6>
                            </div>

                            <h5>Maldives announces coastal cleanup </h5>
                          </div>
                        </div>
                      </NavLink>
                    </div>
                  </div>
                </div>
                <div
                  className='col-lg-7 order-lg-2 order-1 wow'
                  data-aos='fade-left'
                  data-aos-duration='1500'
                >
                  <div className='news-img'>
                    <img
                      src='/images/banner/A7402698 1.png'
                      alt='banner'
                      className='w-100'
                    />
                    <div className='hope-div'>
                      <h2>Hope after horror in Congo: Idir’s story</h2>

                      <p>
                        Lorem ipsum dolor sit amet. Et deserunt quod id voluptas
                        fugiat sed alias odit. Qui deleniti voluptas qui
                        perferendis saepe ut autem pariatur et veritatis illo
                        qui quis recusandae.
                      </p>

                      <div className='news-time-div'>
                        <span></span>
                        <div className='news-time'>
                          <h6>Event</h6>
                          <span>.</span>
                          <h6>Apr 21, 2020</h6>
                          <span>.</span>
                          <h6>0 Comments</h6>
                        </div>
                      </div>

                      <button className='custom-btn bridge-btn read-btn mt-3 mb-0'>
                        <NavLink
                          className='nav-link'
                          to='/'
                          onClick={() => window.scrollTo(0, 0)}
                        >
                          LEARN MORE
                        </NavLink>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <ReachOut />
      </Layout>
    </div>
  );
};

export default Home;
