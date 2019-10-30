import React from "react";
import "./Contact.css";

export default function Contact() {
  return (
    <section id="contact">
      <h1 className="section-header-contact ">PLEASE CONTACT ME!!!</h1>
      <div className="contact-wrapper ">
        <div className="direct-contact-container">
          <ul className="contact-list">
            <li className="list-item">
              <i className="fas fa-map-marker-alt fa-2x">
                <span className="contact-text place">Yo-kylä 5A03</span>
              </i>
            </li>

            <li className="list-item">
              <i className="fas fa-mobile-alt fa-2x">
                <span className="contact-text phone">(+358) 469547704 (WhatsApp)</span>
              </i>
            </li>

            <li className="list-item">
              <i className="fa fa-envelope fa-2x">
                <span className="contact-text gmail">
                  <a href="mailto:vinhphu101195@gmail.com">
                    vinhphu101195@gmail.com
                  </a>
                </span>
              </i>
            </li>
          </ul>

          <hr />
          <div className="social-media-list ">
            <div>
              <a
                href="https://github.com/vinhphu101195"
                target="_blank"
                className="contact-icon "
                rel="noopener noreferrer"
              >
                <i className="fab fa-github rotate-center" aria-hidden="true" />
              </a>
            </div>
            <div>
              <a
                href="https://www.linkedin.com/in/phu-chau-155369171/"
                target="_blank"
                className="contact-icon"
                rel="noopener noreferrer"
              >
                <i
                  className="fab fa-linkedin-in rotate-center"
                  aria-hidden="true"
                />
              </a>
            </div>
            <div>
              <a
                href="https://www.facebook.com/vinhphu.chau.79"
                target="_blank"
                className="contact-icon"
                rel="noopener noreferrer"
              >
                <i
                  className="fab fa-facebook rotate-center"
                  aria-hidden="true"
                />
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="scroll" />
    </section>
  );
}
