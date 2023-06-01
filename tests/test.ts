import { expect, test } from '@playwright/test';

//Tests For Navbar
test('Nav. Bar: Workouts button works', async ({ page }) => {
	await page.goto('/');
	await page.getByRole('link', { name: 'Workouts' }).click();
	await expect(page).toHaveURL('/kategorie');
});

test('Nav. Bar: Progress button works', async ({ page }) => {
	await page.goto('/');
	await page.getByRole('link', { name: 'Progress' }).click();
	await expect(page).toHaveURL('/progress');
});

/*test('Nav. Bar: Settings button works', async ({ page }) => {
	await page.goto('/');
	await page.getByRole('link', { name: 'Settings'}).click()
	await expect(page).toHaveURL('/settings');
});*/

test('Nav. Bar: LogIn button works', async ({ page }) => {
	await page.goto('/');
	await page.getByRole('link', { name: 'Log In' }).click();
	await expect(page).toHaveURL('/login');
});

//Tests for Index Page
test('Index Page: has expected Title', async ({ page }) => {
	await page.goto('/');
	await expect(page).toHaveTitle('Fitness Tracker');
});

test('Index Page: GetStarted button is visible', async ({ page }) => {
	await page.goto('/');
	await expect(page.getByRole('link', { name: 'Get Started' })).toBeVisible();
});

test('Index Page: GetStarted button works', async ({ page }) => {
	await page.goto('/');
	await page.getByRole('link', { name: 'Get Started' }).click();
	await expect(page).toHaveURL('/getStarted');
});

test('Index Page: course section is visible', async ({ page }) => {
	await page.goto('/');
	await expect(page.getByRole('heading', { name: 'Unsere Kurse' })).toBeVisible();
});

test('Index Page: headTestimonals section is visible', async ({ page }) => {
	await page.goto('/');
	await expect(page.getByRole('heading', { name: 'Was unsere Kunden sagen' })).toBeVisible();
});

test('Index Page: Contact section is visible', async ({ page }) => {
	await page.goto('/');
	await expect(page.getByRole('heading', { name: 'Kontaktieren Sie uns' })).toBeVisible();
});

test('Index Page: Footer section is visible', async ({ page }) => {
	await page.goto('/');
	await expect(page.locator('.footer')).toBeVisible();
});
