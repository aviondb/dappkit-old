'use strict'

const promisify = require('promisify-es6')
const request = require('request')
const constants = require('../../constants')

module.exports = config => {
    return promisify((callback) => {

        //Check if web3 is available
        if (!window.ethereum) {
            callback({
                "err": "METAMASK_NOT_FOUND"
            }, null)
        }
        else {
            //Take User Prompt
            window.ethereum.enable()
                .then(addrs => {
                    if (addrs.length = 0) {
                        callback({
                            "err": "NO_ACTIVE_METAMASK_ADDRESS"
                        }, null)
                    }
                    else {
                        //Register the user to the Dappkit Dapp Project
                        request.post({
                            url: `${constants.DAPPKIT_API_ENDPOINT}${constants.AUTH_METAMASK_LOGIN}`,
                            form: {
                                config: config,
                                address: addrs[0]
                            }
                        }, function (err, httpResponse, body) {
                            callback(err, JSON.parse(body))
                        })
                    }
                })
                .catch(err => {
                    callback(err, null)
                })
        }
    })
}