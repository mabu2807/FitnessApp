import { expect, test } from '@playwright/test';

/*test('Homelogo button works', async ({ page }) => {
	await page.goto('/category');
	await page.getByTitle('Fitnesshub Logo').click();
	await expect(page).toHaveURL('/');
});*/

test('Home button works', async ({ page }) => {
	await page.goto('/category');
	await page.getByRole('link', { name: 'Home' }).click();
	await expect(page).toHaveURL('/');
});

test('Workouts button works', async ({ page }) => {
	await page.goto('/');
	await page.getByRole('link', { name: 'Workouts' }).click();
	await expect(page).toHaveURL('/category');
});

test('Progress button works', async ({ page }) => {
	await page.goto('/');
	await page.getByRole('link', { name: 'Progress' }).click();
	await expect(page).toHaveURL('/progress');
});

/*NEEDS CORRECT LABELING OF BUTTON
test('Nav. Bar: Ernährungstagebuch button works', async ({ page }) => {
	await page.goto('/');
	await page.getByRole('link', { name: 'Ernährungsplan' }).click();
	await expect(page).toHaveURL('/nutrition');
});*/