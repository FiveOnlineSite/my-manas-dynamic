import React from "react";
import { Link } from "react-router-dom";

const Achivements = () => {
  return (
    <section className='achivements-section'>
      <div className='container'>
        <div className='row'>
          <div className='col-lg-3'>
            {/* <h6 className="section-subtitle">ACHIEVEMENTS</h6> */}

            <h2 className='section-title'>Achievements</h2>
          </div>
          <div className='col-lg-9'>
            <div className='row'>
              <div className='col-lg-6 mt-lg-0 mt-5'>
                <div className='achivements-div'>
                  <img
                    src='/images/banner/DSC04685.jpg'
                    alt='achivement-img'
                    className='img-rep'
                  />
                  <h4 className='banner-subtitle small-line-height text-start mt-4'>
                    Well-rounded
                  </h4>
                  <p className='paragraph bridge-para'>
                    Our emphasis is on well-rounded education that involves
                    physical, mental, moral, and spiritual aspects of learning,
                    which improves our students’ critical thinking, athletic
                    ability, and self-discipline.
                  </p>
                </div>
              </div>
              <div className='col-lg-6 mt-lg-0 mt-5'>
                <div className='achivements-div'>
                  <img src='/images/banner/DSC04762.jpg' alt='achivement-img' />
                  <h4 className='banner-subtitle small-line-height text-start mt-4'>
                    Platform for future
                  </h4>
                  <p className='paragraph bridge-para'>
                    Each child at Manas Academy is empowered to form opinions
                    and articulate them, creating a generation that is not
                    afraid to chase their dreams.
                  </p>
                </div>
              </div>
              <div className='col-lg-6 mt-5'>
                <div className='achivements-div'>
                  <img
                    src='/images/banner/Adobe Express - file.jpg'
                    alt='achivement-img'
                  />
                  <h4 className='banner-subtitle small-line-height text-start mt-4'>
                    Infrastructure
                  </h4>
                  <p className='paragraph bridge-para'>
                    The school is housed in a serene and eco-friendly campus
                    with solar-power, with all the facilities required for a
                    conducive learning environment: spacious classrooms, six
                    outdoor playgrounds, two indoor playgrounds, well equipped
                    labs and fine-arts studios.
                  </p>
                </div>
              </div>
              <div className='col-lg-6 mt-5'>
                <div className='achivements-div'>
                  <img
                    src='/images/banner/Students Working in ChemLab.jpeg'
                    alt='achivement-img'
                  />
                  <h4 className='banner-subtitle small-line-height text-start mt-4'>
                    STEM Program
                  </h4>
                  <p className='paragraph bridge-para'>
                    Apply math and science to solve an engineering problem using
                    technology. Every child is given an opportunity to think,
                    learn, build and act like an engineer.
                    <br />
                    <strong>
                      The STEM program at Manas Academy is run by experienced
                      engineers.
                    </strong>
                  </p>
                </div>
              </div>
              <div className='col-lg-6 mt-5'>
                <div className='achivements-div'>
                  <img
                    src='/images/banner/Group-8263.png'
                    alt='achivement-img'
                  />
                  <h4 className='banner-subtitle small-line-height text-start mt-4'>
                    Google G Suite for Education
                  </h4>
                  <p className='paragraph bridge-para'>
                    Google recognized and supported institution for students and
                    staff to use G Suite for Education for free.
                  </p>
                </div>
              </div>
              <div className='col-lg-6 mt-5'>
                <div className='achivements-div'>
                  <img
                    src='/images/banner/Dance Team02.jpeg'
                    alt='achivement-img'
                  />
                  <h4 className='banner-subtitle small-line-height text-start mt-4'>
                    Competitions
                  </h4>
                  <p className='paragraph bridge-para'>
                    Our students participate in national and international
                    academic competitions and have won several medals.
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
