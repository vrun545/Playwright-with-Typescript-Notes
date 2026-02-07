import {test, expect, Locator} from "@playwright/test";

test("Handling Mouse Actions", async({page}) => {

    await page.goto("https://demo.guru99.com/test/simple_context_menu.html");

    // double click
    const button1:Locator = page.getByText("Double-Click Me To See Alert");
    await button1.dblclick();

    // right click / context click
    const button2: Locator = page.locator("//span[text()='right click me']");
    await button2.click({button: "right"});

    // Shift + click
    await page.goto("https://the-internet.herokuapp.com/shifting_content");
    await page.getByText("Example 1: Menu Element").click({modifiers: ["Shift"]});

    // Mouse Hover
    await page.bringToFront();
    await page.goto("https://www.spicejet.com/");
    const menu: Locator = page.locator("//div[normalize-space()='Add-ons']");
    await menu.first().hover();
    const subMenu = page.locator("//div[normalize-space()='Visa Services']");
    await subMenu.nth(2).click();


    await page.waitForTimeout(3000);

});