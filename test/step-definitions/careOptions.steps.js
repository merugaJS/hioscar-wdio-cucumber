import { Given, When, Then } from '@wdio/cucumber-framework';

import CareOptionsPage from "../pageobjects/CareOptions/careOptions.page.js";

When(/^I select a network for search criteria$/, async function (table) {
    let searchInfo = table.hashes()
    await CareOptionsPage.selectNetworkUsingOptions(searchInfo[0].year,
        searchInfo[0].access, searchInfo[0].network, searchInfo[0].state)
});