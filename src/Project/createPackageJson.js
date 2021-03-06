import fs from "fs";

export const createPackageJson = (options) => {
  const isJs = () => options.template === "JavaScript";
  fs.writeFileSync(
    `${options.base}/package.json`,
    `{
    "name": "node-starter",
    "version": "0.1.0",
    "description": "${options.base}",
    "author": "${options.base}",
    "license": "GPL-3.0 License",
    "scripts": {
        "dev": "nodemon src/server${isJs() ? ".js" : ".ts"}",
       ${
         isJs()
           ? ""
           : ` "build": "tsc",
       `
       } "start": "node src/server.js",
        "test": "jest --runInBand",
        ${
          options.eslint
            ? ` "lint": "eslint '*/**/*.{js,ts,tsx}' --quiet --fix",`
            : ""
        }
       
        "ts-node": "ts-node --compiler-options {\\\"module\\\":\\\"commonjs\\\"}"
    },
    "dependencies": {
        "@casl/ability": "^5.3.1",
        "@prisma/client": "^2.27.0",
        "bcrypt": "^5.0.1",
        "compression": "^1.7.4",
        "cookie-parser": "^1.4.5",
        "dotenv": "^10.0.0",
        "express": "^4.17.1",
        "express-async-errors": "^3.1.1",
        "helmet": "^4.6.0",
        "morgan": "^1.10.0",
        "passport": "^0.4.1",
        "passport-jwt": "^4.0.0",
        "swagger-ui-express": "^4.1.6",
        "yup": "^0.32.9"
    },
    "devDependencies": {
        "@types/bcrypt": "^5.0.0",
        "@types/compression": "^1.7.1",
        "@types/cookie-parser": "^1.4.2",
        "@types/express": "^4.17.13",
        "@types/jest": "^26.0.24",
        "@types/morgan": "^1.9.3",
        "@types/node": "^15.14.1",
        "@types/passport": "^1.0.7",
        "@types/passport-jwt": "^3.0.6",
        "@types/supertest": "^2.0.11",
        "@types/swagger-ui-express": "^4.1.3",
        "@typescript-eslint/eslint-plugin": "^4.28.3",
        "@typescript-eslint/parser": "4.28.3",
        "eslint": "7.31.0",
        "eslint-config-airbnb": "18.2.1",
        "eslint-config-airbnb-base": "^14.2.1",
        "eslint-config-prettier": "^8.3.0",
        "eslint-plugin-import": "^2.23.4",
        "eslint-plugin-jest": "^24.4.0",
        "eslint-plugin-prettier": "^3.4.0",
        "jest": "^27.0.6",
        "nodemon": "^2.0.9",
        "pkg": "^5.3.0",
        "prettier": "^2.3.2",
        "prisma": "^2.27.0",
        "supertest": "^6.1.3",
        "ts-jest": "^27.0.3",
        "ts-node": "^10.0.0",
        "typescript": "^4.3.5"
    }
}    
  `
  );
};
