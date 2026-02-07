import { test, expect, Locator } from "@playwright/test";

test("Validating Drag and Drop Functionality", async ({ page }) => {

    await page.goto("https://jqueryui.com/droppable/");

    // using 'frameLocator' because source and target inside a frame
    const frame = page.frameLocator(".demo-frame");

    // Source Element
    const source: Locator = frame.locator("div#draggable");

    // Target Element
    const target: Locator = frame.locator("div#droppable");

    // Drag and Drop action
    await source.dragTo(target);

    await page.waitForTimeout(3000);

});