import React, { useEffect, useState } from "react";
import Layout from "../components/Layout";
import { NavLink } from "react-router-dom";
import Difference from "../components/Difference";
import Testimonials from "../components/Testimonials";
import Achivements from "../components/Achivements";
import DonateAchivement from "../components/DonateAchivement";
import { getRequest } from "../api/api";

const Donate = () => {
  const [data, setData] = useState([]);
  const [OtherData, setOtherData] = useState([]);

  const fetchData = async () => {
    const res = await getRequest("/donate/about-us");
    if (res.success) {
      setData(res.data[0]);
    } else {
    }
  };

  // console.log(data, "uihuyg");

  const fetchOtherData = async () => {
    try {
      const responses = await Promise.allSettled([
        getRequest("/donate/contribution"),
        getRequest("/donate/achievements"),
        getRequest("/testimonials"),
        getRequest("/masterbanner"),
      ]);
      console.log(responses, "responsesfefe");

      const resultObj = {
        contribution:
          responses[0].status === "fulfilled"
            ? responses[0].value.data[0]
            : null,
        achievements:
          responses[1].status === "fulfilled" ? responses[1].value.data : null,
        testimonials:
          responses[2].status === "fulfilled"
            ? responses[2].value.data[0]
            : null,
        masterbanner:
          responses[3].status === "fulfilled"
            ? responses[3].value.data[5]
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
            alt={OtherData?.masterbanner?.image?.altText}
            className='about-img'
          />
          <div className='about-banner-text'>
            <h1 className='banner-title mt-5'>
              {OtherData?.masterbanner?.title}
            </h1>
          </div>
        </div>
      </section>

      <section className='inspiring-section'>
        <div className='container'>
          <div className='col-lg-12'>
            <div className='row'>
              <div className='col-lg-6'>
                <h4 className='section-title text-start p-0'>{data.title}</h4>
              </div>
              <div className='col-lg-6'>
                <p className='paragraph bridge-para light-paragraph mt-0'>
                  <div dangerouslySetInnerHTML={{ __html: data.description }} />
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className='half-img-section about-half-img'>
        <Difference />
      </section>
      <section className='bg-img-row'>
        <div className='container'>
          <div className='values-div'>
            <div className='col-lg-12'>
              <div className='row align-items-center'>
                <div className='col-lg-5'>
                  {/* <h6 className="section-subtitle">Lorem Ipsum</h6> */}

                  <h2 className='section-title'>
                    {OtherData?.contribution?.title}
                  </h2>
                </div>
                <div className='col-lg-7'>
                  <div className='row'>
                    <div className='col-lg-6'>
                      <div className='contribution-points p-2'>
                        <h1 className='section-title'>
                          {OtherData?.contribution?.items?.[0]?.title}
                        </h1>
                        <p className='paragraph bridge-para'>
                          <div
                            dangerouslySetInnerHTML={{
                              __html:
                                OtherData?.contribution?.items?.[0]
                                  ?.description,
                            }}
                          />
                        </p>
                      </div>
                    </div>
                    <div className='col-lg-6'>
                      <div className='contribution-points p-2'>
                        <h1 className='section-title'>
                          {" "}
                          {OtherData?.contribution?.items?.[1]?.title}
                        </h1>
                        <p className='paragraph bridge-para'>
                          <div
                            dangerouslySetInnerHTML={{
                              __html:
                                OtherData?.contribution?.items?.[1]
                                  ?.description,
                            }}
                          />
                        </p>
                      </div>
                    </div>
                    <div className='col-lg-6'>
                      <div className='contribution-points p-2'>
                        <h1 className='section-title'>
                          {" "}
                          {OtherData?.contribution?.items?.[2]?.title}
                        </h1>
                        <p className='paragraph bridge-para'>
                          <div
                            dangerouslySetInnerHTML={{
                              __html:
                                OtherData?.contribution?.items?.[2]
                                  ?.description,
                            }}
                          />
                        </p>
                      </div>
                    </div>
                    <div className='col-lg-6'>
                      <div className='contribution-points p-2'>
                        <h1 className='section-title'>
                          {" "}
                          {OtherData?.contribution?.items?.[3]?.title}
                        </h1>
                        <p className='paragraph bridge-para'>
                          <div
                            dangerouslySetInnerHTML={{
                              __html:
                                OtherData?.contribution?.items?.[3]
                                  ?.description,
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
        </div>
      </section>

      <DonateAchivement achievements={OtherData?.achievements || []} />

      <Testimonials testimonials={OtherData?.testimonials || []} />
    </Layout>
  );
};

export default Donate;
