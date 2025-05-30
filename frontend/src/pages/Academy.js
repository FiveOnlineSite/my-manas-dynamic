import React, { useEffect, useState } from "react";
import Layout from "../components/Layout";
import { NavLink } from "react-router-dom";
import Achivements from "../components/Achivements";
import Testimonials from "../components/Testimonials";
import ReachOut from "../components/ReachOut";
import FacilitiesSlider from "../components/FacilitiesSlider";
import { getRequest } from "../api/api";

const Academy = () => {
  const [data, setData] = useState([]);
  const [OtherData, setOtherData] = useState([]);

  const fetchData = async () => {
    const res = await getRequest("/academy/history");
    if (res.success) {
      setData(res.data[0]);
    } else {
    }
  };

  // console.log(data, "uihuyg");

  const fetchOtherData = async () => {
    try {
      const responses = await Promise.allSettled([
        getRequest("/academy/leadership-team"),
        getRequest("/academy/achievements"),
        getRequest("/academy/grade-levels"),
        getRequest("/academy/how-to-apply"),
        getRequest("/academy/facilities"),
        getRequest("/academy/contact-info"),
        getRequest("/testimonials"),
        getRequest("/masterbanner"),
      ]);
      console.log(responses, "responsesfefe");

      const resultObj = {
        leadershipteam:
          responses[0].status === "fulfilled"
            ? responses[0].value.data[0]
            : null,
        achievements:
          responses[1].status === "fulfilled" ? responses[1].value.data : null,
        gradelevels:
          responses[2].status === "fulfilled" ? responses[2].value.data : null,
        howtoapply:
          responses[3].status === "fulfilled" ? responses[3].value.data : null,
        facilities:
          responses[4].status === "fulfilled" ? responses[4].value.data : null,
        contactinfo:
          responses[5].status === "fulfilled" ? responses[5].value.data : null,
        testimonials:
          responses[6].status === "fulfilled"
            ? responses[6].value.data[0]
            : null,
        masterbanner:
          responses[7].status === "fulfilled"
            ? responses[7].value.data[3]
            : null,
      };

      setOtherData(resultObj);
    } catch (error) {
      console.error("Unexpected error:", error);
    }
  };

  console.log(OtherData, "gfhbh");

  useEffect(() => {
    fetchData();
    fetchOtherData();
    // setData((prev) =>
    //   prev.map((item) => ({
    //     ...item,
    //     checked: false,
    //   }))
    // );
  }, []);

  const facilities = [
    {
      // image: "/images/slider/Basketball_2024.jpg",
      image: OtherData?.facilities?.[0]?.resources?.image?.url,
      // image: "/images/slider/Basketball_2024.jpg",
      text: "Sports & Recreational Areas",
      modal_data: {
        videos: [
          // Use an array if multiple videos are needed
          {
            video_thumbnail: OtherData?.facilities?.[0]?.resources?.image?.url,
            // video_thumbnail: "/images/slider/Basketball_2024.jpg",
            src: OtherData?.facilities?.[0]?.resources?.video?.url,
          },
          // {
          //   video_thumbnail: "/images/slider/Lab08.jpeg",
          //   src: "/videos/lv_0_20250221192257.mp4",
          // },
        ],
        modal_images: [
          // "/images/slider/Basketball.jpeg",
          OtherData?.facilities?.[0]?.resources?.featuredImage?.url,
        ], // Use an array for multiple images
      },
    },
    {
      image: OtherData?.facilities?.[1]?.resources?.image?.url,
      text: "Extracurriculars",
      modal_data: {
        modal_images: [
          OtherData?.facilities?.[1]?.resources?.featuredImage?.url,
          "/images/slider/Dance Team02.jpeg",
          "/images/slider/DSC04762.jpg",
          "/images/slider/Exhibition India.jpeg",
          "/images/slider/Exhibition Smart Village.jpeg",
        ],
        videos: [
          {
            video_thumbnail: OtherData?.facilities?.[1]?.resources?.image?.url,
            src: OtherData?.facilities?.[1]?.resources?.video?.url,
          },
          {
            video_thumbnail: "/images/slider/Dance Team02.jpeg",
            src: "/videos/navratri-2024-performances-in-communities.mp4",
          },
        ],
      },
    },
    {
      image: OtherData?.facilities?.[2]?.resources?.image?.url,
      text: "Classroom & Labs",
      modal_data: {
        modal_images: [
          OtherData?.facilities?.[2]?.resources?.featuredImage?.url,
          "/images/slider/Gayatri 01.jpeg",
        ],
        videos: [
          {
            video_thumbnail: OtherData?.facilities?.[2]?.resources?.image?.url,
            src: OtherData?.facilities?.[2]?.resources?.video?.url,
          },
        ],
      },
    },
    {
      image: "/images/slider/Exhibit01.jpeg",
      // image: "/images/slider/Basketball_2024.jpg",
      text: "Student Exhibition",
      modal_data: {
        videos: [
          // Use an array if multiple videos are needed
          {
            video_thumbnail: "/images/slider/Exhibit01.jpeg",
            src: "/videos/MA Third Annual Exhibition Jan13-2025 (1).mp4",
          },
          // {
          //   video_thumbnail: "/images/slider/Lab08.jpeg",
          //   src: "/videos/lv_0_20250221192257.mp4",
          // },
        ],
        modal_images: [
          "/images/slider/DSC02077.jpg",
          "/images/slider/DSC02167.jpg",
        ], // Use an array for multiple images
      },
    },
  ];

  const facilitiesSettings = {
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
    <Layout>
      <section className='about-banner'>
        <div className='container-fluid'>
          <img
            src={OtherData?.masterbanner?.image?.url}
            alt={OtherData?.masterbanner?.altText}
            className='about-img'
          />
          <div className='about-banner-text'>
            <h1 className='banner-title mt-5'>
              {OtherData?.masterbanner?.title}
            </h1>
            <p className='paragraph bridge-para p-0 pt-2 para-two'>
              <div
                className='small-titles'
                dangerouslySetInnerHTML={{
                  __html: OtherData?.masterbanner?.description,
                }}
              />
            </p>
          </div>
        </div>
      </section>

      <section className='enhancing-section history-section'>
        <div className='container'>
          <div className='row align-items-center justify-content-center'>
            <div className='col-lg-7'>
              {/* <h6 className="section-subtitle"></h6> */}

              <h2 className='section-title'> {data.title}</h2>

              <p className='paragraph bridge-para p-0 pt-2'>
                <div dangerouslySetInnerHTML={{ __html: data.description }} />
              </p>
            </div>

            <div className='col-lg-5 col-md-5 col-12'>
              <div className='enhancing-img text-center'>
                <img
                  src={data.logo?.url}
                  alt={data.logo?.altText}
                  style={{ height: "300px" }}
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className='team-section'>
        <div className='container'>
          <div className='row'>
            <div className='col-lg-4'>
              {/* <h6 className="section-subtitle">Leadership team</h6> */}

              <h2 className='section-title'>Leadership team</h2>
            </div>
          </div>
          <div className='row align-items-center justify-content-center'>
            <div className='col-lg-8'>
              <div className='row align-items-center justify-content-center'>
                <div className='col-lg-5'>
                  <div className='team-div'>
                    <div className='team-img-div'>
                      <img
                        src={
                          OtherData?.leadershipteam?.members?.[0]?.image?.url
                        }
                        alt={
                          OtherData?.leadershipteam?.members?.[0]?.image
                            ?.altText
                        }
                        className='team-img mt-4'
                      />
                      <img
                        src='/images/banner/Vector 8.png'
                        alt='down-img'
                        className='down-img'
                      />
                    </div>
                    <div className='team-content mt-4'>
                      <h6>{OtherData?.leadershipteam?.members?.[0]?.name}</h6>
                      <p>
                        <div
                          dangerouslySetInnerHTML={{
                            __html:
                              OtherData?.leadershipteam?.members?.[0]
                                ?.description,
                          }}
                        />
                      </p>
                    </div>
                  </div>
                </div>
                <div className='col-lg-5 offset-lg-1 mt-lg-0 mt-5'>
                  <div className='team-div'>
                    <div className='team-img-div '>
                      <img
                        src={
                          OtherData?.leadershipteam?.members?.[1]?.image?.url
                        }
                        alt={
                          OtherData?.leadershipteam?.members?.[1]?.image
                            ?.altText
                        }
                        className='team-img'
                      />
                      <img
                        src='/images/banner/Vector 6.png'
                        alt='up-img'
                        className='up-img'
                      />
                    </div>
                    <div className='team-content mt-4'>
                      <h6>{OtherData?.leadershipteam?.members?.[1]?.name}</h6>
                      <p>
                        <div
                          dangerouslySetInnerHTML={{
                            __html:
                              OtherData?.leadershipteam?.members?.[1]
                                ?.description,
                          }}
                        />
                      </p>
                    </div>
                  </div>
                </div>
                {/* <div className="custom-col mt-lg-0 mt-5">
                  <div className="team-div">
                    <div className="team-img-div">
                      <img
                        src="/images/banner/two-students-studying-together-online-with-laptop-park 1.png"
                        alt="team"
                        className="team-img"
                      />
                      <img
                        src="/images/banner/Vector 8.png"
                        alt="down-img"
                        className="down-img"
                      />
                    </div>
                    <div className="team-content mt-4">
                      <h6>Name</h6>
                      <p>Designation</p>
                    </div>
                  </div>
                </div>
                <div className="custom-col mt-lg-0 mt-5">
                  <div className="team-div">
                    <div className="team-img-div">
                      <img
                        src="/images/banner/two-students-studying-together-online-with-laptop-park 1.png"
                        alt="team"
                        className="team-img"
                      />
                      <img
                        src="/images/banner/Vector 6.png"
                        alt="up-img"
                        className="up-img"
                      />
                    </div>
                    <div className="team-content mt-4">
                      <h6>Name</h6>
                      <p>Designation</p>
                    </div>
                  </div>
                </div>
                <div className="custom-col mt-lg-0 mt-5">
                  <div className="team-div">
                    <div className="team-img-div">
                      <img
                        src="/images/banner/two-students-studying-together-online-with-laptop-park 1.png"
                        alt="team"
                        className="team-img"
                      />
                      <img
                        src="/images/banner/Vector 8.png"
                        alt="down-img"
                        className="down-img"
                      />
                    </div>
                    <div className="team-content mt-4">
                      <h6>Name</h6>
                      <p>Designation</p>
                    </div>
                  </div>
                </div> */}
              </div>
            </div>
          </div>
        </div>
      </section>

      <Achivements />

      <section className='half-img-section about-half-img d-flex align-items-center'>
        <div className='container'>
          <div className='row'>
            <div className='col-lg-12'>
              <div className='row justify-content-center'>
                <div className='col-lg-10'>
                  {/* <h6 className="section-subtitle">CURRICULUM</h6> */}

                  <h2 className='section-title text-center'>
                    An integrated Curriculum at each grade level that prepares
                    them for life.
                  </h2>
                </div>

                {/* <div className="col-lg-6 offset-lg-1">
                  <p className="paragraph bridge-para">
                    Lorem ipsum dolor sit amet. Vel cupiditate iusto id officia
                    dolores sed pariatur vero est asperiores veniam ea inventore
                    ipsa. Hic tenetur necessitatibus eum dolores consequuntur 33
                    autem saepe et assumenda nisi. Est earum provident est vitae
                    laudantium et omnis quae eos iusto architecto ut fugiat
                    itaque.
                  </p>
                </div> */}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className='bg-img-row'>
        <div className='container'>
          {/* <h6 className="section-subtitle">lorem ipsum set</h6> */}

          <h2 className='section-title'>Grade levels offered</h2>

          <div className='values-div grades-div'>
            <div className='col-lg-12'>
              <div className='row'>
                <div className='col-xl-3 col-lg-6 col-md-6'>
                  <div className='single-value sing-box-one'>
                    <div className='d-flex flex-column'>
                      <div>
                        <img
                          src={OtherData?.gradelevels?.[0]?.icon?.url}
                          alt={OtherData?.gradelevels?.[0]?.icon?.altText}
                        />
                      </div>

                      <h2 className='section-title pt-3 pb-0 grade-title'>
                        {OtherData?.gradelevels?.[0]?.title}
                      </h2>
                    </div>

                    <p className='pt-1 grade-para'>
                      <div
                        dangerouslySetInnerHTML={{
                          __html: OtherData?.gradelevels?.[0]?.description,
                        }}
                      />
                    </p>
                  </div>
                </div>
                <div className='col-xl-3 col-lg-6 col-md-6 mt-md-0 mt-5'>
                  <div className='single-value sing-box-one'>
                    <div className='d-flex flex-column'>
                      <div>
                        <img
                          src={OtherData?.gradelevels?.[1]?.icon?.url}
                          alt={OtherData?.gradelevels?.[1]?.icon?.altText}
                        />
                      </div>

                      <h2 className='section-title pt-3 pb-0 grade-title'>
                        {OtherData?.gradelevels?.[1]?.title}{" "}
                      </h2>
                    </div>

                    <p className='pt-1 grade-para'>
                      <div
                        dangerouslySetInnerHTML={{
                          __html: OtherData?.gradelevels?.[1]?.description,
                        }}
                      />
                    </p>
                  </div>
                </div>
                <div className='col-xl-3 col-lg-6 col-md-6 mt-xl-0 mt-5'>
                  <div className='single-value sing-box-one'>
                    <div className='d-flex flex-column'>
                      <div>
                        <img
                          src={OtherData?.gradelevels?.[2]?.icon?.url}
                          alt={OtherData?.gradelevels?.[2]?.icon?.altText}
                        />
                      </div>

                      <h2 className='section-title pt-3 pb-0 grade-title'>
                        {OtherData?.gradelevels?.[2]?.title}{" "}
                      </h2>
                    </div>

                    <p className='pt-1 grade-para'>
                      <div
                        dangerouslySetInnerHTML={{
                          __html: OtherData?.gradelevels?.[2]?.description,
                        }}
                      />
                    </p>
                  </div>
                </div>
                <div className='col-xl-3 col-lg-6 col-md-6 mt-xl-0 mt-5'>
                  <div className='single-value sing-box-one'>
                    <div className='d-flex flex-column'>
                      <div>
                        <img
                          src={OtherData?.gradelevels?.[3]?.icon?.url}
                          alt={OtherData?.gradelevels?.[3]?.icon?.altText}
                        />
                      </div>
                      <h2 className='section-title pt-3 pb-0 grade-title'>
                        {OtherData?.gradelevels?.[3]?.title}{" "}
                      </h2>
                    </div>

                    <p className='pt-1 grade-para'>
                      <div
                        dangerouslySetInnerHTML={{
                          __html: OtherData?.gradelevels?.[3]?.description,
                        }}
                      />
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className='apply-section'>
        <div className='container'>
          <h2 className='section-title pb-2'>How to Apply</h2>
          <div className='apply-btn-div'>
            <button className='custom-btn bridge-btn me-4'>
              {console.log(OtherData?.howtoapply?.[0]?.whatsapp, "whatsapp")}
              <NavLink
                className='nav-link'
                target='_blank'
                to={`https://wa.me/${OtherData?.howtoapply?.[0]?.whatsapp}`}
              >
                <i class='fa-brands fa-whatsapp'></i> WHATSAPP US
              </NavLink>
            </button>

            <button
              className='custom-btn bridge-btn me-4'
              onClick={() =>
                document
                  .getElementById("contact-section-one")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
            >
              <i class='fa-regular fa-address-book'></i> CONTACT US
            </button>

            <button className='custom-btn bridge-btn'>
              <NavLink
                className='nav-link'
                target='_blank'
                to={`https://www.instagram.com/${OtherData?.howtoapply?.[0]?.instagram}`}
              >
                <i class='fa-brands fa-instagram'></i> DM US
              </NavLink>
            </button>
          </div>
        </div>
      </section>

      <section className='facilties-slider'>
        <div className='container'>
          <h2 className='section-title'>{OtherData?.facilities?.[0]?.title}</h2>
        </div>
        <div className='row'>
          <div
            className='home-slick-slider wow'
            data-aos='zoom-in' // Fade in as you scroll
            data-aos-duration='1500'
          >
            <FacilitiesSlider
              testimonials={OtherData?.facilities || []}
              settings={facilitiesSettings}
              items={facilities}
            />
          </div>
        </div>
      </section>

      <Testimonials testimonials={OtherData?.testimonials || []} />

      <section className='contact-info'>
        <div className='container'>
          <div className='row'>
            <div className='col-lg-5'>
              <h6 className='section-subtitle'>Contact Info</h6>

              <h2 className='section-title'>
                We are always happy to assist you
              </h2>
            </div>
            <div className='col-lg-7'>
              <div className='row'>
                <div className='col-lg-6 mt-lg-0 mt-5'>
                  <div className='contact-div'>
                    <h6> {OtherData?.contactinfo?.[0]?.title} </h6>{" "}
                    <span></span>
                    <h6>
                      <a href='mailto:Info.manasacademy@mymanas.org'>
                        {OtherData?.contactinfo?.[0]?.email}
                      </a>
                    </h6>
                    {/* <h6>(808) 998-34256</h6> */}
                    <p>
                      Address: <br /> {OtherData?.contactinfo?.[0]?.address}
                    </p>
                  </div>
                </div>
                {/* <div className="col-lg-5 offset-lg-1 offset-0 mt-lg-0 mt-5">
                  <div className="contact-div">
                    <h6>US <img
                        src="https://flagcdn.com/w40/us.png"
                        width="40"
                        alt="USA Flag"
                      /></h6> <span></span>
                    <h6>
                      <a href="mailto:Info.manasacademy@mymanas.org">
                        Info.manasacademy@mymanas.org
                      </a>
                    </h6> */}
                {/* <h6>(808) 998-34256</h6> */}
                {/* <p>
                      Address: <br />
                      2213 Nantucket Dr. Unit C, Houston, TX 77057
                    </p>
                  </div>
                </div> */}
              </div>
              <div className='row mt-3'>
                <div className='contact-div'>
                  <h6>
                    For Jobs, send resume to{" "}
                    <a href='mailto:hr.manasacademy@mymanas.org'>
                      {OtherData?.contactinfo?.[0]?.resumeLink}
                    </a>
                  </h6>
                </div>
              </div>
            </div>
          </div>

          {/* <div className="row mt-5">
            <div className="contact-div d-flex align-items-center justify-content-center">
              <h6>
                For Admission and Additional Information, send us a message or
                call __________:
              </h6>
            </div>
          </div> */}
        </div>
      </section>

      <section id='contact-section-one'>
        <ReachOut />
      </section>
    </Layout>
  );
};

export default Academy;
