import React from "react";
import "./LeetCodeStats.css";
import leetcode from "../../shared/opensource/leetcode.json";


const LeetcodeStats = () => {
  return (
    <div className="leetcode-card">
      <h2 className="leetcode-title">📊 LeetCode Stats</h2>
      <div className="leetcode-content">
        <ul>
          <li><strong>Username:</strong> {leetcode.username}</li>
          <li><strong>Total Solved:</strong> {leetcode.totalSolved}</li>
          <li><strong>Easy:</strong> {leetcode.solvedEasy}</li>
          <li><strong>Medium:</strong> {leetcode.solvedMedium}</li>
          <li><strong>Hard:</strong> {leetcode.solvedHard}</li>
          <li><strong>Ranking:</strong> {leetcode.ranking}</li>
          <li><strong>Reputation:</strong> {leetcode.reputation}</li>
        </ul>
      </div>
    </div>
  );
};

export default LeetcodeStats;

