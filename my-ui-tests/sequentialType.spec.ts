import {test, Locator, expect} from "@playwright/test";


test("Type Sequentionally User Input on Search-Bar", async({page}) => {

    await page.goto("https://www.flipkart.com/");

    const searchBar: Locator = page.locator("//input[@placeholder='Search for Products, Brands and More']");

    await searchBar.pressSequentially("Macbook", {delay: 500});

    await page.waitForTimeout(2000);

});