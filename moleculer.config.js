"use strict"


const os = require("os")


module.exports = {
    nodeID: `${process.env.nodeID || ""}-${os.hostname().toLowerCase()}`
}