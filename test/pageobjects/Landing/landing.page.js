import Page from '../page.js';

import HeaderSection from "./sections/header.section.js";


class LandingPage extends Page {

    get placeHolder() {
        return $('//h1[text()=\'Health insurance that actually works for you\']')
    }

    async waitUntilLoading() {
        await this.placeHolder.waitForDisplayed()
        await browser.waitUntil(async () => await browser.getTitle() === "Oscar | Health insurance that actually works for you")
    }

    // Functions
    async tapOnDoctor() {
        await HeaderSection.titleLogo.waitForDisplayed()
        await HeaderSection.findDoctorButton.click()
    }
}


export default new LandingPage();