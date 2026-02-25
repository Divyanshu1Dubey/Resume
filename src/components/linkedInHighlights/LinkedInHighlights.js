import React from "react";
import "./LinkedInHighlights.css";
import { linkedInHighlights } from "../../portfolio";
import { Fade } from "react-reveal";

export default function LinkedInHighlights({ theme }) {
  return (
    <div className="li-featured-section">
      <Fade bottom duration={1000} distance="20px">
        <div className="li-featured-header">
          <h1
            className="li-featured-title"
            style={{ color: theme ? theme.text : "#000" }}
          >
            {linkedInHighlights.title}
          </h1>
          <p
            className="subTitle li-featured-subtitle"
            style={{ color: theme ? theme.secondaryText : "#868e96" }}
          >
            {linkedInHighlights.subtitle}
          </p>
        </div>
      </Fade>

      <div className="li-cards-scroll">
        {linkedInHighlights.highlights.map((post, i) => (
          <Fade bottom duration={800} distance="20px" delay={i * 100} key={i}>
            <a
              href={post.link}
              target="_blank"
              rel="noopener noreferrer"
              className="li-post-card"
              style={{
                backgroundColor: theme ? theme.highlight : "#fff",
                borderColor: theme ? theme.text + "15" : "#e0e0e0",
              }}
            >
              <div className="li-post-card-top">
                <span
                  className="li-post-type"
                  style={{ color: theme ? theme.secondaryText : "#666" }}
                >
                  {post.type}
                </span>
                <h3
                  className="li-post-title"
                  style={{ color: theme ? theme.text : "#000" }}
                >
                  {post.title}
                </h3>
              </div>

              <div className="li-post-card-bottom">
                <div className="li-post-reactions">
                  <span className="li-reaction-icons">👍❤️</span>
                </div>
              </div>
            </a>
          </Fade>
        ))}
      </div>

      <div className="li-view-profile">
        <a
          href={linkedInHighlights.profileUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="li-profile-btn"
        >
          <svg
            className="li-icon"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="#0A66C2"
            width="20"
            height="20"
          >
            <path d="M20.5 2h-17A1.5 1.5 0 002 3.5v17A1.5 1.5 0 003.5 22h17a1.5 1.5 0 001.5-1.5v-17A1.5 1.5 0 0020.5 2zM8 19H5v-9h3zM6.5 8.25A1.75 1.75 0 118.3 6.5a1.78 1.78 0 01-1.8 1.75zM19 19h-3v-4.74c0-1.42-.6-1.93-1.38-1.93A1.74 1.74 0 0013 14.19a.66.66 0 000 .14V19h-3v-9h2.9v1.3a3.11 3.11 0 012.7-1.4c1.55 0 3.36.86 3.36 3.66z" />
          </svg>
          View All on LinkedIn
        </a>
      </div>
    </div>
  );
}
