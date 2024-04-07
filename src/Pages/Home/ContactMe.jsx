import emailjs from '@emailjs/browser';
import React, { useRef } from "react";

export default function ContactMe() {

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_j561rnp', 'template_f8lhyf7', form.current, 'c6ncqTB3LGyCZxSlY')
      .then((result) => {
          alert("Email sent successfully");
      }, (error) => {
          alert(error.message);
      });
      e.target.reset();
  };
  return (
    <section id="Contact" className="contact--section">
      <div>
        <h2>Get In Touch</h2>
      </div>
      <form className="contact--form--container" ref={form} onSubmit={sendEmail}>
        <div className="container">
          <label htmlFor="first-name" className="contact--label">
            <span className="text-md">Name</span>
            <input
              type="text"
              className="contact--input text-md"
              name="name"
              id="name"
              placeholder="Your name"
              required
            />
             </label>
          <label htmlFor="email" className="contact--label">
            <span className="text-md">Email</span>
            <input
              type="email"
              className="contact--input text-md"
              name="email"
              id="email"
              placeholder="Your email"
              required
            />
          </label>
          <label htmlFor="phone-number" className="contact--label">
            <span className="text-md">Phone Number</span>
            <input
              type="number"
              className="contact--input text-md"
              name="phone"
              id="phone"
              placeholder="Your phone number"
              required
            />
          </label>
        </div>
        <label htmlFor="message" className="contact--label">
          <span className="text-md">Message</span>
          <textarea
            className="contact--input text-md"
            name="message"
            id="message"
            rows="8"
            placeholder="Type your message..."
          />
        </label>
        <div>
          <button className="btn btn-primary contact--form--btn">Submit</button>
        </div>
      </form>
    </section>
  );
}
