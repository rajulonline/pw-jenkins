import { test, expect } from '@playwright/test';

test('has title', async ({ page }) => {
  await page.goto('https://playwright.dev/');
const gittoken = process.env.BEARER_TOKEN;
console.log(`This is the gittoken ${gittoken}`);
  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle(/Tamil/);
  await expect(page).toHaveURL(/playwright/);
});

test('get started link', async ({ page }) => {
  await page.goto('https://playwright.dev/');

  // Click the get started link.
  await page.getByRole('link', { name: 'Get started' }).click();

  // Expects page to have a heading with the name of Installation.
  await expect(page.getByRole('heading', { name: 'Installation' })).toBeVisible();
});
