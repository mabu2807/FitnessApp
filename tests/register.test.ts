import { expect, test } from '@playwright/test';

test('Empty fields check works', async ({ page }) => {
    await page.goto('/register');
    await page.getByRole('button', { name: 'Registrieren' }).click();
    await expect(page.getByText('Schön alle Felder ausfüllen!')).toBeVisible();
});

test('E-Mail check works', async ({ page }) => {
    await page.goto('/register');
    await page.getByPlaceholder('Benutzername').fill('test');
    await page.getByPlaceholder('Email').fill('test');
    await page.getByPlaceholder('Passwort', {exact: true}).fill('test');
    await page.getByPlaceholder('Bestätige Passwort').fill('test');
    await page.getByRole('button', { name: 'Registrieren' }).click();
    await expect(page.getByText('Das ist keine valide Email, Muchacho!')).toBeVisible();
});

test('Password check works', async ({ page }) => {
    await page.goto('/register');
    await page.getByPlaceholder('Benutzername').fill('test');
    await page.getByPlaceholder('Email').fill('test@google.de');
    await page.getByPlaceholder('Passwort', {exact: true}).fill('test');
    await page.getByPlaceholder('Bestätige Passwort').fill('t');
    await page.getByRole('button', { name: 'Registrieren' }).click();
    await expect(page.getByText('Die Passwörter stimmen nicht überein!')).toBeVisible();
});

test('Already registered check works', async ({ page }) => {
    await page.goto('/register');
    await page.getByPlaceholder('Benutzername').fill('test');
    await page.getByPlaceholder('Email').fill('test@google.de');
    await page.getByPlaceholder('Passwort', {exact: true}).fill('test');
    await page.getByPlaceholder('Bestätige Passwort').fill('test');
    await page.getByRole('button', { name: 'Registrieren' }).click();
    await page.goto('/register');
    await page.getByPlaceholder('Benutzername').fill('test');
    await page.getByPlaceholder('Email').fill('test@google.de');
    await page.getByPlaceholder('Passwort', {exact: true}).fill('test');
    await page.getByPlaceholder('Bestätige Passwort').fill('test');
    await page.getByRole('button', { name: 'Registrieren' }).click();
    await expect(page.getByText('Unter dieser Email Adresse besteht bereits ein stabiler Account!')).toBeVisible();
});