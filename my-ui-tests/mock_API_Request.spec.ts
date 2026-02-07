import {test, expect} from "@playwright/test";

test("Mock API request in Playwright", async ({page}) => {

    // Mock API Request
    await page.route("*/**/api/v1/fruits", async route => {
        const json = [
            { name: "Typescript", id: 12 },
            { name: "Javascript", id: 13 },
            { name: "Java", id: 14 },
            { name: "Python", id: 15 },
            { name: "C#", id: 16 },
        ];
        await route.fulfill({json});

    })

    // Go to URL
    await page.goto("https://demo.playwright.dev/api-mocking/");

    // Assertions
    await expect(page.getByText("Typescript")).toBeVisible();
    await expect(page.getByText("C#")).toBeVisible();
    await expect(page.getByText("Python")).toBeVisible();
    await expect(page.getByText("Java").nth(1)).toBeVisible();

})