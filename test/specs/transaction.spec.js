const Page = require('../pageObjects/page');
const HomePage = require('../pageObjects/homePage');
const testData = require('../testData/homePage');
const globals = require('../utils/globals');

beforeEach(() => {
    browser.setWindowSize(1440, 968);
    Page.goToHome();
});

describe('Create a basic transaction', () => {
    it('Should create a Purchase transaction', () => {
        HomePage.specialButton('Purchase').waitForClickable(globals.longWait);
        for (var k in testData) {
            HomePage.specialButton(testData[k]).click();
        };
        HomePage.inputAmount.waitForClickable(globals.shortWait);
        HomePage.inputAmount.doubleClick();
        HomePage.inputAmount.setValue(globals.shortWait);
        HomePage.specialButton('Yes').click();
        HomePage.btnSpouse.waitForClickable(globals.longWait);
        HomePage.btnSpouse.click();
        HomePage.inputBorrower.setValue(globals.borrowerMail);
        HomePage.setDate();
        browser.pause(globals.shortWait);
        HomePage.checkBoxConsent.click();
        browser.pause(globals.shortWait);
        HomePage.checkBoxElectronic.click();
        browser.pause(globals.shortWait);
        HomePage.saveAndContinue.click();

        browser.pause(globals.shortWait);
    });
});