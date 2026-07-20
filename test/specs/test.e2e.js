const { expect } = require('@wdio/globals')
const LoginPage = require('../pageobjects/LoginPage')

describe('Mobile Login', () => {
    it('should open and perform login using mobile pageobject', async () => {
        await LoginPage.open()

        // basic pre-condition: email textbox is present
        await expect(LoginPage.emailTextbox).toBeExisting()

        // perform login (replace with real creds when available)
        await LoginPage.login('test@example.com', 'Password123')

        // post-login: at minimum ensure continue button is no longer displayed
        // (adapt this assertion to your app's post-login element)
        await expect(LoginPage.loginButton).not.toBeDisplayed()
    })
})

