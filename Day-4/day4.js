const path = require("path");

function resolvePath(relativePath) {
  try {
    // Get the current working directory
    const cwd = process.cwd();

    // Resolve the relative path to an absolute path
    const absolutePath = path.resolve(cwd, relativePath);

    // Print the resolved path to the console
    console.log(absolutePath);
  } catch (error) {
    console.error("Error resolving path:", error.message);
  }
}

resolvePath("Day-4day4.txt");
