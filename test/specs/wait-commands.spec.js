describe('wait commands - examples', () => {
    beforeEach(async() => {
        await browser.maximizeWindow();
        await browser.url("/Ajax-Loader/index.html");
    });

    it('pause command', async() => {
        const clickMe_Button = await $("#button1");

        await browser.pause(5000);
        await clickMe_Button.click();
        await browser.pause(1500);
    });

    it('waitForClickable', async() => {
        const clickMe_Button = await $("#button1");
        
        await clickMe_Button.waitForClickable();
        await clickMe_Button.waitForClickable();
        await clickMe_Button.click();
        await browser.pause(1500);
    });
    
    it('waitForDisplay', async() => {
        const clickMe_Button = await $("#button1");
        
        await clickMe_Button.waitForDisplayed();
    });
    
    it('waitForExist', async() => {
        const clickMe_Button = await $("#button1");
        await clickMe_Button.waitForExist();
        await clickMe_Button.click();
        
    });

    it('waitUntil', async() => {
        await browser.url("/Accordion/index.html");
        const loadingMessage = await $("#text-appear-box");
        await loadingMessage.waitUntil(async function() {
            return (await this.getText()) === "LOADING COMPLETE."
        },
    {
        timeout: 15000,
        timeoutMsg: "expected text to be different after 15 seconds"
    })
        
    });
});