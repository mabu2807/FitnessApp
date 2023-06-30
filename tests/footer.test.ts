import { expect, test } from '@playwright/test';

test('Copyright visible', async ({ page }) => {
    await page.goto('/');
    await expect(page.getByText('© 2023 FitnessHub. All rights reserved.')).toBeVisible();
});

test('YouTube link works', async ({ page }) => {
    await page.goto('/');
    await page.getByTitle('YouTube').click();
    await expect(page.url()).toMatch(/youtube.*roswitaRuhl/i);
});

test('Instagram link works', async ({ page }) => {
    await page.goto('/');
    await page.getByTitle('Instagram').click();
    await expect(page.url()).toMatch(/instagram.*ksvlangen/i);
});

test('Twitter link works', async ({ page }) => {
    await page.goto('/');
    await page.getByTitle('Twitter').click();
    await expect(page.url()).toMatch(/twitter./i);
});

test('LinkedIn link works', async ({ page }) => {
    await page.goto('/');
    await page.getByTitle('LinkedIn').click();
    await expect(page.url()).toMatch(/linkedin.*luca-chmielarski/i);
});