const { expect } = require('@wdio/globals');

describe('App Launch', () => {

    it('should launch the Jindal app successfully', async () => {

        // Wait for the app to load
        await driver.pause(5000);

        // Print the current package
        const currentPackage = await driver.getCurrentPackage();
        console.log("Current Package :", currentPackage);

        // Verify the app is launched
        await expect(currentPackage).toBe('com.extension.jindal_india');

    });

});
