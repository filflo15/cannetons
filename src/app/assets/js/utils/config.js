const pkg = require("../../../../package.json");
const fetch = require("node-fetch")
if((pkg.user) === undefined || (pkg.user) === ""){
    var url = pkg.url
} else {
    var url = pkg.url + "/" + pkg.user
}
const config = url + "/launcher/config-launcher/config.json";
const info = url + "/launcher/config-launcher/info.json";
const java = url + "/launcher/config-launcher/jre-download.json";
const news = url + "/launcher/news-launcher/news-launcher.json";

module.exports.config = getData;

function getData() {
    return new Promise((resolve, reject) => {
        fetch(config).then(config => {
            return resolve(config.json());
        }).catch(error => {
            return reject(error);
        })
    })
}

module.exports.info = getInfo;
function getInfo() {
    return new Promise((resolve, reject) => {
        fetch(info).then(info => {
            return resolve(info.json());
        }).catch(error => {
            return reject(error);
        })
    })
}

module.exports.java = getjava;
function getjava() {
    return new Promise((resolve, reject) => {
        fetch(java).then(info => {
            return resolve(info.json());
        }).catch(error => {
            return reject(error);
        })
    })
}

module.exports.news = getNews;

function getNews() {
    return new Promise((resolve, reject) => {
        fetch(news).then(config => {
            return resolve(config.json());
        }).catch(error => {
            return reject(error);
        })
    })
}

module.exports.isonline = function isonline() {
    return new Promise((resolve, reject) => {
        getData().then(config => {
            return resolve(config.offline != "on")
        }).catch(error => {
            return reject(error);
        })
    })
}