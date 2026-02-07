import { test, expect, Browser, Page, Locator, BrowserContext } from "@playwright/test";
import { webkit, chromium, firefox } from "playwright";

// *** These kinda behaviour can be used for testing chatting application or RBAC applications  ***//

/* A browser context is like a separate browser profile.
Each context has:
    its own cookies
    its own localStorage / sessionStorage
    its own cache
    its own permissions 
*/

test("Login Test", async () => {

    const browser: Browser = await firefox.launch({ headless: false });
    
    // Browser Context 1 Properties
    const browserContext_1: BrowserContext = await browser.newContext();
    const page1: Page = await browserContext_1.newPage();

    // Browser Context 2 Properties
    const browserContext_2: BrowserContext = await browser.newContext();
    const page2: Page = await browserContext_2.newPage();

    // browser 1
    await page1.goto("https://naveenautomationlabs.com/opencart/index.php?route=account/login");
    const emailId1: Locator = page1.locator("#input-email");
    const password1: Locator = page1.getByRole("textbox", { name: "password" });
    const button: Locator = page1.locator("input[type='submit']");

    await emailId1.fill("varun.bajpai@nagarro.com");
    await password1.fill("jordan00");
    await button.click();


    // browser 2
    await page2.goto("https://naveenautomationlabs.com/opencart/index.php?route=account/login");
    const emailId2: Locator = page1.locator("#input-email");
    const password2: Locator = page1.getByRole("textbox", { name: "password" });

    await emailId2.fill("da21vidg72.joe732@gmail.com");
    await password2.fill("joe@12823012");
    await button.click();

    await browserContext_1.close();
    await browserContext_2.close();

    await browser.close();
})