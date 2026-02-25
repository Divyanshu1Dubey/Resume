import React, { Component } from "react";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import TopButton from "../../components/topButton/TopButton";
import Tech4GrowthBanner from "../../components/tech4growth/Tech4GrowthBanner";
import StartupProject from "../../containers/StartupProjects/StartupProject";
import "./Opensource.css";

class Opensource extends Component {
  render() {
    return (
      <div className="opensource-main">
        <Header theme={this.props.theme} />
        <Tech4GrowthBanner theme={this.props.theme} />
        <StartupProject theme={this.props.theme} />
        <Footer theme={this.props.theme} onToggle={this.props.onToggle} />
        <TopButton theme={this.props.theme} />
      </div>
    );
  }
}

export default Opensource;
