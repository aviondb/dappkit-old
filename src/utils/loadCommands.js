'use strict'

function getCommands() {
    const cmds = {
        auth: require('../auth'),
    }

    return cmds
}

function loadCommands(config) {
    const availableCmds = getCommands()
    const cmds = {}

    Object.keys(availableCmds).forEach((cmd) => {
        cmds[cmd] = availableCmds[cmd](config)
    })

    return cmds
}

module.exports = (config) => loadCommands(config)