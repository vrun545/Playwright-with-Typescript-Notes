import {test, expect, Locator} from "@playwright/test";

test("Download files", async ({ page }) => {

  await page.goto("https://the-internet.herokuapp.com/download");

  const fileLink: Locator = page.locator("//a[text()='file.json']");

  const [downloadedFile] = await Promise.all([
    page.waitForEvent("download"),
    fileLink.click()
  ]);

  const fileName = downloadedFile.suggestedFilename();
  await downloadedFile.saveAs(fileName)
  console.log(fileName);

});
