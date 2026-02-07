import {test, expect, Locator} from "@playwright/test";

// Shadow DOM
test("Shadow DOM on Chrome Downloads page", async({page}) => {

    await page.goto("chrome://downloads/");

    const searchBox: Locator = page.locator("#searchInput");
    await searchBox.fill("Varun Bajpai");

    await page.waitForTimeout(4000);


});