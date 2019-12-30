const getUserData = require('../index').getUserData;
const expect = require('chai').expect;
const nock = require('nock');

describe('Github User Data', () => {
    let users = {};
    before(() => {
        users = require('./responses/index');
    });
    it('GET Get the data from the Github user', () => {
        return getUserData('NoeCR').then(
            resp => {
                // Check type of response, must be an object
                expect(typeof resp).to.equal('object');
                // Check user 
                expect(resp.login).to.equal('NoeCR');
                // Check user id
                expect(resp.id).to.be.an('number');
                // Check followers & following are a number
                expect(resp.followers).to.be.an('number');
                expect(resp.following).to.be.an('number');
                // Check location name Castellón
                expect(resp.location).to.equal('Castellón');
            }
        )
    });

    it('GET Get the data from the Github user (mocked)', () => {
        try {
            nock('https://api.github.com')
                .get('/users/mugan86')
                .reply(200, require('./responses/mugan'));
            // console.log(nck);
            getUserData('mugan86').then(
                resp => {
                    // Check type of response, must be an object
                    expect(typeof resp).to.equal('object');
                    // Check user 
                    expect(resp.login).to.equal(users.mugan.login);
                    // Check user id
                    expect(resp.id).to.be.an('number');
                    // Check followers & following are a number
                    expect(resp.followers).to.be.an('number');
                    expect(resp.following).to.be.an('number');
                    // Check location name Castellón
                    expect(resp.location).to.equal(users.mugan.location);
                }
            )

            nock.restore();
            // console.log(nock.pendingMocks());
            nock.cleanAll();
            // console.log(nock.pendingMocks());
        } catch (ex) {
            console.log(ex);
        }
    })
});