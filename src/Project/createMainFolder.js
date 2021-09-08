import fs from "fs";

export const createMainFolder = ({ base }) => {
  fs.mkdirSync(base);
};
