import React, { useEffect, useState } from "react";
import Layout from "../components/Layout";
import { NavLink } from "react-router-dom";
import Difference from "../components/Difference";
import { getRequest } from "../api/api";

const Institution = () => {
  const [data, setData] = useState([]);
  const [OtherData, setOtherData] = useState([]);

  const fetchData = async () => {
    const res = await getRequest("/institutions/about-us");
    if (res.success) {
      setData(res.data[0]);
    } else {
    }
  };

  console.log(data, "uihuyg");

  const fetchOtherData = async () => {
    try {
      const responses = await Promise.allSettled([
        getRequest("/institutions/our-model"),
        getRequest("/institutions/our-institutions"),
        getRequest("/masterbanner"),
        getRequest("/masterquote"),
      ]);
      console.log(responses, "responsesfefe");

      const resultObj = {
        ourmodel:
          responses[0].status === "fulfilled"
            ? responses[0].value.data[0]
            : null,
        ourinstitutions:
          responses[1].status === "fulfilled" ? responses[1].value.data : null,
        masterbanner:
          responses[2].status === "fulfilled" ? responses[2].value.data : null,
        masterquote:
          responses[3].status === "fulfilled" ? responses[3].value.data[0] : null,
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
            src='/images/banner/KG Graduation 06.jpg'
            alt='scope-banner'
            className='about-img'
          />
          <div className='about-banner-text'>
            <h1 className='banner-title mt-5'>
              {OtherData?.masterbanner?.[1]?.title}
            </h1>
          </div>
        </div>
      </section>

      <section className='inspiring-section'>
        <div className='container'>
          <div className='col-lg-12'>
            <div className='row'>
              <div className='col-lg-5'>
                <h4 className='section-title text-start p-0'>{data.title}</h4>
              </div>
              <div className='col-lg-6 offset-lg-1 offset-0 '>
                <p className='paragraph bridge-para light-paragraph pt-0 mt-0'>
                  <div dangerouslySetInnerHTML={{ __html: data.description }} />
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className='bridging-gap'>
        <div className='container'>
          <div className='col-lg-12'>
            <div className='row align-items-center'>
              <div
                className='col-lg-6'
                data-aos='fade-right' // Fade in as you scroll
                data-aos-duration='1500'
              >
                {/* <h6 className="section-subtitle">Lorem Ipsum</h6> */}
                <h2 className='section-title'>{OtherData?.ourmodel?.title}</h2>
              </div>
              <div
                className='col-lg-6 wow'
                data-aos='fade-left' // Fade in as you scroll
                data-aos-duration='1500'
              >
                <p className='paragraph bridge-para'>
                  <div
                    dangerouslySetInnerHTML={{
                      __html: OtherData?.ourmodel?.description,
                    }}
                  />
                </p>
              </div>
            </div>

            <div className='row'>
              <div className='col-lg-6'>
                <div className='pillars-div'>
                  <div className='pillar-title d-flex justify-content-between'>
                    <h2 className='section-title small-line-height p-0'>
                      {OtherData?.ourmodel?.icons?.[0]?.title}
                    </h2>
                    <div>
                      <img
                        src={OtherData?.ourmodel?.icons?.[0]?.icon?.url}
                        alt={OtherData?.ourmodel?.icons?.[0]?.icon?.altText}
                      />
                    </div>
                  </div>
                  <p className='paragraph bridge-para pillars-para'>
                    <div
                      dangerouslySetInnerHTML={{
                        __html: OtherData?.ourmodel?.icons?.[0]?.description,
                      }}
                    />
                  </p>
                </div>
              </div>
              <div className='col-lg-6'>
                <div className='pillars-div'>
                  <div className='pillar-title d-flex justify-content-between'>
                    <h2 className='section-title small-line-height p-0'>
                      {OtherData?.ourmodel?.icons?.[1]?.title}
                    </h2>
                    <div>
                      <img
                        src={OtherData?.ourmodel?.icons?.[1]?.icon?.url}
                        alt={OtherData?.ourmodel?.icons?.[1]?.icon?.altText}
                      />
                    </div>
                  </div>
                  <p className='paragraph bridge-para pillars-para'>
                    <div
                      dangerouslySetInnerHTML={{
                        __html: OtherData?.ourmodel?.icons?.[1]?.description,
                      }}
                    />
                  </p>
                </div>
              </div>
              <div className='col-lg-6'>
                <div className='pillars-div'>
                  <div className='pillar-title d-flex justify-content-between'>
                    <h2 className='section-title small-line-height p-0'>
                      {OtherData?.ourmodel?.icons?.[2]?.title}
                    </h2>
                    <div>
                      <img
                        src={OtherData?.ourmodel?.icons?.[2]?.icon?.url}
                        alt={OtherData?.ourmodel?.icons?.[2]?.icon?.altText}
                      />
                    </div>
                  </div>
                  <p className='paragraph bridge-para pillars-para'>
                    <div
                      dangerouslySetInnerHTML={{
                        __html: OtherData?.ourmodel?.icons?.[2]?.description,
                      }}
                    />
                  </p>
                </div>
              </div>
              <div className='col-lg-6'>
                <div className='pillars-div'>
                  <div className='pillar-title d-flex justify-content-between'>
                    <h2 className='section-title small-line-height p-0'>
                      {OtherData?.ourmodel?.icons?.[3]?.title}
                    </h2>
                    <div>
                      <img
                        src={OtherData?.ourmodel?.icons?.[3]?.icon?.url}
                        alt={OtherData?.ourmodel?.icons?.[3]?.icon?.altText}
                      />
                    </div>
                  </div>
                  <p className='paragraph bridge-para pillars-para'>
                    <div
                      dangerouslySetInnerHTML={{
                        __html: OtherData?.ourmodel?.icons?.[3]?.description,
                      }}
                    />
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className='institutions-section'>
        <div className='container'>
          {/* <h6 className="section-subtitle">Our INSTITUTIONS</h6> */}
          <h2 className='section-title'>
            {OtherData?.ourinstitutions?.[0]?.title}
          </h2>
          <div className='col-lg-12'>
            <div className='row'>
              <div className='col-lg-6'>
                <div className='institutions-div'>
                  <img
                    src={OtherData?.ourinstitutions?.[0]?.image?.url}
                    alt={OtherData?.ourinstitutions?.[0]?.icon?.altText}
                  />
                  <p className='paragraph bridge-para mt-2'>
                    A My Manas Society Institution
                  </p>
                  <p className='paragraph bridge-para mt-2'>
                    A CBSE English Medium school serving over 90 villages in the
                    Badnawar and Sardarpur Tehsils in Dhar District, MP-India.
                    With the best infrastructure and qualified staff, our
                    emphasis is on well-rounded education that involves
                    physical, mental, moral, and spiritual aspects of learning,
                    which improves our students’ critical thinking, athletic
                    ability, and self-discipline.
                  </p>

                  <button className='custom-btn bridge-btn bridge-btn-one my-3'>
                    <NavLink
                      className='nav-link'
                      to='/academy'
                      // onClick={() => window.scrollTo(0, 0)}
                    >
                      KNOW MORE
                    </NavLink>
                  </button>
                </div>
              </div>
              <div className='col-lg-6'>
                <div className='institutions-div'>
                  <img
                    src={OtherData?.ourinstitutions?.[1]?.image?.url}
                    alt={OtherData?.ourinstitutions?.[1]?.icon?.altText}
                    height='170px'
                  />
                  <p className='paragraph bridge-para mt-2'>
                    A Manas Sanctuary Foundation Institution
                  </p>
                  <p className='paragraph bridge-para mt-2'>
                    <strong>—COMING SOON—</strong> <br />
                    An Integrated Learning Environment at Manas Sanctuary,
                    India. At Manas Sanctuary, Intellectual, Emotional and
                    Social educational programs will be provided in an
                    environment that fosters continuous learning to develop a
                    growth mindset. With open indoor and outdoor learning spaces
                    in over a 10-acre property away from city noises and
                    pollution, the Sanctuary vision includes housing for
                    students with teacher families on-site.
                  </p>

                  <button className='custom-btn bridge-btn bridge-btn-one my-3'>
                    <NavLink
                      className='nav-link'
                      to='/vidhya-vanam'
                      // onClick={() => window.scrollTo(0, 0)}
                    >
                      KNOW MORE
                    </NavLink>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Difference masterquote={OtherData?.masterquote || []} />
    </Layout>
  );
};

export default Institution;
