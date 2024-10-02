describe('licating elements', () => {
    beforeEach(async() => {
        await browser.maximizeWindow();
    });

    it('$ - locate element', async() => {
        await browser.url("https://www.selectors.webdriveruniversity.com/");

        await browser.$("//a[@href='#portfolio']").click();
        await browser.pause(3000);
        
        const webdriverButton = await $('[data-target="#portfolioModal1"]');
        await webdriverButton.click();
        await browser.pause(3000);

    });
});