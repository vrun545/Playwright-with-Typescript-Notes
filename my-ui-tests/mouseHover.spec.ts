import {test, expect} from "@playwright/test";

test("Handling Mouse Hover Effect", async ({page}) => {

    await page.goto("https://www.spicejet.com/");
    await page.getByText("Add-ons").first().hover();

});