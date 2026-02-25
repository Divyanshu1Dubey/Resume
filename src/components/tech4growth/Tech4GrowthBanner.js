import React from "react";
import "./Tech4GrowthBanner.css";
import { tech4growth } from "../../portfolio";
import { Fade } from "react-reveal";

export default function Tech4GrowthBanner({ theme }) {
  return (
    <div className="t4g-section">
      <Fade bottom duration={1000} distance="20px">
        <div
          className="t4g-hero"
        >
          <div className="t4g-hero-glow"></div>
          <div className="t4g-hero-content">
            <h1 className="t4g-name">{tech4growth.name}</h1>
            <p className="t4g-tagline">{tech4growth.tagline}</p>
            <p
              className="t4g-description"
            >
              {tech4growth.description}
            </p>
            <div className="t4g-stats-row">
              {tech4growth.stats.map((stat, i) => (
                <div className="t4g-stat" key={i}>
                  <span className="t4g-stat-number">{stat.number}</span>
                  <span
                    className="t4g-stat-label"
                  >
                    {stat.label}
                  </span>
                </div>
              ))}
            </div>
            <a
              href={tech4growth.url}
              target="_blank"
              rel="noopener noreferrer"
              className="t4g-cta-button"
            >
              Visit Tech4Growth →
            </a>
          </div>
        </div>
      </Fade>

      <div className="t4g-services-grid">
        {tech4growth.services.map((service, i) => (
          <Fade bottom duration={800} distance="20px" delay={i * 80} key={i}>
            <div
              className="t4g-service-card"
              style={{
                backgroundColor: theme ? theme.highlight : "#fff",
              }}
            >
              <div className="t4g-service-icon">{service.icon}</div>
              <h3
                className="t4g-service-title"
                style={{ color: theme ? theme.text : "#000" }}
              >
                {service.title}
              </h3>
              <p
                className="t4g-service-desc"
                style={{ color: theme ? theme.secondaryText : "#868e96" }}
              >
                {service.desc}
              </p>
            </div>
          </Fade>
        ))}
      </div>
    </div>
  );
}
