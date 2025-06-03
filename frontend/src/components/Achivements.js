import React from "react";
import { Link } from "react-router-dom";

const Achivements = ({achievements}) => {
  return (
    <section className='achivements-section'>
      <div className='container'>
        <div className='row'>
          <div className='col-lg-3'>
            {/* <h6 className="section-subtitle">ACHIEVEMENTS</h6> */}

            <h2 className='section-title'>{achievements?.title}</h2>
          </div>
          <div className='col-lg-9'>
            <div className='row'>
              <div className='col-lg-6 mt-lg-0 mt-5'>
                <div className='achivements-div'>
                  <img
                     src={
                          achievements?.items?.[0]?.image?.url
                        }
                    alt='achivement-img'
                    className='img-rep'
                  />
                  <h4 className='banner-subtitle small-line-height text-start mt-4'>
                   {achievements?.items?.[0]?.title}
                  </h4>
                  <p className='paragraph bridge-para'>
                  <div
                     dangerouslySetInnerHTML={{
                       __html:
                          achievements?.items?.[0]
                          ?.description,
                          }}
                        />
                  </p>
                </div>
              </div>
              <div className='col-lg-6 mt-lg-0 mt-5'>
                <div className='achivements-div'>
                  <img  
                      src={
                          achievements?.items?.[1]?.image?.url
                        } 
                        alt='achivement-img' />
                  <h4 className='banner-subtitle small-line-height text-start mt-4'>
                   {achievements?.items?.[1]?.title}
                  </h4>
                  <p className='paragraph bridge-para'>
                   <div
                     dangerouslySetInnerHTML={{
                       __html:
                          achievements?.items?.[1]
                          ?.description,
                          }}
                        />
                  </p>
                </div>
              </div>
              <div className='col-lg-6 mt-5'>
                <div className='achivements-div'>
                  <img
                   src={
                          achievements?.items?.[2]?.image?.url
                        } 
                    alt='achivement-img'
                  />
                  <h4 className='banner-subtitle small-line-height text-start mt-4'>
                   {achievements?.items?.[2]?.title}
                  </h4>
                  <p className='paragraph bridge-para'>
                   <div
                     dangerouslySetInnerHTML={{
                       __html:
                          achievements?.items?.[2]
                          ?.description,
                          }}
                        />
                  </p>
                </div>
              </div>
              <div className='col-lg-6 mt-5'>
                <div className='achivements-div'>
                  <img
                   src={
                          achievements?.items?.[3]?.image?.url
                        } 
                    alt='achivement-img'
                  />
                  <h4 className='banner-subtitle small-line-height text-start mt-4'>
                   {achievements?.items?.[3]?.title}
                  </h4>
                  <p className='paragraph bridge-para'>
                   <div
                     dangerouslySetInnerHTML={{
                       __html:
                          achievements?.items?.[3]
                          ?.description,
                          }}
                        />
                  </p>
                </div>
              </div>
              <div className='col-lg-6 mt-5'>
                <div className='achivements-div'>
                  <img
                   src={
                          achievements?.items?.[4]?.image?.url
                        } 
                    alt='achivement-img'
                  />
                  <h4 className='banner-subtitle small-line-height text-start mt-4'>
                   {achievements?.items?.[4]?.title}
                  </h4>
                  <p className='paragraph bridge-para'>
                  <div
                     dangerouslySetInnerHTML={{
                       __html:
                          achievements?.items?.[4]
                          ?.description,
                          }}
                        />
                  </p>
                </div>
              </div>
              <div className='col-lg-6 mt-5'>
                <div className='achivements-div'>
                  <img
                   src={
                          achievements?.items?.[5]?.image?.url
                        } 
                    alt='achivement-img'
                  />
                  <h4 className='banner-subtitle small-line-height text-start mt-4'>
                   {achievements?.items?.[5]?.title}
                  </h4>
                  <p className='paragraph bridge-para'>
                    <div
                     dangerouslySetInnerHTML={{
                       __html:
                          achievements?.items?.[5]
                          ?.description,
                          }}
                        />
                  </p>
                </div>
              </div>
            </div>
            <div className='row mt-2'>
              <h6 className='affialte-text'>
                Affiliated to{" "}
                <Link to='https://www.cbse.gov.in/cbsenew/cbse.html'>CBSE</Link>
                . Affiliation No: 1030824.{" "}
                <Link to='https://drive.google.com/file/d/1ULxf8cAFtTGn202Y_SWUMQgBdxP8ZmF2/view'>
                  School Info
                </Link>
                .
              </h6>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Achivements;
