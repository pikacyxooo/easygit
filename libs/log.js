// import chalk from "chalk";
const chalk = require("chalk")

const log = console.log;

const error = (msg) => {
    log(chalk.red(msg))
}

module.exports = {
    error
}