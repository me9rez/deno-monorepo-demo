import chalk from "chalk";
import { add } from "@scope/add";
import { subtract } from "@scope/subtract";
import { log } from "log";

log("1 + 2 =", chalk.underline.green(add(1, 2)));
log("2 - 4 =", chalk.red(subtract(2, 4)));
