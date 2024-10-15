# auto-file-manager

This repository was created out of necessity and serves to download all the files from the FactorialHR website. This is because the website lacks a button or functionality to download all files at once, requiring manual download of each file individually.

Additionally, it includes a script to remove `.mp3` files with specific endings from a folder, making it useful for organizing your files by filtering out unwanted language-specific files.

## Installation

```bash
npm install
```

## Instructions for Downloading Files

1. Visit the URL "https://api.factorialhr.com/documents" (after logging into FactorialHR).

2. Copy the entire array of documents and paste it into the `index.js` file under the constant `USERJSON`.

3. Open a terminal and execute the following command:

    ```bash
    npm run download
    ```

4. Enjoy your files, young dev Jedi!!!

<p align="center">
  <img src="https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExMHQwZ3k2bmQxYjdocGdkcDQ4bWkzMWljbHl0Y3ZyOWhrdXlxaW5qOCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/3ornjSL2sBcPflIDiU/giphy.gif" alt="solo" />
</p>

---

## Instructions for Removing Files

This project also includes a script to **recursively delete `.mp3` files** that end with `_es_LATAM` or `_pt` from a specified folder.

1. Replace the `folderPath` variable in the `remove-filter-files.js` file with the path to the folder where you want to delete files.

2. Open a terminal and run the following command to remove the target files:

    ```bash
    npm run remove
    ```

This will delete all `.mp3` files matching the filter in the specified folder and its subdirectories.
