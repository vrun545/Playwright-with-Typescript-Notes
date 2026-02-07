import {test, expect, Locator, Browser} from "@playwright/test";


test("Automating Date Picker", async({page}) => {

   await page.goto("https://jqueryui.com/datepicker/"); 

   const frameElement = page.frameLocator(".demo-frame");

   const date: Locator = frameElement.locator("#datepicker").first();

   // send data as input
   await date.fill("21/12/2012");

   // selecting today's date   
   const todayDate: Locator = frameElement.locator(".ui-datepicker-today");
   await todayDate.click();

   // custom date value
   const customDate: Locator = frameElement.locator(".ui-datepicker-today > a");
   await customDate.click();    

   await page.waitForTimeout(2000);

});