import { Given, When, Then } from '@wdio/cucumber-framework';
import LandingPage from "../pageobjects/Landing/landing.page.js";

Given(/^I am on the landing page$/, async () => {
    await LandingPage.open()
    await LandingPage.waitUntilLoading()
});

When(/^I click on find doctor to search$/, async () => {
    await LandingPage.tapOnDoctor()
});
