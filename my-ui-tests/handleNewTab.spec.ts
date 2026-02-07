import { test, expect, Locator } from "@playwright/test";
import { chromium, firefox } from "playwright";

test("Handling New Tab", async ({ page }) => {

    await page.goto("https://demoqa.com/browser-windows");

    const newTab: Locator = page.locator("#tabButton");

    // When we're expecting only one tab
    const [newPage] = await Promise.all([
        page.context().waitForEvent("page"),
        newTab.click()
    ]);
    await newPage.waitForLoadState();

    // now parent tab on focus
    page.bringToFront();


});