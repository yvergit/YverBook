import React from 'react';
import type { ContactPageProps } from '../types';

const ContactPage: React.FC<ContactPageProps> = ({
  onBackToProfile,
  pageNumber,
}) => {
  return (
    <>
      <h1 className="title">Contact Me!</h1>

      <div className="contact-box">
        <div className="contact-info">
          <p className="contact-name">
            <strong>Yverdon Pierre Boei</strong>
          </p>

          <p className="contact-email">
            <a href="mailto:yverdonpierre@gmail.com">
              yverdonpierre@gmail.com
            </a>
          </p>
        </div>
      </div>

      <span className="number-page">{pageNumber}</span>

      <button className="back-profile" onClick={onBackToProfile}>
        <p>Profile</p>
        <i className="bx bxs-user"></i>
      </button>
    </>
  );
};

export default ContactPage;
