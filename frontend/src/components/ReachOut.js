import React, { useRef, useState } from "react";
import { NavLink } from "react-router-dom";
import emailjs from "@emailjs/browser";
import { Modal } from "react-bootstrap";
import ReCAPTCHA from "react-google-recaptcha";
import { postFormData } from "../api/api";

const SITE_KEY = process.env.REACT_APP_CAPTCHA_SITE_KEY;

const ReachOut = () => {
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
      // 1. Send email
      await emailjs.send(
        process.env.REACT_APP_CONTACT_SERVICE_ID,
        process.env.REACT_APP_CONTACT_TEMPLATE_ID,
        emailParams,
        process.env.REACT_APP_EMAILJS_PUBLIC_KEY
      );

      // 2. Save to backend
      const payload = new FormData();
      payload.append("subtitle", "Reach Out Form");
      payload.append("title", "User Inquiry");
      payload.append("buttonText", "LEAVE US A MESSAGE");
      payload.append("fullName", formData.name);
      payload.append("number", formData.phone);
      payload.append("email", formData.email);
      payload.append("inquiryType", formData.inquiry);
      payload.append("message", formData.message);
      payload.append("originPage", "home");

      await postFormData("/mastercontact", payload);

      // 3. Success modal
      setSuccessModal(true);
      setTimeout(() => setSuccessModal(false), 5000);

      // 4. Reset
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
    <>
      <section className="get-started">
        <div className="container">
          <div
            className="col-lg-12 wow"
            data-aos="fade-right"
            data-aos-duration="1500"
          >
            <div className="row align-items-center">
              <div className="col-lg-7 order-lg-1 order-2 mt-xl-0 mt-5">
                <h6 className="section-subtitle">GET STARTED</h6>

                <h2 className="section-title w-55">
                  Reach out! We’d love to talk to you.
                </h2>

                <div className="get-started-form">
                  <form ref={formRef} onSubmit={handleSubmit}>
                    <div className="row">
                      <div className="col-lg-6">
                        <div className="mb-4">
                          <label for="full-name" className="form-label">
                            Full Name
                          </label>
                          <input
                            type="text"
                            className="form-control"
                            id="name"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                          />
                        </div>
                      </div>

                      <div className="col-lg-6">
                        <div className="mb-4">
                          <label for="phone-number" className="form-label">
                            Phone Number
                          </label>
                          <input
                            type="text"
                            className="form-control"
                            id="phone"
                            name="phone"
                            value={formData.phone}
                            onChange={handleChange}
                            required
                          />
                          {phoneError && (
                            <p className="text-danger phone-error-msg">
                              {phoneError}
                            </p>
                          )}
                        </div>
                      </div>

                      <div className="col-lg-6">
                        <div className="mb-4">
                          <label for="email-address" className="form-label">
                            Email Address
                          </label>
                          <input
                            type="email"
                            className="form-control"
                            id="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            required
                          />
                        </div>
                      </div>

                      <div className="col-lg-6">
                        <div className="mb-4">
                          <label for="email-address" className="form-label">
                            Inquiry Type
                          </label>
                          <select
                            className="form-select"
                            id="inquiry"
                            name="inquiry"
                            value={formData.inquiry}
                            onChange={handleChange}
                          >
                            <option value="" disabled>
                              Select Inquiry Type
                            </option>
                            <option value="New Admission – Manas Academy">
                              New Admission – Manas Academy
                            </option>
                            <option value="New Admission – Vidhya Vanam">
                              New Admission – Vidhya Vanam
                            </option>
                            <option value="Scholarships / Financial Aid">
                              Scholarships / Financial Aid
                            </option>
                            <option value="Employment Opportunities">
                              Employment Opportunities
                            </option>
                            <option value="Vendor / Supplier Opportunities">
                              Vendor / Supplier Opportunities
                            </option>
                            <option value="Volunteer Opportunities">
                              Volunteer Opportunities
                            </option>
                            <option value="Want to Donate">
                              Want to Donate
                            </option>
                            <option value="General Information Request">
                              General Information Request
                            </option>
                          </select>
                        </div>
                      </div>

                      <div className="col-lg-12">
                        <div className="mb-4">
                          <label for="message" className="form-label">
                            Message
                          </label>
                          <textarea
                            rows="2"
                            className="form-control"
                            id="message"
                            name="message"
                            value={formData.message}
                            onChange={handleChange}
                          ></textarea>
                        </div>
                      </div>

                      <ReCAPTCHA
                        ref={captchaRef}
                        sitekey={SITE_KEY}
                        onChange={handleCaptchaChange}
                      />
                      {captchaError && (
                        <p className="text-danger phone-error-msg">
                          {captchaError}
                        </p>
                      )}

                      <div className="col-lg-12">
                        <div className="mb-4">
                          <button
                            className="custom-btn bridge-btn"
                            type="submit"
                          >
                            LEAVE US A MESSAGE
                          </button>
                        </div>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
              <div className="col-lg-5 order-lg-2 order-1">
                <div className="bridging-img">
                  <img
                    src="/images/banner/Vector 6.png"
                    alt="vector-6"
                    className="bridging-img1"
                  />
                  <div className="bridging-img2">
                    <img
                      src="/images/banner/two-students-studying-together-online-with-laptop-park.png"
                      alt="briding-img"
                    />
                  </div>

                  <img
                    src="/images/banner/Vector 7.png"
                    alt="vector-7"
                    className="bridging-img3"
                  />
                </div>
              </div>
            </div>
          </div>
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
              <p className="section-subtitle pop-msg-one thankyou-msg">
                Thank you for reaching out! We have received your message and
                will get back to you soon.
              </p>
              {/* <button onClick={() => setSuccessModal(false)}>Close</button> */}
            </div>
          </Modal.Body>
        </Modal>
      ) : null}
    </>
  );
};

export default ReachOut;
