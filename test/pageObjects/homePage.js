class HomePage {

    get inputAmount() {
        return $('#amount');
    }

    get btnSpouse() {
        return $('//*[@for="spouseDPYes"]');
    }

    get inputBorrower() {
        return $('#borrowerEmail');
    }

    get dropDownMonth() {
        return $('.av-optional.id-month_1');
    }

    get selectMonth() {
        return $('#month_1 > option:nth-child(3)');
    }

    get dropDownDay() {
        return $('.av-optional.id-day_1');
    }

    get selectDay() {
        return $('#day_1 > option:nth-child(29)');
    }

    get dropDownYear() {
        return $('.av-optional.id-year_1');
    }

    get selectYear() {
        return $('#year_1 > option:nth-child(39)');
    }

    get checkBoxConsent() {
        return $('#consentPullCredit');
    }

    get checkBoxElectronic() {
        return $('#consentElectronicCommunication');
    }

    get saveAndContinue() {
        return $('/html/body/form/div/div[7]/div/div[1]/div/div/div[3]/div/div');
    }

    specialButton(lblName) {
        return $('//label[contains(.,"' + lblName + '")]');
    }

    setDate() {
        this.dropDownDay.click();
        this.selectDay.click();
        this.dropDownMonth.click();
        this.selectMonth.click();
        this.dropDownYear.click();
        this.selectYear.click();
    }
};
module.exports = new HomePage();