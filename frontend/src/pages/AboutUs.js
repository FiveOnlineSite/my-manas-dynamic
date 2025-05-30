import React, { useEffect, useState } from "react";
import Layout from "../components/Layout";
import Difference from "../components/Difference";
import { NavLink } from "react-router-dom";
import { getRequest } from "../api/api";

const AboutUs = () => {
  const [data, setData] = useState([]);
  const [OtherData, setOtherData] = useState([]);

  const fetchData = async () => {
    const res = await getRequest("/about/overview");
    if (res.success) {
      setData(res.data[0]);
    } else {
    }
  };
  console.log(data, "uihuyg");

  const fetchOtherData = async () => {
    try {
      const responses = await Promise.allSettled([
        getRequest("/about/our-values"),
        getRequest("/about/our-inspiration"),
        getRequest("/about/future-leaders"),
        getRequest("/masterquote"),
      ]);
      console.log(responses, "responsesfefe");

      const resultObj = {
        ourvalues:
          responses[0].status === "fulfilled"
            ? responses[0].value.data[0]
            : null,
        ourinspiration:
          responses[1].status === "fulfilled" ? responses[1].value.data : null,
        futureleaders:
          responses[2].status === "fulfilled"
            ? responses[2].value.data[0]
            : null,
        masterquote:
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
            src='/images/banner/AboutUs-01.jpeg'
            alt='about-banner'
            className='about-img'
          />
          <div className='about-banner-text banner-text'>
            <h1 className='banner-title'>Academic Excellence Within Reach</h1>
          </div>
        </div>
      </section>

      <section className='inspiring-section'>
        <div className='container'>
          <div className='col-lg-12'>
            <div className='row'>
              <div className='col-lg-4'>
                <h4 className='small-title text-start px-0 py-3'>
                  {data?.title}
                </h4>
              </div>
              <div className='col-lg-4'>
                <p className='paragraph bridge-para light-paragraph'>
                  <div
                    dangerouslySetInnerHTML={{ __html: data?.description1 }}
                  />
                </p>
              </div>
              <div className='col-lg-4'>
                <p className='paragraph bridge-para light-paragraph'>
                  <div
                    dangerouslySetInnerHTML={{ __html: data?.description2 }}
                  />
                </p>
              </div>
            </div>

            <div className='row'>
              <div className='col-lg-12'>
                <div className='row'>
                  <div className='col-lg-6 mt-5'>
                    <div className='director'>
                      <div className='director-img'>
                        <img
                          src={data?.bodImage?.url}
                          alt={data?.bodImage?.altText}
                        />
                      </div>
                      <div className='director-content'>
                        <h6>{data?.bodName}</h6>
                        <p>Board of director</p>
                      </div>
                    </div>
                  </div>
                  <div className='col-lg-6 d-flex justify-content-lg-center justify-content-start'>
                    <div>
                      <img
                        src={data?.bodSignature?.url}
                        alt={data?.bodSignature?.altText}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Difference masterquote={OtherData?.masterquote || []} />

      <section className='half-img-section about-half-img'>
        <div className='container'>
          <div className='row'>
            <div className='container'>
              <div className='row justify-content-center'>
                <div className='half-img-text about-half-img-text p-lg-5 mb-0'>
                  <h2
                    className='section-title text-center wow w-lg-50 w-100 p-1'
                    data-aos='zoom-in' // Fade in as you scroll
                    data-aos-duration='1500'
                  >
                    An inspiring vision to uplift youth.
                  </h2>

                  {/* <p className="paragraph bridge-para text-center">
                  Providing education that’s accessible to rural communities and opening learning opportunities that integrate top-tier education with holistic life skills.
                  </p> */}

                  <button className='custom-btn bridge-btn read-btn'>
                    <NavLink className='nav-link' to='/our-scope'>
                      GET STARTED
                    </NavLink>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className='bg-img-row'>
        <div className='container'>
          {/* <h6 className="section-subtitle"></h6> */}

          <h2 className='section-title'>{OtherData?.ourvalues?.title}</h2>

          <p className='paragraph bridge-para'>
            <div
              dangerouslySetInnerHTML={{
                __html: OtherData?.ourvalues?.description,
              }}
            />
          </p>

          <div className='values-div'>
            <div className='col-lg-12'>
              <div className='row'>
                <div className='col-lg-4'>
                  <div className='single-value'>
                    <div className='value-title'>
                      <img
                        src={OtherData?.ourvalues?.values?.[0]?.icon?.url}
                        alt={OtherData?.ourvalues?.values?.[0]?.icon?.altText}
                      />
                      <h5>{OtherData?.ourvalues?.values?.[0]?.title}</h5>
                    </div>

                    <p>
                      <div
                        dangerouslySetInnerHTML={{
                          __html:
                            OtherData?.ourvalues?.values?.[0]?.description,
                        }}
                      />
                    </p>
                  </div>
                </div>
                <div className='col-lg-4'>
                  <div className='single-value'>
                    <div className='value-title'>
                      <img
                        src={OtherData?.ourvalues?.values?.[1]?.icon?.url}
                        alt={OtherData?.ourvalues?.values?.[1]?.icon?.altText}
                      />
                      <h5>{OtherData?.ourvalues?.values?.[1]?.title}</h5>
                    </div>

                    <p>
                      <div
                        dangerouslySetInnerHTML={{
                          __html:
                            OtherData?.ourvalues?.values?.[1]?.description,
                        }}
                      />
                    </p>
                  </div>
                </div>

                <div className='col-lg-4'>
                  <div className='single-value'>
                    <div className='value-title'>
                      <img
                        src={OtherData?.ourvalues?.values?.[2]?.icon?.url}
                        alt={OtherData?.ourvalues?.values?.[2]?.icon?.altText}
                      />
                      <h5>{OtherData?.ourvalues?.values?.[2]?.title}</h5>
                    </div>

                    <p>
                      <div
                        dangerouslySetInnerHTML={{
                          __html:
                            OtherData?.ourvalues?.values?.[2]?.description,
                        }}
                      />
                    </p>
                  </div>
                </div>
                <div className='col-lg-4'>
                  <div className='single-value'>
                    <div className='value-title'>
                      <img
                        src={OtherData?.ourvalues?.values?.[3]?.icon?.url}
                        alt={OtherData?.ourvalues?.values?.[3]?.icon?.altText}
                      />
                      <h5>{OtherData?.ourvalues?.values?.[3]?.title}</h5>
                    </div>

                    <p>
                      <div
                        dangerouslySetInnerHTML={{
                          __html:
                            OtherData?.ourvalues?.values?.[3]?.description,
                        }}
                      />
                    </p>
                  </div>
                </div>
                <div className='col-lg-4'>
                  <div className='single-value'>
                    <div className='value-title'>
                      <img
                        src={OtherData?.ourvalues?.values?.[4]?.icon?.url}
                        alt={OtherData?.ourvalues?.values?.[4]?.icon?.altText}
                      />
                      <h5>{OtherData?.ourvalues?.values?.[4]?.title}</h5>
                    </div>

                    <p>
                      <div
                        dangerouslySetInnerHTML={{
                          __html:
                            OtherData?.ourvalues?.values?.[4]?.description,
                        }}
                      />
                    </p>
                  </div>
                </div>
                <div className='col-lg-4'>
                  <div className='single-value'>
                    <div className='value-title'>
                      <img
                        src={OtherData?.ourvalues?.values?.[5]?.icon?.url}
                        alt={OtherData?.ourvalues?.values?.[5]?.icon?.altText}
                      />
                      <h5>{OtherData?.ourvalues?.values?.[5]?.title}</h5>
                    </div>

                    <p>
                      <div
                        dangerouslySetInnerHTML={{
                          __html:
                            OtherData?.ourvalues?.values?.[5]?.description,
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

      <section className='inspiration-section'>
        <h2 className='section-title text-center'>
          {OtherData?.ourinspiration?.[0]?.title}
        </h2>
        <div className='inspiration-div'>
          <div className='container'>
            <div className='col-lg-12'>
              <div className='row'>
                <div className='col-lg-6'>
                  <div>
                    <img
                      src={OtherData?.ourinspiration?.[0]?.image?.url}
                      alt={OtherData?.ourinspiration?.[0]?.image?.altText}
                    />
                  </div>
                </div>
                <div className='col-lg-6 mt-lg-0 mt-5'>
                  <div className='beloved-text'>
                    <h6 className='section-subtitle white-color'>
                      {OtherData?.ourinspiration?.[0]?.subtitle}
                    </h6>

                    <h2 className='section-title white-color'>
                      Our Beloved Manas
                    </h2>

                    <div className='inspiration-para'>
                      <p>
                        <div
                          dangerouslySetInnerHTML={{
                            __html: OtherData?.ourinspiration?.[0]?.description,
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
                  src={OtherData?.futureleaders?.[0]?.image?.url}
                  alt={OtherData?.futureleaders?.[0]?.image?.altText}
                  className='bridging-img1'
                />
                <div className='bridging-img2'>
                  <img src='/images/banner/A7402707 1.png' alt='briding-img' />
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
                {/* <h6 className="section-subtitle"></h6> */}

                <h2 className='section-title'>
                  {OtherData?.futureleaders?.title}
                </h2>

                <p className='paragraph bridge-para'>
                  <div
                    dangerouslySetInnerHTML={{
                      __html: OtherData?.futureleaders?.description,
                    }}
                  />
                </p>

                {/* <div className="donate-para"> */}
                <button className='custom-btn bridge-btn'>
                  <NavLink
                    className='nav-link'
                    to={OtherData?.futureleaders?.buttonLink}
                    onClick={() => window.scrollTo(0, 0)}
                  >
                    {OtherData?.futureleaders?.buttonText}
                  </NavLink>
                </button>
              </div>

              {/* </div> */}
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default AboutUs;
