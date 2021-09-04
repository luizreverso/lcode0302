const basicInfo = require("./basicInfo")
const servers = require("./servers")
const components = require("./components")
const userRoutes = require("./user")


const doc = {
    ...basicInfo,
    ...servers,
    tags: [
        {
            name: "User operations", // name of a tag
        },
    ],
    ...components,
    ...userRoutes
}

module.exports = doc