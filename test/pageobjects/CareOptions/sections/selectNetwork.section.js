class SelectNetworkSection{

    get placeHolder() {return $('//span[text()=\'Select a network\']')}
    get coverageYearDropDown() {return $('(//h3[text()=\'Coverage year\']/following-sibling::div//div[@class=\'Dropdown_visibleContent__NGHUm\'])[1]')}
    get coverageAccessDropDown() {return $('(//h3[text()=\'Coverage access\']/following-sibling::div//div[@class=\'Dropdown_visibleContent__NGHUm\'])[1]')}
    get networkPartnerDropDown() {return $('(//h3[text()=\'Network partner\']/following-sibling::div//div[@class=\'Dropdown_visibleContent__NGHUm\'])[1]')}
    get coverageAreaDropDown() {return $('(//h3[text()=\'Coverage area\']/following-sibling::div//div[@class=\'Dropdown_visibleContent__NGHUm\'])[1]')}
    genericTextLocator(value) {return $(`//div[contains(@aria-label,'${value}')]`)}
    get continueButton() {return $('//button[contains(@class,"NetworkSelector_buttonSubmit__l3NsD")]')}

    // Functions
    async selectYear(year){
        await this.placeHolder.waitForDisplayed()
        await this.coverageYearDropDown.click()
        await this.genericTextLocator(year).click()
    }
    async selectCoverageAccess(access){
        await this.coverageAccessDropDown.click()
        await this.genericTextLocator(access).click()
    }

    async selectNetworkPartner(network){
        await this.networkPartnerDropDown.click()
        await this.genericTextLocator(network).click()
    }

    async selectCoverageArea(state){
        await this.coverageAreaDropDown.click()
        await this.genericTextLocator(state).click()
    }

    clickContinue(){
        return this.continueButton.click()
    }
}

export default new SelectNetworkSection()