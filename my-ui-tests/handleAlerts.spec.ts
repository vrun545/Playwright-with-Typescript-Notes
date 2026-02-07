import { test, expect, Locator } from "@playwright/test";

// In Alerts first we have to start the listener and then we trigger the action

// Simple Alert
test("Simple alert", async ({ page }) => {
    await page.goto("https://letcode.in/alert");

    const simpleALert: Locator = page.locator("#accept");
    page.on("dialog", async dialog => {
        console.log("Message: " + dialog.message());
        console.log("Default Value: " + dialog.defaultValue());
        console.log("Type: " + dialog.type());
        await dialog.accept();
    });
    await simpleALert.click();
});


// Confirm Alert
test("Confirm alert", async ({ page }) => {
    await page.goto("https://letcode.in/alert");

    const confirmALert: Locator = page.locator("#confirm");
    page.on("dialog", async dialog => {
        console.log("Message: " + dialog.message());
        console.log("Default Value: " + dialog.defaultValue());
        console.log("Type: " + dialog.type());
        await dialog.dismiss();
    });
    await confirmALert.click();
});


// Prompt Alert
test("Prompt alert", async ({ page }) => {
    await page.goto("https://letcode.in/alert");

    const promptALert: Locator = page.locator("#prompt");
    page.on("dialog", async dialog => {
        console.log("Message: " + dialog.message());
        console.log("Default Value: " + dialog.defaultValue());
        console.log("Type: " + dialog.type());
        await dialog.accept("Hello, Jordan !!!");
    });
    await promptALert.click();
});


// Modern Alert
test("Modern alert", async ({ page }) => {
    await page.goto("https://letcode.in/alert");

    const modernALert: Locator = page.locator("#modern");
    await modernALert.click();
    const closeBtn: Locator = page.locator("//button[@aria-label='close']");
    await closeBtn.click();
    
});

