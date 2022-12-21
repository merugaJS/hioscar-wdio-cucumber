// Overwrite original click command to wait for element and click
browser.overwriteCommand('click', async function (origClickFunction, clickOptions) {
    try {
        await this.waitForClickable()
        await origClickFunction(clickOptions)
        return null
    } catch (err) {
        await console.log(err.message)
        if (err.message.includes('not clickable')) {
            await this.waitForDisplayed()
            await origClickFunction(clickOptions)
        }
        throw err;
    }
}, true)