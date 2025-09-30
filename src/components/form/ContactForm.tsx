"use client"
import React, { useRef } from "react";
import emailjs from "@emailjs/browser";

const ContactForm = () => {
  const formRef = useRef<HTMLFormElement>(null);

  const sendEmail = (e: React.FormEvent) => {
    e.preventDefault();

    if (formRef.current) {
      emailjs.sendForm(
        "service_hryxme8",   // replace with your EmailJS service ID
        "template_ecoik1d",  // replace with your EmailJS template ID
        formRef.current,
        "rdpFsDpIb5RAcDe5S"    // replace with your EmailJS public key
      ).then(
        (result) => {
          alert("Message sent successfully!");
        },
        (error) => {
          alert("Failed to send message. Please try again.");
          console.error(error);
        }
      );
    }
  };

  return (
    <div className="it-contact__form-box pb-120">
      <div className="container">
        <div className="row">
          <div className="col-xl-12">
            <div className="it-contact-2__color-2">
              <div className="it-contact-2__text pb-30">
                <h5 className="it-contact-2__title-sm text-black">Have Any Question?</h5>
                <p>Your email address will not be published. Required fields are marked *</p>
              </div>
             <div className="it-contact-2__form-box">
              <form ref={formRef} onSubmit={sendEmail}>
                <div className="row">
                  <div className="col-xl-6 col-lg-6 col-12">
                    <div className="it-contact-2__input">
                      <input
                        type="text"
                        name="name"
                        placeholder="Your Name*"
                        required
                        style={{ color: "black" }}
                      />
                    </div>
                  </div>
                  <div className="col-xl-6 col-lg-6 col-12">
                    <div className="it-contact-2__input">
                      <input
                        type="email"
                        name="email"
                        placeholder="Email Address*"
                        required
                        style={{ color: "black" }}
                      />
                    </div>
                  </div>
                  <div className="col-12">
                    <div className="it-contact-2__input">
                      <input
                        type="text"
                        name="website"
                        placeholder="Website*"
                        style={{ color: "black" }}
                      />
                    </div>
                  </div>
                  <div className="col-12">
                    <div className="it-contact-2__input">
                      <textarea
                        name="message"
                        placeholder="Write Your Message*"
                        required
                        style={{ color: "black" }}
                      ></textarea>
                    </div>
                  </div>
                </div>
                <button type="submit" className="it-btn hover-2">
                  <span>Send Your Message</span>
                </button>
              </form>
            </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
