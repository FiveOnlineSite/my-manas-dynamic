import React from "react";

const Testimonials = ({testimonials}) => {
  return (
    <section className='testimonials'>
      <div className='container-fluid'>
        <div className='col-lg-12'>
          <div className='row align-items-center justify-content-center'>
            <div className='col-lg-10 order-lg-1 order-2'>
              <div className='tab-content'>
                <div
                  className='tab-pane fade active show'
                  id='member1'
                  role='tabpanel'
                  aria-labelledby='member1-tab'
                >
                  <div className='col-lg-12'>
                    <div className='row align-items-center justify-content-center'>
                      <div className='testimonial-img1 col-lg-1'>
                        <img src='/images/testimonials/quote.png' alt='quote' />
                      </div>

                      <div className='testimonial-text col-lg-6 order-lg-1 order-2'>
                        <h2 className='section-title'>
                          Impactful Testimonials
                        </h2>
                        <p className='paragraph bridge-para testimonial-para'>
                          “Promoting mindsets of equality and curiosity so that
                          every student may discover and develop the talent,
                          discipline, and self-esteem of fearless success. This
                          non-profit provides direct and indirect assistance in
                          education is like no other; we will continue to
                          support the initiative for a long time to come.”
                        </p>

                        <div className='testimonial-name '>
                          <h6>{testimonials?.name}</h6>
                          <p className='mb-1'>{testimonials?.designation}</p>

                          <p>{testimonials?.location}</p>
                        </div>
                      </div>
                      <div
                        className='testimonial-img col-lg-5 order-lg-2 order-1 wow'
                        data-aos='zoom-in'
                        data-aos-duration='1500'
                      >
                        <img
                          src={testimonials?.image?.url}
                          alt={testimonials?.image?.altText}
                        />
                      </div>
                    </div>
                  </div>
                </div>

                <div
                  className='tab-pane fade'
                  id='member2'
                  role='tabpanel'
                  aria-labelledby='member2-tab'
                >
                  <div className='col-lg-12'>
                    <div className='row align-items-center justify-content-center'>
                      <div className='testimonial-img1 col-lg-1'>
                        <img src='/images/testimonials/quote.png' alt='quote' />
                      </div>

                      <div className='testimonial-text col-lg-6 order-lg-1 order-2'>
                        <h2 className='section-title'>
                          Impactful Testimonials
                        </h2>
                        <p className='paragraph bridge-para testimonial-para'>
                          “Education is the bedrock of how one grows and learns
                          as a person. The My Manas Foundation exemplifies the
                          goals of bringing innovative and supportive
                          educational opportunities to those that wouldn’t
                          normally have access to these resources.
                        </p>

                        <p className='paragraph bridge-para testimonial-para'>
                          I stand behind their mission to provide comprehensive
                          educational experiences that provide students with a
                          strong foundation as they move into adulthood and make
                          their mark on their communities. My Manas Foundation’s
                          drive to help the “underdog” is a commendable
                          objective to help those that fall into the cracks of
                          traditional academic support structures.”
                        </p>

                        <div className='testimonial-name '>
                          <h6>Dr. Ronald Vardy Ph.D</h6>
                          <p className='mb-1'> Professor</p>

                          <p> University of Houston</p>
                        </div>
                      </div>
                      <div className='testimonial-img col-lg-5 order-lg-2 order-1'>
                        <img
                          src='/images/testimonials/Mask group (12).png'
                          alt='member'
                        />
                      </div>
                    </div>
                  </div>
                </div>

                <div
                  className='tab-pane fade'
                  id='member3'
                  role='tabpanel'
                  aria-labelledby='member3-tab'
                >
                  <div className='col-lg-12'>
                    <div className='row align-items-center justify-content-center'>
                      <div className='testimonial-img1 col-lg-1'>
                        <img src='/images/testimonials/quote.png' alt='quote' />
                      </div>

                      <div className='testimonial-text col-lg-6 order-lg-1 order-2'>
                        <h2 className='section-title'>
                          Impactful Testimonials
                        </h2>
                        <p className='paragraph bridge-para testimonial-para'>
                          I have found that the abundance of my life literally
                          shouts to my heart, “Be radically generous!” But
                          generosity needs to be wisely given, strategic in its
                          impact, and touching those who will benefit the most.
                          My Manas Foundation gives you and me a creative and
                          effective means to bless those whom others may not
                          even notice. I commend and recommend My Manas
                          Foundation to you as a trustworthy, very effective way
                          to answer our hearts’ challenge to be radically
                          generous.
                        </p>

                        <div className='testimonial-name '>
                          <h6>Dr. Tom Wymore</h6>
                          <p className='mb-1'>Leadership Coach and Mentor</p>
                          <p> Eagles’ Wings Leadership Coaching</p>
                        </div>
                      </div>
                      <div className='testimonial-img col-lg-5 order-lg-2 order-1'>
                        <img
                          src='/images/testimonials/Mask group (10).png'
                          alt='member'
                        />
                      </div>
                    </div>
                  </div>
                </div>

                <div
                  className='tab-pane fade'
                  id='member4'
                  role='tabpanel'
                  aria-labelledby='member4-tab'
                >
                  <div className='col-lg-12'>
                    <div className='row align-items-center justify-content-center'>
                      <div className='testimonial-img1 col-lg-1'>
                        <img src='/images/testimonials/quote.png' alt='quote' />
                      </div>

                      <div className='testimonial-text col-lg-6 order-lg-1 order-2'>
                        <h2 className='section-title'>
                          Impactful Testimonials
                        </h2>
                        <p className='paragraph bridge-para testimonial-para'>
                          Education is transformative, literally capable of
                          changing a child’s life. Nabors Industries understands
                          there are challenges for children everywhere to access
                          even basic education. We are honored to join My Manas
                          on their mission to furnish the resources necessary
                          for children to better their lives.
                        </p>

                        <p className='paragraph bridge-para testimonial-para'>
                          When we spark curiosity and spur motivation, it opens
                          the doors of possibilities. Investment in children’s
                          education is a great investment in the next
                          generation’s future.
                        </p>

                        <div className='testimonial-name '>
                          <h6>Anthony G. Petrello</h6>
                          <p className='mb-1'> Chief Executive Officer</p>
                          <p> Nabors Industries Ltd</p>
                        </div>
                      </div>
                      <div className='testimonial-img col-lg-5 order-lg-2 order-1'>
                        <img
                          src='/images/testimonials/Mask group (13).png'
                          alt='member'
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className='col-lg-2 testimonial-links order-lg-2 order-1'>
              <ul className='nav nav-tabs'>
                <li className='nav-item'>
                  <a
                    className='nav-link active'
                    aria-current='page'
                    href='#member1'
                    id='member1-tab'
                    data-bs-toggle='tab'
                    aria-controls='member1'
                  >
                    <img src='/images/testimonials/jason.png' alt='member' />
                  </a>
                </li>
                <li className='nav-item'>
                  <a
                    className='nav-link'
                    href='#member2'
                    id='member2-tab'
                    data-bs-toggle='tab'
                    aria-controls='member2'
                  >
                    <img
                      src='/images/testimonials/Group-18887.png'
                      alt='member'
                    />
                  </a>
                </li>
                <li className='nav-item'>
                  <a
                    className='nav-link'
                    href='#member3'
                    id='member3-tab'
                    data-bs-toggle='tab'
                    aria-controls='member3'
                  >
                    <img
                      src='/images/testimonials/Mask-Group-27.png'
                      alt='member'
                    />
                  </a>
                </li>
                <li className='nav-item'>
                  <a
                    className='nav-link'
                    href='#member4'
                    id='member4-tab'
                    data-bs-toggle='tab'
                    aria-controls='member4'
                  >
                    <img
                      src='/images/testimonials/Group-18886.png'
                      alt='member'
                    />
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
