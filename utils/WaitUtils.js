class WaitUtils {

    static async waitForDisplayed(element, timeout = 10000) {
        await element.waitForDisplayed({
            timeout
        });

        return element;
    }

    static async waitForClickable(element, timeout = 10000) {
        await element.waitForClickable({
            timeout
        });

        return element;
    }

}

module.exports = WaitUtils;