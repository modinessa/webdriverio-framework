describe('licating elements', () => {
    beforeEach(async() => {
        await browser.maximizeWindow();
        await browser.url("https://www.selectors.webdriveruniversity.com/");
    });

    it('$ - locate element', async() => {
        await browser.$("//a[@href='#portfolio']").click();
        // await browser.pause(3000);
        
        const webdriverButton = await $('[data-target="#portfolioModal1"]');
        await webdriverButton.click();
        // await browser.pause(3000);
    });

    it('$$ - locate elements', async() => {
        const expectedTitles = [
            "#",
            "First",
            "Last",
            "Handle",
            "1",
            "2",
            "3",
            "Firstname",
            "Lastname",
            "Age"
        ]
        const actualTitles = [];
        const tableHeaderTitles = await $$('//table//th');
        for(const title of tableHeaderTitles) {
            // console.log(await title.getText());
            actualTitles.push(await title.getText());
        }

        console.log(actualTitles);

        expect(expectedTitles).toEqual(actualTitles);
    });
});