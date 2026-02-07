import { defineConfig, devices } from '@playwright/test';

export default defineConfig({
  fullyParallel: true,
  workers: 1,
  forbidOnly: !!process.env.CI,
  retries: process.env.CI ? 2 : 0,
  reporter: 'html',

  projects: [

    // UI - Chromium
    {
      name: 'ui-chromium',
      testDir: './my-ui-tests',
      use: {
        ...devices['Desktop Chrome'],
        screenshot: 'on',
        video: 'retain-on-failure',
        trace: 'retain-on-failure',
      },
    },

    // UI - Firefox
    // {
    //   name: 'ui-firefox',
    //   testDir: './my-ui-tests',
    //   use: {
    //     ...devices['Desktop Firefox'],
    //     screenshot: 'on',
    //     video: 'retain-on-failure',
    //     trace: 'retain-on-failure',
    //   },
    // },

    // UI - WebKit
    // {
    //   name: 'ui-webkit',
    //   testDir: './my-ui-tests',
    //   use: {
    //     ...devices['Desktop Safari'],
    //     screenshot: 'on',
    //     video: 'retain-on-failure',
    //     trace: 'retain-on-failure',
    //   },
    // },

    // API Tests
    {
      name: 'api-tests',
      testDir: './api-tests',
      use: {
        baseURL: 'https://restful-booker.herokuapp.com',
      },
    },
    {
      name: 'api-tests-framework',
      testDir: './api-tests-framework',
      use: {
        baseURL: 'https://restful-booker.herokuapp.com',
      },
    },
  ],
});
