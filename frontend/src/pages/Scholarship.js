import React, { useEffect, useState } from "react";
import Layout from "../components/Layout";
import { NavLink } from "react-router-dom";
import AwardeesSlider from "../components/AwardeesSlider";
import { getRequest } from "../api/api";

const Scholarship = () => {
  const [data, setData] = useState([]);
  const [OtherData, setOtherData] = useState([]);

  const fetchData = async () => {
    const res = await getRequest("/scholarships/overview");
    if (res.success) {
      setData(res.data[0]);
    } else {
    }
  };
  console.log(data, "uihuyg");

  const fetchOtherData = async () => {
    try {
      const responses = await Promise.allSettled([
        getRequest("/scholarships/application-process"),
        getRequest("/scholarships/application-timeline"),
        getRequest("/scholarships/application-content"),
        getRequest("/scholarships/documents"),
        getRequest("/scholarships/notification"),
        getRequest("/scholarships/scholarship-awardees"),
        getRequest("/scholarships/our-goal"),
        getRequest("/masterbanner"),
      ]);
      console.log(responses, "responsesfefe");

      const resultObj = {
        applicationprocess:
          responses[0].status === "fulfilled"
            ? responses[0].value.data[0]
            : null,
        applicationtimeline:
          responses[1].status === "fulfilled" ? responses[1].value.data : null,
        applicationcontent:
          responses[2].status === "fulfilled"
            ? responses[2].value.data[0]
            : null,
        documents:
          responses[3].status === "fulfilled"
            ? responses[3].value.data[0]
            : null,
        notification:
          responses[4].status === "fulfilled"
            ? responses[4].value.data[0]
            : null,
        scholarshipawardees:
          responses[5].status === "fulfilled"
            ? responses[5].value.data[0]
            : null,
        ourgoal:
          responses[6].status === "fulfilled"
            ? responses[6].value.data[0]
            : null,
        masterbanner:
          responses[7].status === "fulfilled"
            ? responses[7].value.data[2]
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
          </div>
        </div>
      </section>

      <section className='assistance-section'>
        <div className='container'>
          <h4 className='small-title'>
            <div
              className='small-title'
              dangerouslySetInnerHTML={{
                __html: data?.description,
              }}
            />
          </h4>
        </div>
      </section>

      <section className='shaping-section'>
        <div className='container'>
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
                    src={OtherData?.applicationprocess?.image?.url}
                    alt={OtherData?.applicationprocess?.image?.altText}
                  />
                </div>

                <img
                  src='/images/banner/Vector 7.png'
                  alt='vector-7'
                  className='bridging-img3'
                />
              </div>
            </div>
            <div className='col-lg-6'>
              <div className='shaping-content bridging-text'>
                {/* <h6 className="section-subtitle">LOREM IPSUM</h6> */}

                <h2 className='section-title w-100'>
                  {OtherData?.applicationprocess?.title}
                </h2>

                <p className='paragraph bridge-para'>
                  <div
                    dangerouslySetInnerHTML={{
                      __html: OtherData?.applicationprocess?.description,
                    }}
                  />
                </p>

                <button className='custom-btn bridge-btn'>
                  <NavLink
                    className='nav-link'
                    to={OtherData?.applicationprocess?.buttonLink}
                    onClick={() => window.scrollTo(0, 0)}
                  >
                    {OtherData?.applicationprocess?.buttonText}
                  </NavLink>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className='application-section'>
        <div className='container'>
          {/* <h6 className="section-subtitle">Timeline</h6> */}

          <h2 className='section-title'>
            {OtherData?.applicationtimeline?.[0]?.title}
          </h2>

          <div className='row'>
            <div className='col-lg-12'>
              <div className='row'>
                <div className='application col-lg-3 col-md-6 col-12 '>
                  <div className='application-div'>
                    <img src='/images/icons/calendar.png' alt='calender' />
                    <h5>
                      {OtherData?.applicationtimeline?.[0]?.items?.[0]?.date}
                    </h5>
                    <p>
                      {OtherData?.applicationtimeline?.[0]?.items?.[0]?.title}
                    </p>
                  </div>

                  <div>
                    <img
                      src='/images/icons/arrow-right-circle.png'
                      alt='arrow-right'
                    />
                  </div>
                </div>

                <div className='application col-lg-3 col-md-6 col-12 mt-md-0 mt-5'>
                  <div className='application-div'>
                    <img src='/images/icons/calendar.png' alt='calender' />
                    <h5>
                      {OtherData?.applicationtimeline?.[0]?.items?.[1]?.date}
                    </h5>
                    <p>
                      {OtherData?.applicationtimeline?.[0]?.items?.[1]?.title}
                    </p>
                  </div>

                  <div>
                    <img
                      src='/images/icons/arrow-right-circle.png'
                      alt='arrow-right'
                    />
                  </div>
                </div>

                <div className='application col-lg-3 col-md-6 col-12 mt-lg-0 mt-5'>
                  <div className='application-div'>
                    <img src='/images/icons/calendar.png' alt='calender' />
                    <h5>
                      {OtherData?.applicationtimeline?.[0]?.items?.[2]?.date}
                    </h5>
                    <p>
                      {OtherData?.applicationtimeline?.[0]?.items?.[2]?.title}
                    </p>
                  </div>

                  <div>
                    <img
                      src='/images/icons/arrow-right-circle.png'
                      alt='arrow-right'
                    />
                  </div>
                </div>

                <div className='application col-lg-3 col-md-6 col-12 mt-lg-0 mt-5'>
                  <div className='application-div'>
                    <img src='/images/icons/calendar.png' alt='calender' />
                    <h5>
                      {OtherData?.applicationtimeline?.[0]?.items?.[3]?.date}
                    </h5>
                    <p>
                      {OtherData?.applicationtimeline?.[0]?.items?.[3]?.title}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className='steps-section'>
        <div className='container'>
          {/* <h6 className="section-subtitle">STEPS</h6> */}

          <h2 className='section-title'>
            {OtherData?.applicationcontent?.title}
          </h2>
          <div className='row'>
            <div className='col-lg-12'>
              <div className='row'>
                <div className='col-lg-4'>
                  <div className='steps-div'>
                    <h2 className='steps-no'>1</h2>
                    <p className='paragraph bridge-para ps-4 mt-0 mb-4'>
                      <div
                        dangerouslySetInnerHTML={{
                          __html: OtherData?.applicationcontent?.contents?.[0],
                        }}
                      />
                    </p>
                  </div>
                </div>
                <div className='col-lg-4'>
                  <div className='steps-div'>
                    <h2 className='steps-no'>2</h2>

                    <p className='paragraph bridge-para ps-4 mt-0 mb-4'>
                      <div
                        dangerouslySetInnerHTML={{
                          __html: OtherData?.applicationcontent?.contents?.[1],
                        }}
                      />
                    </p>
                  </div>
                </div>
                <div className='col-lg-4'>
                  <div className='steps-div'>
                    <h2 className='steps-no'>3</h2>

                    <p className='paragraph bridge-para ps-4 mt-0 mb-4'>
                      <div
                        dangerouslySetInnerHTML={{
                          __html: OtherData?.applicationcontent?.contents?.[2],
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

      <section className='documents-section'>
        <div className='container'>
          {/* <h6 className="section-subtitle"></h6> */}

          <h2 className='section-title'> {OtherData?.documents?.title}</h2>
          <div className='col-lg-12'>
            <div className='row'>
              <div className='col-lg-7'>
                <ul className='documents-div'>
                  <div
                    dangerouslySetInnerHTML={{
                      __html: OtherData?.documents?.description,
                    }}
                  />
                </ul>
              </div>
              <div className='col-lg-5 d-flex justify-content-lg-end justify-content-center'>
                <div>
                  <img
                    src={OtherData?.documents?.image?.url}
                    alt={OtherData?.documents?.image?.altText}
                    className='scholr-img-one'
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className='bg-img-row'>
        <div className='container'>
          {/* <h6 className="section-subtitle">Lorem Ipsum</h6> */}

          <h2 className='section-title'>{OtherData?.notification?.title}</h2>

          <p className='paragraph bridge-para'>
            <div
              dangerouslySetInnerHTML={{
                __html: OtherData?.notification?.description,
              }}
            />
          </p>

          <div className='values-div'>
            <div className='col-lg-12'>
              <div className='row'>
                <div className='col-lg-4'>
                  <div className='single-value'>
                    <div className='value-title align-items-start'>
                      <img src='/images/icons/Group 8339.png' alt='value-img' />
                      <p className='ps-3 pt-2'>
                        <div
                          dangerouslySetInnerHTML={{
                            __html: OtherData?.notification?.contents?.[0],
                          }}
                        />
                      </p>
                    </div>
                  </div>
                </div>
                <div className='col-lg-4'>
                  <div className='single-value'>
                    <div className='value-title align-items-start'>
                      <img src='/images/icons/Group 8339.png' alt='value-img' />
                      <p className='ps-3 pt-2'>
                        <div
                          dangerouslySetInnerHTML={{
                            __html: OtherData?.notification?.contents?.[1],
                          }}
                        />{" "}
                      </p>
                    </div>
                  </div>
                </div>

                <div className='col-lg-4'>
                  <div className='single-value'>
                    <div className='value-title align-items-start'>
                      <img src='/images/icons/Group 8339.png' alt='value-img' />
                      <p className='ps-3 pt-2'>
                        <div
                          dangerouslySetInnerHTML={{
                            __html: OtherData?.notification?.contents?.[2],
                          }}
                        />
                      </p>
                    </div>
                  </div>
                </div>
                <div className='col-lg-4'>
                  <div className='single-value'>
                    <div className='value-title align-items-start'>
                      <img src='/images/icons/Group 8339.png' alt='value-img' />
                      <p className='ps-3 pt-2'>
                        <div
                          dangerouslySetInnerHTML={{
                            __html: OtherData?.notification?.contents?.[3],
                          }}
                        />
                      </p>
                    </div>
                  </div>
                </div>
                <div className='col-lg-4'>
                  <div className='single-value'>
                    <div className='value-title align-items-start '>
                      <img src='/images/icons/Group 8339.png' alt='value-img' />
                      <p className='ps-3 pt-2'>
                        <div
                          dangerouslySetInnerHTML={{
                            __html: OtherData?.notification?.contents?.[4],
                          }}
                        />
                      </p>
                    </div>
                  </div>
                </div>
                <div className='col-lg-4'>
                  <div className='single-value'>
                    <div className='value-title align-items-start'>
                      <img src='/images/icons/Group 8339.png' alt='value-img' />
                      <p className='ps-3 pt-2'>
                        <div
                          dangerouslySetInnerHTML={{
                            __html: OtherData?.notification?.contents?.[5],
                          }}
                        />
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className='awardess-section'>
        <div className='container'>
          {/* <h6 className="section-subtitle">SCHOLARSHIP AWARDEES</h6> */}

          <h2 className='section-title'>
            {OtherData?.scholarshipawardees?.title}
          </h2>
          <AwardeesSlider
            awardees={OtherData?.scholarshipawardees?.awardees || []}
          />
        </div>
      </section>

      <section className='goal-section'>
        <div className='container'>
          <div className='row'>
            <div className='col-lg-5'>
              {/* <h6 className="section-subtitle">LOREM IPSUM</h6> */}

              <h2 className='section-title'>{OtherData?.ourgoal?.title}</h2>
            </div>
            <div className='col-lg-7'>
              <p className='paragraph bridge-para'>
                <div
                  dangerouslySetInnerHTML={{
                    __html: OtherData?.ourgoal?.description,
                  }}
                />
              </p>
            </div>
          </div>

          <div className='row mt-5'>
            <div className='col-lg-4 col-md-6 col-12'>
              <div>
                <img
                  src={OtherData?.ourgoal?.goals?.[0]?.images?.[0]?.url}
                  alt={OtherData?.ourgoal?.goals?.[0]?.images?.[0]?.altText}
                  className=' w-sm-100 schol-img-two'
                />
                <h4 className='banner-subtitle small-line-height text-start mt-4'>
                  {OtherData?.ourgoal?.goals?.[0]?.title}
                </h4>
                <p className='paragraph bridge-para'>
                  <div
                    dangerouslySetInnerHTML={{
                      __html: OtherData?.ourgoal?.goals?.[0]?.description,
                    }}
                  />
                </p>
              </div>
            </div>
            <div className='col-lg-5 col-md-6 col-12'>
              <div>
                <img
                  src={OtherData?.ourgoal?.goals?.[1]?.images?.[0]?.url}
                  alt={OtherData?.ourgoal?.goals?.[1]?.images?.[0]?.altText}
                  className='w-auto w-sm-100'
                />

                <h4 className='banner-subtitle small-line-height text-start mt-4'>
                  {OtherData?.ourgoal?.goals?.[1]?.title}
                </h4>
                <p className='paragraph bridge-para'>
                  <div
                    dangerouslySetInnerHTML={{
                      __html: OtherData?.ourgoal?.goals?.[1]?.description,
                    }}
                  />
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Scholarship;
