import React from "react";
import "../styles/contact.css";

function Contact() {
  return (
    <div className="container contact-form my-4">
      <h1>We would love to hear back from you</h1>
      <form
        action="https://send.pageclip.co/WtsYuUOFwq2KXLgdGZ4kXkl6vUZCsY0k"
        method="post"
      >
        <div className="mb-3 details">
          <label htmlFor="fname">First Name: </label>
          <input type="text" name="fname" id="" />
          <label htmlFor="lname">Last Name: </label>
          <input type="text" name="lname" id="" />
          <label htmlFor="email">Email: </label>
          <input type="email" name="email" id="" />
          <label htmlFor="phone">Contact Number: </label>
          <input type="number" name="phone" id="" />
          <label htmlFor="message">Message</label>
          <textarea name="message" id="" cols="10" rows="5"></textarea>
          <button type="submit" className="btn btn-primary my-3">
            Submit
          </button>
        </div>
      </form>
    </div>
  );
}

export default Contact;
