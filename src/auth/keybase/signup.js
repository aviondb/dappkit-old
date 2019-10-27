'use strict'

const promisify = require('promisify-es6')
const request = require('request')
const constants = require('../../constants')
const crypto = require('crypto')
var ed25519 = require("ed25519");

function getSalt(bytes) {
    crypto.randomBytes(bytes, function (err, buffer) {
        return buffer.toString('hex');
    });
}

function passphraseStream(passphrase, salt) {
    crypto.scrypt(passphrase, salt, 256, (err, derivedKey) => {
        if (err) {
            throw `Error while generating password hash`
        }
        return derivedKey
    })
}

function getPasswordHash(passphraseStream) {
    console.log(passphraseStream)
    //return passphraseStream[192:224]
}

function getv5(passphraseStream) {

}

function edDSAPublicKeyFromSeed(seed) {
    return ed25519.MakeKeypair(seed).publicKey.toString('hex');
}

function getpdpka5_kid() {

}

module.exports = config => {
    return promisify((callback) => {
        callback(null, config)
    })
}

