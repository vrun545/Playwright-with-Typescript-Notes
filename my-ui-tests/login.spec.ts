import { test, expect, Browser, Page, Locator } from "@playwright/test";
import { webkit, chromium, firefox } from "playwright";


test("Login Test", async () => {

    const browser: Browser = await firefox.launch({ headless: false });
    const page: Page = await browser.newPage();

    await page.goto("https://naveenautomationlabs.com/opencart/index.php?route=account/login");

    const emailId: Locator = page.locator("#input-email");
    const password: Locator = page.getByRole("textbox", { name: "password" });
    const button: Locator = page.locator("input[type='submit']");

    await emailId.fill("varun.bajpai@nagarro.com");
    await password.fill("jordan00");
    await button.click();

    const title: string  = await page.title();
    console.log("Home Page title is: ", title);

    await page.screenshot({path: "homepage.png"});

    expect(title).toEqual("My Account");

    await browser.close();

})