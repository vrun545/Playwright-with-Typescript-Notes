import {test, expect, Browser, Page, Locator} from "@playwright/test";
import { timeStamp } from "node:console";
import {chromium, firefox, webkit} from "playwright";

test("Verify Register functionality", async() => {

   const browser: Browser = await chromium.launch({headless: false});
   const page: Page = await browser.newPage();

   await page.goto("https://naveenautomationlabs.com/opencart/index.php?route=account/register");
   
   const firstName: Locator = page.getByPlaceholder("First Name");
   const lastName: Locator = page.getByPlaceholder("Last Name");
   const email: Locator = page.locator("#input-email");
   const phnNum: Locator = page.locator("#input-telephone");
   const pass: Locator = page.locator("#input-password");
   const conPass: Locator = page.locator("#input-confirm"); 
   const checkBox: Locator = page.locator("//input[@type='checkbox']");
   const submit: Locator = page.locator("//input[@type='submit']");

   await firstName.fill("David232");
   await lastName.fill("Joe212");
   await email.fill("da21vidg72.joe732@gmail.com");
   await phnNum.fill("1234567809");
   await pass.fill("joe@12823012");
   await conPass.fill("joe@12823012");
   await checkBox.click();
   await submit.click();

   const title: Locator = page.locator("h1");
   const heading: string | null = await title.textContent();

   await page.screenshot({path:`screenshots/Dashboard_${Date.now()}.png`});
   expect(heading).toEqual("Your Account Has Been Created!");

   await browser.close();

})

