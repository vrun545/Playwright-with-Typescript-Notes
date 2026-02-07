import { test, expect, Locator } from "@playwright/test";
import { chromium, firefox } from "playwright";

test("Handling New Tab", async ({ page }) => {

    await page.goto("https://demoqa.com/browser-windows");

    const newTab: Locator = page.locator("#tabButton");

    // Action that opens multiple tabs
    await Promise.all([
        page.context().waitForEvent("page"),
        page.locator("#tabButton").click()
    ]);

     // Get all opened tabs
    const pages = page.context().pages();

    // to handle multiple tabs and focusing on tab having particular tab
    for (const p of pages) {
        if (await p.title() === "This is a sample page") {
            await p.bringToFront();
            break;
        }
    }
    

});