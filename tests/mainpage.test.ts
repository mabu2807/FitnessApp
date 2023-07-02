// import { expect, test } from '@playwright/test';

// test('GetStarted button works', async ({ page }) => {
// 	await page.goto('/');
// 	await page.getByRole('link', { name: 'Get Started' }).click();
// 	await expect(page).toHaveURL('/getStarted');
// });

// test('Unsere Kurse is visible', async ({ page }) => {
// 	await page.goto('/');
// 	await expect(page.getByText('Unsere Kurse')).toBeVisible();
// });

// test('Was unsere Kunden sagen is visible', async ({ page }) => {
// 	await page.goto('/');
// 	await expect(page.getByText('Was unsere Kunden sagen')).toBeVisible();
// });

// test('Next Review Button works', async ({ page }) => {
//     await page.goto('/');
//     const firstReview = await page.getByAltText(`[alt*="Kunde"]`);
//     await page.getByTitle('nextReviewButton').click();
//     const secondReview = await page.getByAltText(`[alt*="Kunde"]`);
//     expect(firstReview).not.toBe(secondReview);
// });

// test('Last Review Button works', async ({ page }) => {
//     await page.goto('/');
//     const firstReview = await page.getByAltText(`[alt*="Kunde"]`);
//     await page.getByTitle('lastReviewButton').click();
//     const secondReview = await page.getByAltText(`[alt*="Kunde"]`);
//     expect(firstReview).not.toBe(secondReview);
// });

// test('Kontaktieren Sie uns is visible', async ({ page }) => {
// 	await page.goto('/');
// 	await expect(page.getByText('Kontaktieren Sie uns')).toBeVisible();
// });

// test('Email verification in Contact works', async ({ page }) => {
//     await page.goto('/');
//     await page.getByPlaceholder('E-Mail-Adresse').fill('muchacho');
//     await page.getByPlaceholder('Nachricht').fill('muchacho kann nicht schreiben');
//     await page.getByRole('button', { name: 'Senden' }).click();
//     await expect(page.getByText('Das ist keine valide Email, Muchacho')).toBeVisible;
// });

// test('Fields filled check in Contact works for no E-Mail', async ({ page }) => {
//     await page.goto('/');
//     await page.getByPlaceholder('Nachricht').fill('muchacho kann nicht schreiben');
//     await page.getByRole('button', { name: 'Senden' }).click();
//     await expect(page.getByText('Schön alle Felder ausfüllen!')).toBeVisible;
// });

// test('Fields filled check in Contact works for no Message', async ({ page }) => {
//     await page.goto('/');
//     await page.getByPlaceholder('E-Mail-Adresse').fill('muchacho');
//     await page.getByRole('button', { name: 'Senden' }).click();
//     await expect(page.getByText('Schön alle Felder ausfüllen!')).toBeVisible;
// });

// // CONTACT FIELD WORKS YET TO BE TESTED
