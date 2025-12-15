import React from 'react';
import type { ProfilePageProps } from '../types';

const ProfilePage: React.FC<ProfilePageProps> = ({
  personalInfo,
  socialMedia,
  onContactMe
}) => {
  return (
    <div className="profile-page">
      <img
        src={personalInfo.profileImage}
        alt={personalInfo.name}
      />

      <h1>{personalInfo.name}</h1>
      <h3>{personalInfo.title}</h3>

      <div
        className="social-media"
        role="list"
        aria-label="Social media links"
      >
        {socialMedia.facebook && (
          <a
            href={socialMedia.facebook}
            aria-label="Visit Facebook profile"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="bx bxl-facebook" aria-hidden="true"></i>
          </a>
        )}

        {socialMedia.twitter && (
          <a
            href={socialMedia.twitter}
            aria-label="Visit Twitter profile"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="bx bxl-twitter" aria-hidden="true"></i>
          </a>
        )}

        {socialMedia.instagram && (
          <a
            href={socialMedia.instagram}
            aria-label="Visit Instagram profile"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="bx bxl-instagram" aria-hidden="true"></i>
          </a>
        )}

        {socialMedia.linkedin && (
          <a
            href={socialMedia.linkedin}
            aria-label="Visit LinkedIn profile"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="bx bxl-linkedin-square" aria-hidden="true"></i>
          </a>
        )}
      </div>

      <p>{personalInfo.description}</p>

      <div className="btn-box">
        {/* ✅ WORKING DOWNLOAD BUTTON */}
        <a
          href="/cv.pdf"
          download
          className="btn"
          aria-label="Download CV (PDF)"
          type="application/pdf"
        >
          Download CV
        </a>

        <button
          className="btn contact-me"
          onClick={onContactMe}
          aria-label="Navigate to contact form"
          type="button"
        >
          Contact Me!
        </button>
      </div>
    </div>
  );
};

export default ProfilePage;
