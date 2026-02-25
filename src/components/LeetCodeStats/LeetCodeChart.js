import React from "react";
import { Doughnut } from "react-chartjs-2";
import leetcode from "../../shared/opensource/leetcode.json";

function LeetCodeChart() {
  const data = {
    labels: ["Easy", "Medium", "Hard"],
    datasets: [
      {
        data: [
          leetcode.solvedEasy,
          leetcode.solvedMedium,
          leetcode.solvedHard,
        ],
        backgroundColor: ["#00e676", "#ff9100", "#ff1744"],
        hoverBackgroundColor: ["#00c853", "#ff6d00", "#f50057"],
      },
    ],
  };

  return (
    <div className="opensource-card">
      <h2 className="opensource-heading">Problem Difficulty Distribution</h2>
      <Doughnut
        data={data}
        options={{
          responsive: true,
          maintainAspectRatio: true,
          animation: { duration: 3000 },
        }}
      />
    </div>
  );
}

export default LeetCodeChart;
