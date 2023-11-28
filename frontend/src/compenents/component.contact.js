import { useEffect, useState } from "react";
import {Link} from "react-router-dom";



export function Contact() {
  return (
    <div className="container mt-5">
      <h1 className="text-center mb-4">Contact Form</h1>
      <form id="contact_form" name="contact_form" method="post">
        <div className="mb-3 row">
          <div className="col">
            <label className="form-label">First Name</label>
            <input type="text" required maxLength="50" className="form-control form-control-sm" id="first_name" name="first_name" />
          </div>
          <div className="col">
            <label className="form-label">Last Name</label>
            <input type="text" required maxLength="50" className="form-control form-control-sm" id="last_name" name="last_name" />
          </div>
        </div>
        <div className="mb-3 row">
          <div className="col">
            <label htmlFor="email_addr" className="form-label">Email address</label>
            <input
              type="email"
              required
              maxLength="50"
              className="form-control form-control-sm"
              id="email_addr"
              name="email"
              placeholder="name@example.com"
            />
          </div>
          <div className="col">
            <label htmlFor="phone_input" className="form-label">Phone</label>
            <input
              type="tel"
              required
              maxLength="50"
              className="form-control form-control-sm"
              id="phone_input"
              name="Phone"
              placeholder="Phone"
            />
          </div>
        </div>
        <div className="mb-3">
          <label htmlFor="message" className="form-label">Message</label>
          <textarea className="form-control form-control-sm" id="message" name="message" rows="5"></textarea>
        </div>
        <div className="text-center">
          <button type="submit" className="btn btn-primary px-4">Post</button>
        </div>
      </form>
    </div>
  );
}