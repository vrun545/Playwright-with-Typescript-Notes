import {test, expect, Locator, Browser} from "@playwright/test";

test("handle custome dates in Date picker", async({page}) => {

    await page.goto("https://testautomationpractice.blogspot.com/");

    const year: string = '2021';
    const month: string = 'March';
    const date: string = "20";

    await page.click("#datepicker");

    while(true) {

        const currentYear: string | null = await page.locator(".ui-datepicker-year").textContent();
        const currentMonth: string | null = await page.locator(".ui-datepicker-month").textContent();

        if(currentMonth === month && currentYear === year){
            break;
        }
        await page.locator("[title='Prev']").click();
    }

    // date selection - without loop
    await page.click(`//a[@class='ui-state-default'][text()='${date}']`);

    await page.waitForTimeout(4000);

});

test("Date Picker sending values directly", async({page}) => {

   await page.goto("https://jqueryui.com/datepicker/"); 

   const frameElement = page.frameLocator(".demo-frame");

   const date: Locator = frameElement.locator("#datepicker").first();

   // send data as input
   await date.fill("21/12/2012");

   // selecting today's date   
   const todayDate: Locator = frameElement.locator(".ui-datepicker-today");
   await todayDate.click();  

   await page.waitForTimeout(2000);

});