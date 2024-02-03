const fs = require("fs");
const filePath = "quest2.txt";

function writeToFile(filePath, content) {
  fs.writeFile(filePath, content, (err) => {
    if (err) {
      console.error(err);
      return;
    }

    console.log(`File created: ${filePath}`);
    console.log(`Content written to file: ${content}`);
  });
}

// Call the function to execute it
writeToFile(filePath, "Data written to quest2.txt");
