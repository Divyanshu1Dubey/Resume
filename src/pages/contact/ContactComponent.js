import React, { Component } from "react";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import TopButton from "../../components/topButton/TopButton";
import SocialMedia from "../../components/socialMedia/SocialMedia";
import { Fade } from "react-reveal";
import "./ContactComponent.css";
import { greeting, contactPageData } from "../../portfolio.js";

const ContactData = contactPageData.contactSection;
const addressSection = contactPageData.addressSection;
const phoneSection = contactPageData.phoneSection;

class Contact extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      email: "",
      phone: "",
      subject: "",
      message: "",
      sending: false,
      sent: false,
      error: false,
    };
  }

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    this.setState({ sending: true, error: false });

    const { name, email, phone, subject, message } = this.state;

    fetch("https://formsubmit.co/ajax/divyanshudubey2712@gmail.com", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({
        name,
        email,
        phone: phone || "Not provided",
        _subject: subject || "Portfolio Contact",
        message,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.success) {
          this.setState({
            sending: false,
            sent: true,
            name: "",
            email: "",
            phone: "",
            subject: "",
            message: "",
          });
          setTimeout(() => this.setState({ sent: false }), 5000);
        } else {
          this.setState({ sending: false, error: true });
          setTimeout(() => this.setState({ error: false }), 5000);
        }
      })
      .catch(() => {
        this.setState({ sending: false, error: true });
        setTimeout(() => this.setState({ error: false }), 5000);
      });
  };

  render() {
    const theme = this.props.theme;
    return (
      <div className="contact-main">
        <Header theme={theme} />
        <div className="basic-contact">
          {/* Hero */}
          <Fade bottom duration={1000} distance="40px">
            <div className="contact-hero">
              <h1 className="contact-hero-title" style={{ color: theme.text }}>
                {ContactData["title"]}
              </h1>
              <p
                className="contact-hero-subtitle subTitle"
                style={{ color: theme.secondaryText }}
              >
                {ContactData["description"]}
              </p>
            </div>
          </Fade>

          {/* Info Cards Row */}
          <Fade bottom duration={1000} distance="30px">
            <div className="contact-cards-row">
              <a
                href="mailto:divyanshudubey2712@gmail.com"
                className="contact-card"
                style={{
                  backgroundColor: theme.highlight,
                  borderColor: theme.text + "15",
                }}
              >
                <div className="contact-card-icon">📧</div>
                <h3 style={{ color: theme.text }}>Email</h3>
                <p style={{ color: theme.secondaryText }}>
                  divyanshudubey2712@gmail.com
                </p>
              </a>

              <a
                href="tel:+919601981524"
                className="contact-card"
                style={{
                  backgroundColor: theme.highlight,
                  borderColor: theme.text + "15",
                }}
              >
                <div className="contact-card-icon">📞</div>
                <h3 style={{ color: theme.text }}>Phone</h3>
                <p style={{ color: theme.secondaryText }}>+91 9601981524</p>
              </a>

              <a
                href="https://wa.me/919601981524"
                target="_blank"
                rel="noopener noreferrer"
                className="contact-card"
                style={{
                  backgroundColor: theme.highlight,
                  borderColor: theme.text + "15",
                }}
              >
                <div className="contact-card-icon">💬</div>
                <h3 style={{ color: theme.text }}>WhatsApp</h3>
                <p style={{ color: theme.secondaryText }}>+91 9601981524</p>
              </a>

              <a
                href={addressSection.location_map_link}
                target="_blank"
                rel="noopener noreferrer"
                className="contact-card"
                style={{
                  backgroundColor: theme.highlight,
                  borderColor: theme.text + "15",
                }}
              >
                <div className="contact-card-icon">📍</div>
                <h3 style={{ color: theme.text }}>Location</h3>
                <p style={{ color: theme.secondaryText }}>
                  {addressSection["subtitle"]}
                </p>
              </a>
            </div>
          </Fade>

          {/* Contact Form + Social */}
          <Fade bottom duration={1000} distance="40px">
            <div className="contact-form-section">
              <div className="contact-form-container">
                <h2
                  className="contact-form-heading"
                  style={{ color: theme.text }}
                >
                  Send Me a Message
                </h2>
                <form onSubmit={this.handleSubmit} className="contact-form">
                  <div className="contact-form-row">
                    <input
                      type="text"
                      name="name"
                      placeholder="Your Name"
                      value={this.state.name}
                      onChange={this.handleChange}
                      required
                      className="contact-input"
                      style={{
                        backgroundColor: theme.highlight,
                        color: theme.text,
                        borderColor: theme.text + "20",
                      }}
                    />
                    <input
                      type="email"
                      name="email"
                      placeholder="Your Email"
                      value={this.state.email}
                      onChange={this.handleChange}
                      required
                      className="contact-input"
                      style={{
                        backgroundColor: theme.highlight,
                        color: theme.text,
                        borderColor: theme.text + "20",
                      }}
                    />
                  </div>
                  <div className="contact-form-row">
                    <input
                      type="tel"
                      name="phone"
                      placeholder="Your Phone (optional)"
                      value={this.state.phone}
                      onChange={this.handleChange}
                      className="contact-input"
                      style={{
                        backgroundColor: theme.highlight,
                        color: theme.text,
                        borderColor: theme.text + "20",
                      }}
                    />
                    <input
                      type="text"
                      name="subject"
                      placeholder="Subject"
                      value={this.state.subject}
                      onChange={this.handleChange}
                      className="contact-input"
                      style={{
                        backgroundColor: theme.highlight,
                        color: theme.text,
                        borderColor: theme.text + "20",
                      }}
                    />
                  </div>
                  <textarea
                    name="message"
                    placeholder="Your Message..."
                    rows="6"
                    value={this.state.message}
                    onChange={this.handleChange}
                    className="contact-textarea"
                    style={{
                      backgroundColor: theme.highlight,
                      color: theme.text,
                      borderColor: theme.text + "20",
                    }}
                  />
                  <button
                    type="submit"
                    className="contact-submit-btn"
                    disabled={this.state.sending}
                  >
                    {this.state.sending
                      ? "Sending..."
                      : this.state.sent
                      ? "\u2705 Message Sent!"
                      : this.state.error
                      ? "\u274c Failed — Try Again"
                      : "Send Message \u2192"}
                  </button>
                  {this.state.sent && (
                    <p className="contact-success-msg">
                      Thank you! Your message has been sent successfully.
                    </p>
                  )}
                  {this.state.error && (
                    <p className="contact-error-msg">
                      Something went wrong. Please try again or email directly.
                    </p>
                  )}
                </form>
              </div>

              <div className="contact-social-sidebar">
                <h2
                  className="contact-form-heading"
                  style={{ color: theme.text }}
                >
                  Connect With Me
                </h2>
                <SocialMedia theme={theme} />
                <div className="contact-resume-link">
                  <a
                    href={greeting.resumeLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="contact-resume-btn"
                  >
                    📄 Download Resume
                  </a>
                </div>
              </div>
            </div>
          </Fade>
        </div>
        <Footer theme={this.props.theme} onToggle={this.props.onToggle} />
        <TopButton theme={this.props.theme} />
      </div>
    );
  }
}

export default Contact;
