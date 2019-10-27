'use strict'

module.exports = config => {
    return {
        metamask: require('./metamask')(config)
    }
}