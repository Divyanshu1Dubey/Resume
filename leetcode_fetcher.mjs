// leetcode_fetcher.mjs
import fetch from "node-fetch";
import fs from "fs/promises";
import path from "path";

const username = process.env.LEETCODE_USERNAME || "Divyanshu_Dubey"; // <--- Replace or use .env
const OUTPUT_PATH = "./src/shared/opensource/leetcode.json";

async function fetchLeetCodeProfile(username) {
  const query = `
    query getUserProfile($username: String!) {
      allQuestionsCount { difficulty count }
      matchedUser(username: $username) {
        username
        profile { reputation ranking }
        submitStats { acSubmissionNum { difficulty count } }
      }
    }
  `;

  const response = await fetch("https://leetcode.com/graphql", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ query, variables: { username } }),
  });

  const json = await response.json();
  return json.data;
}

async function run() {
  try {
    console.log(`🔁 Fetching LeetCode data for ${username}...`);
    const data = await fetchLeetCodeProfile(username);

    if (!data?.matchedUser) {
      throw new Error("User not found or blocked by LeetCode.");
    }

    const userStats = {
      username: data.matchedUser.username,
      ranking: data.matchedUser.profile.ranking,
      reputation: data.matchedUser.profile.reputation,
      totalSolved: data.matchedUser.submitStats.acSubmissionNum.find(d => d.difficulty === "All").count,
      solvedEasy: data.matchedUser.submitStats.acSubmissionNum.find(d => d.difficulty === "Easy").count,
      solvedMedium: data.matchedUser.submitStats.acSubmissionNum.find(d => d.difficulty === "Medium").count,
      solvedHard: data.matchedUser.submitStats.acSubmissionNum.find(d => d.difficulty === "Hard").count,
    };

    await fs.mkdir(path.dirname(OUTPUT_PATH), { recursive: true });
    await fs.writeFile(OUTPUT_PATH, JSON.stringify(userStats, null, 2));
    console.log("✅ LeetCode data saved to leetcode.json");
  } catch (err) {
    console.error("❌ Failed to fetch LeetCode data:", err.message);
  }
}

run();
