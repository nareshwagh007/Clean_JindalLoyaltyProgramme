const BasePage = require('./BasePage');

class LoginPage extends BasePage {

    // Login Screen

    get emailInput() {
        return $('//android.widget.EditText[1]');
    }

    get passwordInput() {
        return $('//android.widget.EditText[2]');
    }

    get continueButton() {
        return $('~Continue');
    }

    // Success Popup

    get successMessage() {
        return $('~Login successfully!');
    }

    get okButton() {
        return $('~OK');
    }

    // Verification

    async verifyLoginScreen() {
        await this.emailInput.waitForDisplayed({ timeout: 10000 });
        await expect(this.emailInput).toBeDisplayed();
    }

    // Actions

    async enterEmail(email) {
        await this.setValue(this.emailInput, email);
    }

    async enterPassword(password) {
        await this.setValue(this.passwordInput, password);
        await this.hideKeyboard();
    }

    async tapContinue() {
        await this.click(this.continueButton);
    }

    async login(email, password) {
        await this.enterEmail(email);
        await this.enterPassword(password);
        await this.tapContinue();
    }

    async verifyLoginSuccessMessage() {
        await this.successMessage.waitForDisplayed({ timeout: 10000 });
        await expect(this.successMessage).toBeDisplayed();
    }

    async clickOk() {
        await this.click(this.okButton);
    }
}

module.exports = new LoginPage();