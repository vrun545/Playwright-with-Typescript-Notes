import {test, Locator, expect} from "@playwright/test";


test("Tyep Sequentionally User Input on SearchBar", async({page}) => {

    await page.goto("https://www.flipkart.com/");

    const searchBar: Locator = page.locator("//input[@placeholder='Search for Products, Brands and More']");

    await searchBar.pressSequentially("Macbook", {delay: 500});

    await page.waitForTimeout(2000);

});