import React from "react";
import "./Competitive.css";

const Competitive = () => {
  return (
    <div className="competitive-main">
      <h1 className="competitive-heading">🏆 Competitive Programming</h1>

      <section className="competitive-section">
        <h2>💡 LeetCode Stats</h2>
        <img
          src="https://leetcard.jacoblin.cool/Divyanshu1Dubey?ext=activity"
          alt="LeetCode Card"
        />
      </section>

      <section className="competitive-section">
        <h2>📈 Codeforces Stats</h2>
        <img
          src="https://cf.leed.at?id=Divyanshu1Dubey"
          alt="Codeforces Graph"
        />
      </section>

      <section className="competitive-section">
        <h2>🧠 Skill Highlights</h2>
        <ul>
          <li>Solved 500+ LeetCode problems</li>
          <li>Specialized in Arrays, Graphs, and Dynamic Programming</li>
          <li>Codeforces max rating: [your rating]</li>
          <li>6+ contests participated across platforms</li>
        </ul>
      </section>
    </div>
  );
};

export default Competitive;
