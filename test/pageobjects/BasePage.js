class BasePage {

   async click(element) {
    await element.waitForDisplayed({ timeout: 20000 });
    await element.waitForEnabled({ timeout: 20000 });
    await element.click();
}

    async type(element, text) {
    await element.waitForDisplayed({ timeout: 20000 });
    await element.clearValue();
    await element.setValue(text);
}

    async getText(element) {
        await element.waitForDisplayed({ timeout: 20000 });
        return await element.getText();
    }

    async isDisplayed(element) {
        return await element.isDisplayed();
    }

    async waitForElement(element) {
        await element.waitForDisplayed();
    }

}

module.exports = new BasePage();