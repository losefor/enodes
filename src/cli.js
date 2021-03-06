import arg from "arg";
import inquirer from "inquirer";
import { index } from ".";

function parseArgumentsIntoOptions(rawArgs) {
  const args = arg(
    {
      "--init": Boolean,
      "--yes": Boolean,
      "--install": Boolean,
      "-i": "--init",
      "-y": "--yes",
    },
    {
      argv: rawArgs.slice(2),
    }
  );
  return {
    init: args["--init"] || false,
    git: args["--git"] || false,
    template: args._[0],
    runInstall: args["--install"] || false,
  };
}

const promptForMissingOptions = async (options) => {
  // Defaults
  const DEFAULT_TEMPLATE = "JavaScript";
  const DEFAULT_ORM = "Prisma";
  const DEFAULT_CODE_TYPE = "Functional";
  const DEFAULT_VALIDATOR = "Yub";

  const answers = await inquirer.prompt([
    {
      type: "input",
      name: "base",
      message: "What is the name of you project...?",
      default: "enodes",
    },
    {
      type: "list",
      name: "template",
      message: "what is the template that you wan't to start with...?",
      choices: ["JavaScript", "TypeScript"],
      default: DEFAULT_TEMPLATE,
    },
    {
      type: "list",
      name: "ORM",
      message: "what is the ORM that you to use...?",
      choices: ["Prisma", "Mongoose"],
      default: DEFAULT_ORM,
    },
    {
      type: "list",
      name: "codeType",
      message: "How would you like to code...?",
      choices: ["Functional", "Classes"],
      default: DEFAULT_CODE_TYPE,
    },
    {
      type: "list",
      name: "validator",
      message: "What validator you want to use...?",
      choices: ["Yub", "Joi", "Zod"],
      default: DEFAULT_VALIDATOR,
    },
    {
      type: "confirm",
      name: "casl",
      message: "Do you want to use Casl...?",
    },
    {
      type: "confirm",
      name: "eslint",
      message: "Do you want to use eslint...?",
    },
    {
      type: "confirm",
      name: "dotenv",
      message: "Do you want to use dotenv...?",
    },
    {
      type: "confirm",
      name: "helmet",
      message: "Do you want to use helmet...?",
    },
    {
      type: "confirm",
      name: "morgan",
      message: "Do you want to use morgan...?",
    },
    {
      type: "confirm",
      name: "compression",
      message: "Do you want to use compression...?",
    },
    {
      type: "confirm",
      name: "passport",
      message: "Do you want to use passport...?",
    },
    {
      type: "confirm",
      name: "bcrypt",
      message: "Do you want to use bcrypt...?",
    },
    {
      type: "confirm",
      name: "eae",
      message: "Do you want to use express-async-errors...?",
    },
  ]);

  return {
    ...options,
    base: answers.base,
    eae: answers.eae,
    bcrypt: answers.bcrypt,
    passport: answers.passport,
    compression: answers.compression,
    morgan: answers.morgan,
    helmet: answers.helmet,
    dotenv: answers.dotenv,
    eslint: answers.eslint,
    casl: answers.casl,
    template: options.template || answers.template,
    git: options.git || answers.git,
  };
};

export const cli = async (args) => {
  let options = parseArgumentsIntoOptions(args);
  options = await promptForMissingOptions(options);
  index(options);
};
