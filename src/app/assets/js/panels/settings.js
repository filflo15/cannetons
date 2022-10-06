const { config } = require('./assets/js/utils.js');
const dataDirectory = process.env.APPDATA || (process.platform == 'darwin' ? process.env.HOME + '/Library/Application Support' : process.env.HOME)
const os = require("os")
let DEFAULT_CONFIG

const totalMem = Math.trunc(os.totalmem() / 1048576 * 10) / 10;
const freeMem = Math.trunc(os.freemem() / 1048576 * 10) / 10;


config.config().then(res => {
    if(!fs.existsSync(`${dataDirectory}/${res.dataDirectory}/config.json`)){
        DEFAULT_CONFIG = {
            "Launcher": {
                "NewsAutoRefresh": null,
                "StatusServerAutoRefresh": null
            },
            "Settings": {
                "Java": {
                    "RamMin": `${(freeMem / 3).toFixed(0)}`,
                    "RamMax": `${(totalMem / 3).toFixed(0)}`,
                    "Directory": null
                },
                "Resolution": null,
                "CloseLauncher": true
            },
            "Login": {
                "UserConnect": null,
                "Account": null
            }
        }
        fs.writeFileSync(`${dataDirectory}/${res.dataDirectory}/config.json`, JSON.stringify(DEFAULT_CONFIG, true, 4), 'UTF-8')
    }
    import ("./settings/account.js")
    import ("./settings/java-directory.js")
    import ("./settings/java-memory.js")
    import ("./settings/resolution.js")
    import ("./settings/settings-start.js")
})

document.querySelector(".accountsettings").addEventListener("click", () => {
    tab('accountsettingstab')
})

document.querySelector(".ramsettings").addEventListener("click", () => {
    tab('ramsettinstab')
})

document.querySelector(".javasettings").addEventListener("click", () => {
    tab('javasettingstab')
})

document.querySelector(".resolutionsettings").addEventListener("click", () => {
    tab('resolutionsettingstab')
})

document.querySelector(".launchersettings").addEventListener("click", () => {
    tab('launchersettingstab')
})

function tab(info) {
    let content = document.getElementsByClassName("tabsettings");
    for (let i = 0; i < content.length; i++) {
        content[i].style.display = "none";
    }
    document.querySelector(`.${info}`).style.display = "block";
}

document.querySelector(".settingsSave").addEventListener("click", () => {
    changePanel("settings", "home")
})
