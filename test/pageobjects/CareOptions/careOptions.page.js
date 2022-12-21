import Page from '../page.js';

import SelectNetworkSection from "./sections/selectNetwork.section.js";
class CareOptionsPage extends Page{

    get searchNetworkButton() {return $('//span[text()=\'Search network\']')}
    get placeHolder() {return $('//h2[text()=\'Find your nearest in-network provider\']')}


    waitForLoading(){
        return this.placeHolder.waitForDisplayed()
    }
    async selectNetworkUsingOptions(year, access, network, state){
        await this.waitForLoading()
        await this.searchNetworkButton.click()
        await SelectNetworkSection.selectYear(year)
        await SelectNetworkSection.selectCoverageAccess(access)
        await SelectNetworkSection.selectNetworkPartner(network)
        await SelectNetworkSection.selectCoverageArea(state)
        await SelectNetworkSection.clickContinue()
    }
}

export default new CareOptionsPage()