class HeaderSection {
    get titleLogo() {return $('//*[text()="Oscar home" and @id="mainNavLogo"]')}
    get findDoctorButton() {return $('//span[text()="Find a Doctor"]')}
}

export default new HeaderSection()