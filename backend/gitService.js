const simpleGit = require("simple-git");
const path = require("path");

let git;
try {
  // Go up to the root if backend is a subfolder
  git = simpleGit(path.resolve(__dirname, ".."));
} catch (err) {
  console.error("Git repository not found. Skipping commit.");
}

async function commitCode() {
  try {
    await git.add("./generated_code/*");
    await git.commit("GenAI-generated code");
    await git.push();
  } catch (err) {
    console.error("Git commit failed:", err.message);
  }
}

module.exports = { commitCode };
