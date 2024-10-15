// Imports
import { fileURLToPath } from "url";
import { dirname } from "path";
import path from "path";
import axios from "axios";
import fs from "fs";

// Json with all the data from the url https://api.factorialhr.com/documents (each person must enter their data)
// const USERJSON = [${userData}]

// Set the target folder to save the documents
const setTargetFolder = () => {
  const __dirname = dirname(fileURLToPath(import.meta.url));
  const docsFolderPath = path.join(__dirname, "docs");
  if (!fs.existsSync(docsFolderPath)) fs.mkdirSync(docsFolderPath);
  return docsFolderPath;
};

// Download all the documents from the array
const getAllDocuments = async (documents) => {
  try {
    const folderPath = setTargetFolder();
    documents.forEach(async (document) => {
      const response = await axios({
        url: document.download_url,
        method: "GET",
        responseType: "arraybuffer",
      });
      const filePath = path.join(folderPath, document.filename);
      fs.writeFileSync(filePath, response.data);
    });
    console.log("\x1b[32mAll documents downloaded successfully\x1b[0m 😎");
  } catch (error) {
    console.log('\x1b[31m"Error downloading the document"\x1b[0m 💔', error);
  }
};

// Main function to execute the program
const main = async () => {
  await getAllDocuments(USERJSON);
};

main();
