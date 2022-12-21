import {Given, When, Then} from '@wdio/cucumber-framework';
import {expect, assert} from "chai";

import FindCarePage from "../pageobjects/FindCare/findCare.page.js";

When(/^I verify I land on Find care page$/, async function () {
    await FindCarePage.waitUntilLoading()
    expect(await FindCarePage.isSearchLoaded(), "Find Care page not loaded").to.be.true
});

Then(/^I verify (.*) search key (.*) is (.*)$/, async function (type, searchKey, isValid) {

    await FindCarePage.clickSearchBar()
    switch (type) {
        case 'Providers':
            await FindCarePage.clickProviders()
            break;
        case 'Facilities':
            await FindCarePage.clickFacilities()
            break;
        case 'Drugs':
            await FindCarePage.clickDrugs()
            break;
        case 'All':
            await FindCarePage.clickAllTypes()
            break;
    }
    await FindCarePage.enterSearchKey(searchKey)
    await FindCarePage.waitUntilCommonResultDisappear()
    const results = await FindCarePage.numberOfResultsShown()
    if(JSON.parse(isValid)){
        assert.isAbove(results, 0, `No search results found for search key ${searchKey}`);
    }else {
        expect(await FindCarePage.isNoResultTextPresent()).to.be.true
    }

});