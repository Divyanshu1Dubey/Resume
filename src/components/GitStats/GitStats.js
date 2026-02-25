import React from "react";
import "./GitStats.css";

function GitStats() {
  return (
    <div className="main" id="gitStats">
      <h1 className="project-heading">📊 GitHub Stats</h1>

      <div className="git-container">
        <img
          src="https://github-readme-stats.vercel.app/api?username=Divyanshu1Dubey&show_icons=true&theme=tokyonight&count_private=true"
          alt="GitHub Stats"
        />
        <img
          src="https://github-readme-stats.vercel.app/api/top-langs/?username=Divyanshu1Dubey&layout=compact&theme=tokyonight&hide=php,shell"
          alt="Top Languages"
        />
        <img
          src="https://github-readme-activity-graph.vercel.app/graph?username=Divyanshu1Dubey&theme=tokyo-night&area=true"
          alt="Activity Graph"
        />
        <img
          src="https://github-profile-trophy.vercel.app/?username=Divyanshu1Dubey&theme=gruvbox&no-frame=true&row=1&column=6"
          alt="Trophies"
        />
        <img
          src="https://github.com/Divyanshu1Dubey/Divyanshu1Dubey/blob/main/profile-3d-contrib/profile-green-animate.svg"
          alt="3D Contributions"
        />
      </div>
    </div>
  );
}

export default GitStats;
