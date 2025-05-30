import React, { useEffect, useRef, useState } from "react";
import Layout from "../components/Layout";
import { NavLink } from "react-router-dom";
import ReCAPTCHA from "react-google-recaptcha";
import emailjs from "@emailjs/browser";
import { Modal } from "react-bootstrap";
import { getRequest, postFormData } from "../api/api";

const SITE_KEY = process.env.REACT_APP_CAPTCHA_SITE_KEY;

const ContactUs = () => {
  const [data, setData] = useState([]);
  const [OtherData, setOtherData] = useState([]);

  const fetchData = async () => {
    const res = await getRequest("/contact/page");
    if (res.success) {
      setData(res.data[0]);
    } else {
    }
  };
  console.log("Contact Us Data:", data);

  const fetchOtherData = async () => {
    try {
      const responses = await Promise.allSettled([
        getRequest("/social"),
        getRequest("/masterbanner"),
      ]);
      console.log(responses, "responsesfefe");

      const resultObj = {
        social:
          responses[0].status === "fulfilled" ? responses[0].value.data : null,
        masterbanner:
          responses[1].status === "fulfilled"
            ? responses[1].value.data[4]
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

  const formRef = useRef();
  const captchaRef = useRef(null);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    inquiry: "",
    message: "",
  });

  const [phoneError, setPhoneError] = useState("");
  const [captchaError, setCaptchaError] = useState("");
  const [successModal, setSuccessModal] = useState(false);
  const [captchaVerified, setCaptchaVerified] = useState(false);

  const handleCaptchaChange = (token) => {
    console.log("CAPTCHA token:", token);
    if (token) {
      setCaptchaVerified(true);
      setCaptchaError("");
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;

    if (name === "phone") {
      if (value === "") {
        setPhoneError(""); // Clear error when input is empty
      } else {
        const phoneRegex = /^\d{7,12}$/;
        if (!phoneRegex.test(value)) {
          setPhoneError("Phone number must be between 7 and 12 digits.");
        } else {
          setPhoneError("");
        }
      }
    }

    setFormData({ ...formData, [name]: value });
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (phoneError) return;
    if (!captchaVerified) {
      setCaptchaError("Verify Captcha");
      return;
    }

    const emailParams = {
      name: formData.name,
      email: formData.email,
      phone: formData.phone,
      message: formData.message,
      inquiry: formData.inquiry,
    };

    try {
      // 1. Send the email
      await emailjs.send(
        process.env.REACT_APP_CONTACT_SERVICE_ID,
        process.env.REACT_APP_CONTACT_TEMPLATE_ID,
        emailParams,
        process.env.REACT_APP_EMAILJS_PUBLIC_KEY
      );

      // 2. Submit to backend
      const payload = new FormData();
      payload.append("subtitle", "Contact Us Form");
      payload.append("title", "Contact Inquiry");
      payload.append("buttonText", "Leave Us A Message");
      payload.append("fullName", formData.name);
      payload.append("number", formData.phone);
      payload.append("email", formData.email);
      payload.append("inquiryType", formData.inquiry);
      payload.append("message", formData.message);
      payload.append("originPage", "contact");

      await postFormData("/mastercontact", payload);

      // 3. Show success modal
      setSuccessModal(true);
      setTimeout(() => setSuccessModal(false), 5000);

      // 4. Reset form
      setFormData({
        name: "",
        email: "",
        phone: "",
        inquiry: "",
        message: "",
      });
      formRef.current.reset();
      captchaRef.current?.reset();
      setCaptchaVerified(false);
      setCaptchaError("");
    } catch (error) {
      console.error("Form submission failed:", error);
    }
  };
  

  return (
    <Layout>
      <section className='about-banner'>
        <div className='container-fluid'>
          <img
            src={OtherData?.masterbanner?.image?.url}
            alt={OtherData?.masterbanner?.image?.altText}
          />
          <div className='banner-text about-banner-text contact-banner-text'>
            <h1
              className='banner-title black-text wow black-text'
              data-aos='fade-up' // Fade in as you scroll
              data-aos-duration='1500'
            >
              {OtherData?.masterbanner?.title}
            </h1>

            <p
              className='paragraph wow black-text'
              data-aos='fade-up' // Fade in as you scroll
              data-aos-duration='1500'
            >
              <div
                dangerouslySetInnerHTML={{
                  __html: OtherData?.masterbanner?.description,
                }}
              />
            </p>
            <NavLink to={OtherData?.masterbanner?.buttonLink}>
              <button className='custom-btn white-btn border-btn wow'>
                <li className='nav-link '>
                  {OtherData?.masterbanner?.buttonText}
                </li>
              </button>
            </NavLink>
          </div>
        </div>
      </section>

      <section className='contact-form'>
        <div className='container'>
          <div className='col-lg-12'>
            <div className='row'>
              <div className='col-lg-9'>
                <h6 className='section-subtitle'>Get Started</h6>

                <h2 className='section-title'>
                  Get in touch with us. <br /> We're here to assist you.
                </h2>
              </div>
              <div className='col-lg-3 d-flex justify-content-lg-end justify-content-start mb-lg-0 mb-5'>
                <ul className='contact-links'>
                  <li>
                    <NavLink
                      to={OtherData?.social?.[0]?.link}
                      target='_blank'
                      rel='noreferrer'
                    >
                      <img src={OtherData?.social?.[0]?.icon?.url} />
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      to={OtherData?.social?.[1]?.link}
                      target='_blank'
                      rel='noreferrer'
                    >
                      <img src={OtherData?.social?.[1]?.icon?.url} />
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      to={OtherData?.social?.[2]?.link}
                      target='_blank'
                      rel='noreferrer'
                      className='youtube-icon'
                    >
                      <img
                        src={OtherData?.social?.[2]?.icon?.url}
                        height='15px'
                        width='20px'
                        alt='youtube'
                      />
                    </NavLink>
                  </li>
                </ul>
              </div>
            </div>

            <div className='row'>
              <div className='get-started-form'>
                <form ref={formRef} onSubmit={handleSubmit}>
                  <div className='row'>
                    <div className='col-lg-6'>
                      <div className='mb-4'>
                        <label for='full-name' className='form-label'>
                          Full Name
                        </label>
                        <input
                          type='text'
                          className='form-control'
                          id='name'
                          name='name'
                          value={formData.name}
                          onChange={handleChange}
                        />
                      </div>
                    </div>
                    <div className='col-lg-6'>
                      <div className='mb-4'>
                        <label for='phone-number' className='form-label'>
                          Phone Number
                        </label>
                        <input
                          type='text'
                          className='form-control'
                          id='phone'
                          name='phone'
                          value={formData.phone}
                          onChange={handleChange}
                          required
                        />
                        {phoneError && (
                          <p className='text-danger phone-error-msg'>
                            {phoneError}
                          </p>
                        )}
                      </div>
                    </div>
                    <div className='col-lg-6'>
                      <div className='mb-4'>
                        <label for='email-address' className='form-label'>
                          Email Address
                        </label>
                        <input
                          type='email'
                          className='form-control'
                          id='email'
                          name='email'
                          value={formData.email}
                          onChange={handleChange}
                          required
                        />
                      </div>
                    </div>
                    <div className='col-lg-6'>
                      <div className='mb-4'>
                        <label for='email-address' className='form-label'>
                          Inquiry Type
                        </label>
                        <select
                          className='form-select'
                          id='inquiry'
                          name='inquiry'
                          value={formData.inquiry}
                          onChange={handleChange}
                        >
                          <option value='' disabled>
                            Select Inquiry Type
                          </option>
                          <option value='New Admission – Manas Academy'>
                            New Admission – Manas Academy
                          </option>
                          <option value='New Admission – Vidhya Vanam'>
                            New Admission – Vidhya Vanam
                          </option>
                          <option value='Scholarships / Financial Aid'>
                            Scholarships / Financial Aid
                          </option>
                          <option value='Employment Opportunities'>
                            Employment Opportunities
                          </option>
                          <option value='Vendor / Supplier Opportunities'>
                            Vendor / Supplier Opportunities
                          </option>
                          <option value='Volunteer Opportunities'>
                            Volunteer Opportunities
                          </option>
                          <option value='Want to Donate'>Want to Donate</option>
                          <option value='General Information Request'>
                            General Information Request
                          </option>
                        </select>
                      </div>
                    </div>
                    <div className='col-lg-12'>
                      <div className='mb-4'>
                        <label for='message' className='form-label'>
                          Message
                        </label>
                        <textarea
                          rows='2'
                          className='form-control'
                          id='message'
                          name='message'
                          value={formData.message}
                          onChange={handleChange}
                        ></textarea>
                      </div>
                    </div>
                    <ReCAPTCHA
                      sitekey={SITE_KEY}
                      onChange={handleCaptchaChange}
                    />{" "}
                    {captchaError && (
                      <p className='text-danger phone-error-msg'>
                        {captchaError}
                      </p>
                    )}
                    <div className='col-lg-12'>
                      <div className='mb-4'>
                        <button className='custom-btn bridge-btn' type='submit'>
                          LEAVE US A MESSAGE
                        </button>
                      </div>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className='contact-info'>
        <div className='container'>
          <div className='row'>
            <div className='col-lg-5'>
              <h6 className='section-subtitle'>Contact Info</h6>

              <h2 className='section-title'>{data.title}</h2>
            </div>
            <div className='col-lg-7'>
              <div className='row'>
                <div className='col-lg-6 mt-lg-0 mt-5'>
                  <div className='contact-div'>
                    <h6>
                      India{" "}
                      <img
                        src='https://flagcdn.com/w40/in.png'
                        width='40'
                        alt='India Flag'
                      />
                    </h6>{" "}
                    <span></span>
                    <h6>
                      <a href='mailto:Info.manasacademy@mymanas.org'>
                        {data?.india?.email}
                      </a>
                    </h6>
                    {/* <h6>(808) 998-34256</h6> */}
                    <p>
                      Address: <br /> {data?.india?.address}
                    </p>
                  </div>
                </div>
                <div className='col-lg-5 offset-lg-1 offset-0 mt-lg-0 mt-5'>
                  <div className='contact-div'>
                    <h6>
                      US{" "}
                      <img
                        src='https://flagcdn.com/w40/us.png'
                        width='40'
                        alt='USA Flag'
                      />
                    </h6>{" "}
                    <span></span>
                    <h6>
                      <a href='mailto:info@mymanas.org'> {data?.usa?.email}</a>
                    </h6>
                    {/* <h6>(808) 998-34256</h6> */}
                    <p>
                      Address: <br />
                      {data?.usa?.address}
                    </p>
                  </div>
                </div>
              </div>
              <div className='row mt-3'>
                <div className='contact-div'>
                  {/* <h6>
                    For Jobs, send resume to{" "}
                    <a href="mailto:hr.manasacademy@mymanas.org">
                      hr.manasacademy@mymanas.org
                    </a>
                  </h6> */}
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

      {/* Success Modal */}

      {successModal ? (
        <Modal
          centered
          show={successModal}
          onHide={() => setSuccessModal(false)}
        >
          <Modal.Header closeButton>
            <Modal.Title>
              <h4>Thank you!</h4>
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <div>
              <p className='section-subtitle pop-msg-one thankyou-msg'>
                Thank you for reaching out! We have received your message and
                will get back to you soon.
              </p>
              {/* <button onClick={() => setSuccessModal(false)}>Close</button> */}
            </div>
          </Modal.Body>
        </Modal>
      ) : null}
    </Layout>
  );
};

export default ContactUs;
