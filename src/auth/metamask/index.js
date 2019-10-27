'use strict'

module.exports = config => {
    return {
        login: require('./login')(config)
    }
}