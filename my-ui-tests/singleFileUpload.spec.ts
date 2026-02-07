import {test, expect, Locator} from "@playwright/test";

test("Upload Single File", async({page}) => {

        await page.goto("https://cgi-lib.berkeley.edu/ex/fup.html");

        // single upload
        const fileUploader: Locator = page.locator("input[name='upfile']");
        await fileUploader.setInputFiles("C:/Users/varunbajpai/Videos/New folder/1.png");

        // deselct files
        await fileUploader.setInputFiles([]);

    await page.waitForTimeout(2000);
});
