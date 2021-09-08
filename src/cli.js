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
  ]);

  return {
    ...options,
    base: answers.base,
    template: options.template || answers.template,
    git: options.git || answers.git,
  };
};

export const cli = async (args) => {
  let options = parseArgumentsIntoOptions(args);
  options = await promptForMissingOptions(options);
  index(options);
};
