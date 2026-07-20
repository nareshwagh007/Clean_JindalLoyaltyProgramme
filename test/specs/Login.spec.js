const LoginPage = require('../pageobjects/LoginPage');
const testData = require('../data/testdata');


describe('Login Functionality', () => {

    it('TC_001 Verify user can login successfully', async () => {

        console.log('Launching App');

        await LoginPage.launchApp();

        console.log('Verifying Login Screen');

        await LoginPage.verifyLoginScreen();

        console.log('Entering Credentials');

        await LoginPage.login(
            validUser.email,
            validUser.password
        );

        console.log('Verifying Success Popup');

        await LoginPage.verifyLoginSuccessMessage();

        console.log('Clicking OK');

        await LoginPage.clickOk();

    });

});