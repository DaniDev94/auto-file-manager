// Imports
import path from "path";
import fs from "fs";

// Function to delete .mp3 files ending in "es_LATAM" or "_pt", recursively
const deleteTargetFiles = (folderPath) => {
  const filesAndFolders = fs.readdirSync(folderPath);

  filesAndFolders.forEach((item) => {
    const fullPath = path.join(folderPath, item);
    const stat = fs.statSync(fullPath);

    // If it's a directory, call the function recursively
    if (stat.isDirectory()) {
      deleteTargetFiles(fullPath);
    }
    // If it's a file, check if it's a .mp3 and ends with "es_LATAM" or "_pt"
    else if (stat.isFile() && item.endsWith(".mp3")) {
      if (item.includes("es_LATAM") || item.includes("_pt")) {
        fs.unlinkSync(fullPath);
        console.log(`\x1b[32m Deleted file: \x1b[0m ${fullPath}`);
      }
    }
  });
};

// Main function to execute the program
const main = (folderPath) => {
  try {
    if (fs.existsSync(folderPath)) {
      deleteTargetFiles(folderPath);
      console.log("\x1b[32m All target files deleted successfully \x1b[0m 😎");
    } else {
      console.log("\x1b[31m Folder path does not exist \x1b[0m 💔");
    }
  } catch (error) {
    console.log("\x1b[31m Error deleting the files \x1b[0m 💔", error);
  }
};

// Replace with the actual folder path
const folderPath = "/path/to/your/folder";
main(folderPath);
