"use client"
import React from 'react';

const AdmissionForm = () => {
  return (
    <>
      <div className="it-contact__form-box pb-120">
        <div className="container">
          <div className="row">
            <div className="col-xl-12">
              <div className="it-contact-2__color-2">
                <div className="it-contact-2__text pb-30">
                  <h5 className="it-contact-2__title-sm text-black">Admission Form</h5>
                  <p>Required fields are marked *</p>
                </div>

                <div className="it-contact-2__form-box">
                  <form onSubmit={(e) => e.preventDefault()}>
                    <div className="row">

                      <div className="col-xl-6 col-lg-6 col-md-6 col-12">
                        <div className="it-contact-2__input">
                          <input
                            type="text"
                            name="studentName"
                            placeholder="Student Name*"
                            required
                            style={{ color: "black" }}
                          />
                        </div>
                      </div>

                      <div className="col-xl-6 col-lg-6 col-md-6 col-12">
                        <div className="it-contact-2__input">
                          <input
                            type="text"
                            name="guardianName"
                            placeholder="Guardian Name*"
                            required
                            style={{ color: "black" }}
                          />
                        </div>
                      </div>

                      <div className="col-xl-6 col-lg-6 col-md-6 col-12">
                        <div className="it-contact-2__input">
                          <input
                            type="date"
                            name="dob"
                            placeholder="Date of Birth*"
                            required
                            style={{ color: "black" }}
                          />
                        </div>
                      </div>

                      <div className="col-xl-6 col-lg-6 col-md-6 col-12">
                        <div className="it-contact-2__input">
                          <input
                            type="text"
                            name="aadhar"
                            placeholder="Aadhar Card Number*"
                            required
                            style={{ color: "black" }}
                          />
                        </div>
                      </div>

                      <div className="col-xl-6 col-lg-6 col-md-6 col-12">
                        <div className="it-contact-2__input">
                          <input
                            type="tel"
                            name="phone"
                            placeholder="Phone Number*"
                            required
                            style={{ color: "black" }}
                          />
                        </div>
                      </div>

                      <div className="col-12">
                        <div className="it-contact-2__input">
                          <textarea
                            name="address"
                            placeholder="Address*"
                            required
                            style={{ color: "black" }}
                          ></textarea>
                        </div>
                      </div>

                    </div>
                    <button type="submit" className="it-btn hover-2">
                      <span>Submit Admission Form</span>
                    </button>
                  </form>
                </div>

              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AdmissionForm;
