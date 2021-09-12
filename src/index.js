import { createPrismaFolder } from "./Project/prisma/createPrismaFolder";
import { createPrismaSchema } from "./Project/prisma/createPrismaSchema";

import { createMainFolder } from "./Project/createMainFolder";
import { createGitIgnoreFile } from "./Project/createGitIgnoreFile";
import { createPackageJson } from "./Project/createPackageJson";

import { createSrcFolder } from "./Project/src/createSrcFolder";
import { createServerFile } from "./Project/src/server";

export const index = (options) => {
  //Create The main folder
  createMainFolder(options);
  createGitIgnoreFile(options);
  createPackageJson(options);

  // Create prisma
  createPrismaFolder(options);
  createPrismaSchema(options);

  // Src folder
  createSrcFolder(options);
  createServerFile(options);
  console.error(options);
};
