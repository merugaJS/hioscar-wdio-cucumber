class SearchBarSection{
    get searchBar() {return $('.h-3sBzAdelUjeI6Qy060s-U-.o-container')}

    get searchField() {return $('.h-1EeYl6NhSh6C4OfRl2w7mq.o-input')}
    get allTypesButton() {return $('//span[text()=\'All types\']')}
    get providerButton() {return $('//span[text()=\'Providers\']')}
    get facilitiesButton() {return $('//span[text()=\'Facilities\']')}
    get drugsButton() {return $('//span[text()=\'Drugs\']')}
    get resultsList() {return $$('//a[contains(@class,"h-CbHcqk580meKCwsgkVhZ2 o-item")]')}
    seeAllResultsLink(searchKey) {return $(`//span[contains(text(),"See all provider results for ‘${searchKey}’")]`)}
    get commonSearchResults() {return $('//h4/span[text()=\'Common searches\']')}

    get noResultsText() {return $('//*[text()="No results. Try another search."]')}
    waitUntilLoaded(){
        return this.searchBar.waitForDisplayed()
    }
}

export default new SearchBarSection()