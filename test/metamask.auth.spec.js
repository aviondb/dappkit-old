const dappkit = require('./helpers/init')
const assert = require('chai').assert

describe('metamask auth', () => {

    it('login using metamask', (done) => {
        dappkit.auth.metamask.login((err, res) => {
            assert.notExists(err, 'throws error while metamask login')
            done()
        })
    })
})
