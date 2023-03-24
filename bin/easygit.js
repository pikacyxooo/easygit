const program = require("commander");
const pkg = require("../package.json");

program
    .name("easygit")
    .version(pkg.version);

program.command('init').action(() => {
    console.log("init")
    require('../libs/init')();
})

program.parse(process.argv)