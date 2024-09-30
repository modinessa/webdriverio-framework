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
        const submitButton = await $('//input[@value="SUBMIT"]');
        
        await firstName.setValue("Joe");
        await lastName.setValue("Smith");
        await emailAddress.setValue("js@gmail.com");
        await message.setValue("Hi! Nice to meet you!");
        await submitButton.click();

        //Success message
        const successfulSubmitionHeader = $('#contact_reply > h1');
        await expect(successfulSubmitionHeader).toHaveText('Thank You for your Message!');
        await browser.pause(5000);
        
    });
    
    it.only('invalid submition - dont submit all information', async() => {
        await browser.url('/Contact-Us/contactus.html')
        //first name
        const firstName = await $('//*[@name="first_name"]');
        await firstName.setValue("Joe");
        //last name
        const lastName = await $('//*[@name="last_name"]');
        await lastName.setValue("Smith");
        //message
        const message = await $('//*[@name="message"]');
        await message.setValue("Hi! Nice to meet you!");
        
        //submit button
        const submitButton = await $('//input[@value="SUBMIT"]');
        await submitButton.click();
        

        //Fail submition
        const errorMessage = $('body');
        await expect(errorMessage).toHaveTextContaining(['Error: all fields are required', 'Error: Invalid email address']);
    });
});