import Page from '../page.js';
import SearchBarSection from "./sections/searchBar.section.js";

class FindCarePage extends Page {
    get placeHolder() {
        return $('//span[text()=\'Search in-network providers, facilities, and drugs\']')
    }

    async waitUntilLoading() {
        await this.placeHolder.waitForDisplayed()
        await SearchBarSection.searchBar.waitForDisplayed()
    }

    isSearchLoaded() {
        return SearchBarSection.searchBar.isDisplayed()
    }

    clickSearchBar() {
        return SearchBarSection.searchBar.click()
    }

    async enterSearchKey(searchKey) {
        await SearchBarSection.searchField.waitForDisplayed()
        await SearchBarSection.searchField.setValue(searchKey)
    }

    numberOfResultsShown() {
        return SearchBarSection.resultsList.length
    }

    clickProviders() {
        return SearchBarSection.providerButton.click()
    }

    clickDrugs() {
        return SearchBarSection.drugsButton.click()
    }

    clickFacilities() {
        return SearchBarSection.facilitiesButton.click()
    }

    clickAllTypes() {
        return SearchBarSection.allTypesButton.click()
    }

    waitUntilCommonResultDisappear(){
        return SearchBarSection.commonSearchResults.waitForDisplayed({
            reverse: true
        })
    }

    isNoResultTextPresent(){
        return SearchBarSection.noResultsText.waitForDisplayed()
    }
}

export default new FindCarePage()