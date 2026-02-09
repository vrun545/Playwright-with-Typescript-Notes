import { test, expect, chromium, devices } from '@playwright/test';

test('Mobile web testing with tap, scroll and swipe', async () => {

  // Launch browser
  const browser = await chromium.launch();

  // Create mobile context (device defined inside test)
  const context = await browser.newContext({
    ...devices['iPhone 13'],
  });

  const page = await context.newPage();

  // Open real website
  await page.goto('https://playwright.dev');

  // -------------------------------
  // TAP (mobile tap)
  // -------------------------------
  await page
    .getByRole('button', { name: 'Toggle navigation bar' })
    .tap();

  await page
    .getByRole('link', { name: 'Docs' })
    .tap();

  // Assert Docs page loaded (stable locator)
  await expect(
    page.getByRole('heading', { name: 'Installation' })
  ).toBeVisible();

  // -------------------------------
  // VERTICAL SWIPE / SCROLL
  // -------------------------------
  await page.mouse.wheel(0, 800);

  // FIXED STRICT MODE ISSUE HERE
  await expect(
    page.getByRole('heading', { name: 'Installing Playwright' })
  ).toBeVisible();

  // -------------------------------
  // HORIZONTAL SWIPE (gesture)
  // -------------------------------
  await page.goBack();

  const viewport = page.viewportSize()!;
  const startX = viewport.width * 0.8;
  const endX = viewport.width * 0.2;
  const centerY = viewport.height / 2;

  await page.mouse.move(startX, centerY);
  await page.mouse.down();
  await page.mouse.move(endX, centerY, { steps: 10 });
  await page.mouse.up();

  // Final assertion
  await expect(
    page.getByText('Playwright enables reliable end-to-end testing')
  ).toBeVisible();

  // Cleanup
  await context.close();
  await browser.close();
});
