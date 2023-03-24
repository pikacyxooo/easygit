const fse = require("fs-extra");
const path = require("path");
const log = require("../libs/log");
// const file = require("./file");

const init = () => {
    const projectPath = process.cwd();
    if(fse.pathExistsSync(projectPath)) {
        let configDir = path.join(projectPath, '.easygit')
        if(fse.pathExistsSync(configDir)) {
            log.error(".easygit already exist")
        } else {
            fse.mkdir(configDir)
        }
    } else {
        log.error("path error")
    }
}

module.exports = init;