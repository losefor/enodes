import fs from "fs";

export const createPrismaSchema = ({ base, template }) => {
  fs.writeFileSync(
    `${base}/prisma/schema.prisma`,
    `datasource db {
    provider = "postgresql"
    url      = env("DATABASE_URL")
}

generator client {
    provider        = "prisma-client-js"
    previewFeatures = ["referentialActions"]
}  
`
  );
};
