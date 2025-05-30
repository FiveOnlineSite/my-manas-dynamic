import React, { useEffect, useState } from "react";
import Layout from "../components/Layout";
import { NavLink } from "react-router-dom";
import Difference from "../components/Difference";
import ReachOut from "../components/ReachOut";
import { getRequest } from "../api/api";

const Scope = () => {
  const [data, setData] = useState([]);
  const [OtherData, setOtherData] = useState([]);

  const fetchData = async () => {
    const res = await getRequest("/ourscope/banner");
    if (res.success) {
      setData(res.data[0]);
    } else {
    }
  };
  console.log(data, "uihuyg");

  const fetchOtherData = async () => {
    try {
      const responses = await Promise.allSettled([
        getRequest("/ourscope/overview"),
        getRequest("/ourscope/scholarship"),
        getRequest("/ourscope/institutions"),
        getRequest("/masterquote"),
      ]);
      console.log(responses, "responsesfefe");

      const resultObj = {
        overview:
          responses[0].status === "fulfilled"
            ? responses[0].value.data[0]
            : null,
        scholarship:
          responses[1].status === "fulfilled" ? responses[1].value.data : null,
        institutions:
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
            src={data?.image?.url}
            alt={data?.image?.altText}
            className='about-img'
          />
          <div className='about-banner-text'>
            <h5 className='banner-subtitle'>EDUCATION</h5>
            <h1 className='banner-title'>{data?.title}</h1>
          </div>
        </div>
      </section>

      <section className='assistance-section'>
        <div className='container'>
          <h4 className='small-title'>
            <div
              className='small-title'
              dangerouslySetInnerHTML={{
                __html: OtherData?.overview?.description,
              }}
            />
          </h4>
        </div>
      </section>

      <section className='funding-section'>
        <div className='container'>
          <div className='row'>
            <div className='col-lg-6'>
              <h6 className='section-subtitle'>
                {OtherData?.scholarship?.[0]?.subtitle}
              </h6>

              <h2 className='section-title'>
                {OtherData?.scholarship?.[0]?.title}
              </h2>

              <div className='funding-img-div text-end pe-lg-5 pe-0'>
                <img
                  src={OtherData?.scholarship?.[0]?.image1?.url}
                  alt={OtherData?.scholarship?.[0]?.image1?.url}
                  className='text-end'
                />
              </div>
            </div>
            <div className='col-lg-6 d-flex flex-column'>
              <img
                src={OtherData?.scholarship?.[0]?.image2?.url}
                alt={OtherData?.scholarship?.[0]?.image2?.url}
                className='w-100 order-2 order-lg-1'
              />

              <div className='order-lg-2 order-1'>
                <p className='paragraph bridge-para p-0 pt-2 '>
                  <div
                    dangerouslySetInnerHTML={{
                      __html: OtherData?.scholarship?.[0]?.description,
                    }}
                  />
                </p>

                <button className='custom-btn bridge-btn'>
                  <NavLink
                    className='nav-link'
                    to={OtherData?.scholarship?.[0]?.buttonLink}
                    onClick={() => window.scrollTo(0, 0)}
                  >
                    {OtherData?.scholarship?.[0]?.buttonText}
                  </NavLink>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className='enhancing-section'>
        <div className='container'>
          <div className='row'>
            <div className='col-lg-6'>
              {/* <h6 className="section-subtitle">LOREM IPSUM</h6> */}

              <h2 className='section-title'>
                {OtherData?.institutions?.title}
              </h2>

              <p className='paragraph bridge-para p-0 pt-2'>
                <div
                  dangerouslySetInnerHTML={{
                    __html: OtherData?.institutions?.description,
                  }}
                />
              </p>

              <button className='custom-btn bridge-btn'>
                <NavLink
                  className='nav-link'
                  to={OtherData?.institutions?.buttonLink}
                  onClick={() => window.scrollTo(0, 0)}
                >
                  {OtherData?.institutions?.buttonText}
                </NavLink>
              </button>
            </div>

            <div className='col-lg-6 text-lg-end text-start'>
              <div className='enhancing-img'>
                <img
                  src={OtherData?.institutions?.image?.url}
                  alt={OtherData?.institutions?.image?.url}
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <Difference masterquote={OtherData?.masterquote || []} />

      <ReachOut />
    </Layout>
  );
};

export default Scope;
