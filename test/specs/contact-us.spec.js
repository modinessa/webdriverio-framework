describe('webdriveruniversity - contact us page', () => {
    beforeEach(async () => {
        await browser.maximizeWindow();
    });
    it('valid submission - submit all information', async() => {
        await browser.url('/Contact-Us/contactus.html')
        //first name
        const firstName = await $('//*[@name="first_name"]');
        //last name
        const lastName = await $('//*[@name="last_name"]');
        //email address
        const emailAddress = await $('//*[@name="email"]');
        //message
        const message = await $('//*[@name="message"]');

        //submit button
        
        await firstName.setValue("Joe");
        await lastName.setValue("Smith");
        await emailAddress.setValue("js@gmail.com");
        await message.setValue("Hi! Nice to meet you!");
        await browser.pause(5000);
        
    });
    
    it.skip('invalid submition - dont submit all information', () => {
        //first name
        //last name
        //email address
        //message
        //submit button
    });
});