import fs from "fs";
import path from "path";

const directory = process.cwd();

const getData = () => {
  const fullPath = path.join(directory, "/public/data.json");
  const fileContents = fs.readFileSync(fullPath, "utf8");
  const dataObject = JSON.parse(fileContents);
  const dataArray = Object.keys(dataObject).map((key) => {
    const element = dataObject[key];
    element.id = key;
    return element;
  });
  return dataArray;
};

export default getData;

// Inspired by https://nextjs.org/learn/basics/data-fetching
