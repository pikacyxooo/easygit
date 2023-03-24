const fse = require("fs-extra");

const configExist = (path) => {
    const projectPath = process.cwd();
    if(fse.pathExistsSync(projectPath)) {
        let configDir = path.join(projectPath, '.easygit')
        if(fse.pathExistsSync(configDir)) {
            return true;
        }
    } else {
        return false
    }
}

module.exports = {
    configExist
}