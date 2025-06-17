import React from 'react'

const DonateAchivement = ({ achievements }) => {
  return (
    <>
      <section className='achivements-section'>
        <div className='container'>
          <div className='row'>
            <div className='col-lg-3'>
              {/* <h6 className="section-subtitle">ACHIEVEMENTS</h6> */}

              <h2 className='section-title'>{achievements?.[0]?.title}</h2>
            </div>
            {/* <div className='col-lg-9'>
              <div className='row'>
                
                <div className='col-lg-6 mt-5'>
                  <div className='achivements-div'>
                    <img
                      src={achievements?.[0]?.items?.[0]?.image?.url}
                      alt={achievements?.[0]?.items?.[0]?.image?.altText}
                    />
                    <h4 className='banner-subtitle small-line-height text-start mt-4'>
                      {achievements?.[0]?.items?.[0]?.title}
                    </h4>
                    <p className='paragraph bridge-para'>
                      <div
                        dangerouslySetInnerHTML={{
                          __html: achievements?.[0]?.items?.[0]?.description,
                        }}
                      />
                    </p>
                  </div>
                </div>
                <div className='col-lg-6 mt-5'>
                  <div className='achivements-div'>
                    <img
                      src={achievements?.[0]?.items?.[1]?.image?.url}
                      alt={achievements?.[0]?.items?.[1]?.image?.altText}
                    />
                    <h4 className='banner-subtitle small-line-height text-start mt-4'>
                      {achievements?.[0]?.items?.[1]?.title}
                    </h4>
                    <p className='paragraph bridge-para'>
                      <div
                        dangerouslySetInnerHTML={{
                          __html: achievements?.[0]?.items?.[1]?.description,
                        }}
                      />
                    </p>
                  </div>
                </div>
                <div className='col-lg-6 mt-5'>
                  <div className='achivements-div'>
                    <img
                      src={achievements?.[0]?.items?.[2]?.image?.url}
                      alt={achievements?.[0]?.items?.[2]?.image?.altText}
                    />
                    <h4 className='banner-subtitle small-line-height text-start mt-4'>
                      {achievements?.[0]?.items?.[2]?.title}
                    </h4>
                    <p className='paragraph bridge-para'>
                      <div
                        dangerouslySetInnerHTML={{
                          __html: achievements?.[0]?.items?.[2]?.description,
                        }}
                      />
                    </p>
                  </div>
                </div>
                <div className='col-lg-6 mt-5'>
                  <div className='achivements-div'>
                    <img
                      src={achievements?.[0]?.items?.[3]?.image?.url}
                      alt={achievements?.[0]?.items?.[3]?.image?.altText}
                    />
                    <h4 className='banner-subtitle small-line-height text-start mt-4'>
                      {achievements?.[0]?.items?.[3]?.title}
                    </h4>
                    <p className='paragraph bridge-para'>
                      <div
                        dangerouslySetInnerHTML={{
                          __html: achievements?.[0]?.items?.[3]?.description,
                        }}
                      />
                    </p>
                  </div>
                </div>
              </div>
              <div className='row mt-2'> */}


                {/* <h6 className="affialte-text">
                Affiliated to <a href="#">CBSE</a>. Affiliation No: 1030824.{" "}
                <a href="#">School Info</a>.
              </h6> */}

              {/* </div>
            </div> */}

            <div className='col-lg-9'>
  <div className='row'>
    {achievements?.[0]?.items?.map((item, index) => (
      <div className='col-lg-6 mt-5' key={index}>
        <div className='achivements-div'>
          <img src={item?.image?.url} alt={item?.image?.altText || "Achievement"} />
          <h4 className='banner-subtitle small-line-height text-start mt-4'>
            {item?.title}
          </h4>
          <p className='paragraph bridge-para'>
            <div
              dangerouslySetInnerHTML={{
                __html: item?.description,
              }}
            />
          </p>
        </div>
      </div>
    ))}
  </div>

  <div className='row mt-2'>
    {/* Optional: dynamic or static footer below achievements */}
    {/* <h6 className='affialte-text'>
      Affiliated to <a href='#'>CBSE</a>. Affiliation No: 1030824.
      <a href='#'> School Info</a>.
    </h6> */}
  </div>
</div>

          </div>
        </div>
      </section>
    </>
  );
};

export default DonateAchivement