'use strict'

const promisify = require('promisify-es6')
const request = require('request')
const constants = require('../../constants')

module.exports = config => {
    return promisify((callback) => {
        callback(null, config)
    })
}