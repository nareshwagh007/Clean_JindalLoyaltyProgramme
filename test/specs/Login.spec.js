const LoginPage = require('../pageobjects/LoginPage');
const testData = require('../data/testData');

describe('Login Functionality', () => {

    it('Login as Retailer', async () => {

        await LoginPage.login(
            testData.retailer.email,
            testData.retailer.password
        );

    });

});