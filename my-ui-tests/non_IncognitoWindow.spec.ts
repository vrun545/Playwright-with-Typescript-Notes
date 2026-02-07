import {test, Browser, BrowserContext, Page} from "@playwright/test";
import {chromium, firefox, webkit} from "playwright";

test("Opening Normal Window", async() => {

    const browser: BrowserContext = await chromium.launchPersistentContext("", {headless: false, channel: "chrome"});
    // const page: Page = await browser.newPage();

    const pages = browser.pages();
    const page: Page = pages[0];
    
    await page.goto("https://www.google.com/");

});

