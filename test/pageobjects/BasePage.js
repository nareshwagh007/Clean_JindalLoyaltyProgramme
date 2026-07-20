const WaitUtils = require('../utils/WaitUtils');

class BasePage {

    async click(element) {
        const webElement = await WaitUtils.waitForClickable(element);
        await webElement.click();
    }

    async setValue(element, value) {
        const webElement = await WaitUtils.waitForDisplayed(element);
        await webElement.setValue(value);
    }

    async getText(element) {
        const webElement = await WaitUtils.waitForDisplayed(element);
        return await webElement.getText();
    }

    async isDisplayed(element, timeout = 10000) {
        try {
            await element.waitForDisplayed({ timeout });
            return true;
        } catch (error) {
            return false;
        }
    }

    async hideKeyboard() {
        try {
            await driver.hideKeyboard();
        } catch (error) {
            console.log('Keyboard is already hidden.');
        }
    }

    async launchApp() {
        await driver.activateApp('com.extension.jindal_india');
    }

    async closeApp() {
        await driver.terminateApp('com.extension.jindal_india');
    }
}

module.exports = BasePage;