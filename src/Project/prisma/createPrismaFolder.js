import fs from "fs";

export const createPrismaFolder = ({base}) => {
  fs.mkdirSync(`${base}/prisma`);
};
