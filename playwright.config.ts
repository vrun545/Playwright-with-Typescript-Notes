import { defineConfig, devices } from "@playwright/test";

export default defineConfig({
  fullyParallel: false,

  workers: process.env.CI ? 1 : undefined,

  forbidOnly: !!process.env.CI,
  retries: process.env.CI ? 2 : 0,

  reporter: [
    ["html", { open: process.env.CI ? "never" : "on-failure" }]
  ],

  use: {
    headless: true,
    actionTimeout: 30_000,
    navigationTimeout: 30_000
  },

  projects: [
    // UI - Chromium
    {
      name: "ui-chromium",
      testDir: "./my-ui-tests",
      use: {
        ...devices["Desktop Chrome"],
        screenshot: "only-on-failure",
        video: "retain-on-failure",
        trace: "retain-on-failure"
      }
    },

    // UI - Firefox
    {
      name: "ui-firefox",
      testDir: "./my-ui-tests",
      use: {
        ...devices["Desktop Firefox"],
        screenshot: "only-on-failure",
        video: "retain-on-failure",
        trace: "retain-on-failure"
      }
    },

    // UI - WebKit (Safari)
    {
      name: "ui-webkit",
      testDir: "./my-ui-tests",
      use: {
        ...devices["Desktop Safari"],
        screenshot: "only-on-failure",
        video: "retain-on-failure",
        trace: "retain-on-failure"
      }
    },

    // API Tests
    {
      name: "api-tests",
      testDir: "./api-tests",
      use: {
        baseURL: process.env.BASE_URL || "https://restful-booker.herokuapp.com"
      }
    },

    {
      name: "api-tests-framework",
      testDir: "./api-tests-framework",
      use: {
        baseURL: process.env.BASE_URL || "https://restful-booker.herokuapp.com"
      }
    }
  ]
});
