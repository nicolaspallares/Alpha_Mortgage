class Page {
    goToHome() {
        browser.url('https://test-onlineapplication.wolterskluwer.com/ola/servlet/SmartForm.html?formCode=mortgageapplication&clientID=Alpha')
    }

}
module.exports = new Page();