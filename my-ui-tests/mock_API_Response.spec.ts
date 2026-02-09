import {test, expect} from "@playwright/test";

test("Mock API request in Playwright", async ({page}) => {

    // Mock API Response
    await page.route("*/**/api/v1/fruits", async route => {

        const response = await route.fetch();
        const json = await response.json();
        json.push({name: "Typescript", id:21});
        json.push({name: "Javascript", id:22});
        json.push({name: "Java", id:23});
        json.push({name: "Python", id:24});
        json.push({name: "C#", id:25});

        await route.fulfill({response, json});

    })

    // Go to URL
    await page.goto("https://demo.playwright.dev/api-mocking/");

    // Assertions
    await expect(page.getByText("Typescript")).toBeVisible();
    await expect(page.getByText("C#")).toBeVisible();
    await expect(page.getByText("Python")).toBeVisible();
    await expect(page.getByText("Java").nth(1)).toBeVisible();

})