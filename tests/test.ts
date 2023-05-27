import { expect, test } from '@playwright/test';


test('Index Page: has expected Title', async ({ page }) => {
	await page.goto('/');
	await expect(page).toHaveTitle("Fitness Tracker");
});

test('Index Page: GetStarted button is visible', async ({ page }) => {
	await page.goto('/');
	await expect(page.getByRole('link', { name: 'Get Started'})).toBeVisible();
});

test('Index Page: GetStarted button works', async ({ page }) => {
	await page.goto('/');
	await page.getByRole('link', { name: 'Get Started'}).click();
	await expect(page).toHaveURL("/getStarted");
});

test('Index Page: course section is visible', async ({ page }) => {
	await page.goto('/');
	await expect(page.getByRole('heading', { name: 'Unsere Kurse'})).toBeVisible();
});