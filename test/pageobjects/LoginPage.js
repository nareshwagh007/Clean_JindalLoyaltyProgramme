const BasePage = require('./BasePage');

class LoginPage extends BasePage {

    async open() {
        // placeholder for app-specific navigation/start action
        // e.g. driver.launchApp() or deep link; left empty intentionally
        return;
    }

    
    get emailTextbox() {
    return $('id=com.extension.jindal_india:id/etEmail');
    }

    get passwordTextbox() {
    return $('android=new UiSelector().className("android.widget.EditText").instance(1)');
    
    }

    get loginButton() {
        return $('android=new UiSelector().description("Continue")');
    }

    async setEmail(email) {
        await this.type(this.emailTextbox, email);
    }

    async setPassword(password) {
        await this.type(this.passwordTextbox, password);
    }

    async tapContinue() {
        await this.click(this.loginButton);
    }

    async login(email, password) {
        if (email) await this.setEmail(email);
        if (password) await this.setPassword(password);
        await this.tapContinue();
    }

}

module.exports = new LoginPage();