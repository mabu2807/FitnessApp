import { expect, test } from '@playwright/test';

// Goals
test('Wähle zunächst dein Ziel aus! is visible', async ({ page }) => {
    await page.goto('/registration');
    await expect(page.getByText('Wähle zunächst dein Ziel aus!')).toBeVisible();
});

test('Next button is blocked for goals', async ({ page }) => {
    await page.goto('/registration');
    await expect(page.getByRole('button', { name: 'Next' })).toBeDisabled();
});

test('Next button unlocks for goals', async ({ page }) => {
    page.goto('/registration');
    await page.getByTitle('goalCard').first().click();
    await expect(page.getByRole('button', { name: 'Next' })).toBeEnabled();
});

// Size
test('Wähle deine Körpergröße aus! is visible', async ({ page }) => {
    await page.goto('/registration');
    await page.getByTitle('goalCard').first().click();
    await page.getByRole('button', { name: 'Next' }).click();
    await expect(page.getByText('Wähle deine Körpergröße aus!')).toBeVisible();
});

test('Size Slider works', async ({ page }) => {
    await page.goto('/registration');
    await page.getByTitle('goalCard').first().click();
    await page.getByRole('button', { name: 'Next' }).click();
    const slider = await page.$('input[title="sizeSlider"]');
    await slider?.fill('170');
    const endTextValue = await page.getByTitle("heightValue").textContent();
    await expect(endTextValue).toBe("170 cm");
});


// Weight
test('Wähle dein Gewicht aus! is visible', async ({ page }) => {
    await page.goto('/registration');
    await page.getByTitle('goalCard').first().click();
    await page.getByRole('button', { name: 'Next' }).click();
    await page.getByRole('button', { name: 'Next' }).click();
    await expect(page.getByText('Wähle dein Gewicht aus!')).toBeVisible();
});

test('Weight Slider works', async ({ page }) => {
    await page.goto('/registration');
    await page.getByTitle('goalCard').first().click();
    await page.getByRole('button', { name: 'Next' }).click();
    await page.getByRole('button', { name: 'Next' }).click();
    const slider = await page.$('input[title="weightSlider"]');
    await slider?.fill('70');
    const endTextValue = await page.getByTitle("weightValue").textContent();
    await expect(endTextValue).toBe("70 kg");
});

test('Bodypicture changes', async ({ page }) => {
    await page.goto('/registration');
    await page.getByTitle('goalCard').first().click();
    await page.getByRole('button', { name: 'Next' }).click();
    await page.getByRole('button', { name: 'Next' }).click();
    const initialPicture = await page.getByAltText("body");
    const slider = await page.$('input[title="weightSlider"]');
    await slider?.fill('70');
    const endPicture = await page.getByAltText("body");
    await expect(initialPicture).not.toBe(endPicture);
});


// Age
test('wähle deinen Geburtstag aus! is visible', async ({ page }) => {
    await page.goto('/registration');
    await page.getByTitle('goalCard').first().click();
    await page.getByRole('button', { name: 'Next' }).click();
    await page.getByRole('button', { name: 'Next' }).click();
    await page.getByRole('button', { name: 'Next' }).click();
    await expect(page.getByText('Wähle deinen Geburtstag aus!')).toBeVisible();
});


// gender
test('Wähle dein Geschlecht aus! is visible', async ({ page }) => {
    await page.goto('/registration');
    await page.getByTitle('goalCard').first().click();
    await page.getByRole('button', { name: 'Next' }).click();
    await page.getByRole('button', { name: 'Next' }).click();
    await page.getByRole('button', { name: 'Next' }).click();
    await page.getByRole('button', { name: 'Next' }).click();
    await expect(page.getByText('Wähle dein Geschlecht aus!')).toBeVisible();
});

test('next button is blocked for gender', async ({ page }) => {
    await page.goto('/registration');
    await page.getByTitle('goalCard').first().click();
    await page.getByRole('button', { name: 'Next' }).click();
    await page.getByRole('button', { name: 'Next' }).click();
    await page.getByRole('button', { name: 'Next' }).click();
    await page.getByRole('button', { name: 'Next' }).click();
    await expect(page.getByRole('button', { name: 'Next' })).toBeDisabled();
});

test('next button unlocks for gender', async ({ page }) => {
    await page.goto('/registration');
    await page.getByTitle('goalCard').first().click();
    await page.getByRole('button', { name: 'Next' }).click();
    await page.getByRole('button', { name: 'Next' }).click();
    await page.getByRole('button', { name: 'Next' }).click();
    await page.getByRole('button', { name: 'Next' }).click();
    await page.getByTitle('männlich').click();
    await expect(page.getByRole('button', { name: 'Next' })).toBeEnabled();
});

// Level
test('Wähle dein Aktivitätslevel aus! is visible', async ({ page }) => {
    await page.goto('/registration');
    await page.getByTitle('goalCard').first().click();
    await page.getByRole('button', { name: 'Next' }).click();
    await page.getByRole('button', { name: 'Next' }).click();
    await page.getByRole('button', { name: 'Next' }).click();
    await page.getByRole('button', { name: 'Next' }).click();
    await page.getByTitle('männlich').click();
    await page.getByRole('button', { name: 'Next' }).click();
    await expect(page.getByText('Wähle dein Aktivitätslevel aus!')).toBeVisible();
});

// General
test('Complete button works', async ({ page }) => {
    await page.goto('/registration');
    await page.getByTitle('goalCard').first().click();
    await page.getByRole('button', { name: 'Next' }).click();
    await page.getByRole('button', { name: 'Next' }).click();
    await page.getByRole('button', { name: 'Next' }).click();
    await page.getByRole('button', { name: 'Next' }).click();
    await page.getByTitle('männlich').click();
    await page.getByRole('button', { name: 'Next' }).click();
    await page.getByRole('button', { name: 'Next' }).click();
    await page.getByRole('button', { name: 'Complete' }).click();
    await expect(page).toHaveURL('/register');
});

test('data is saved', async ({ page }) => {
    const goalValue = 'Lose Weight';
    const sizeValue = '170';
    const weightValue = '70';
    const dobValue = '1999-01-01';
    const genderValue = 'männlich';
    const levelValue = 'Solide';
  
    await page.goto('/registration');
  
    await page.getByText(goalValue).click();
    await page.getByRole('button', { name: 'Next' }).click();
  
    const sizeSlider = await page.$('input[title="sizeSlider"]');
    await sizeSlider?.fill(sizeValue);
    await page.getByRole('button', { name: 'Next' }).click();
  
    const weightSlider = await page.$('input[title="weightSlider"]');
    await weightSlider?.fill(weightValue);
    await page.getByRole('button', { name: 'Next' }).click();
  
    const dobPicker = await page.$('input[title="dob picker"]');
    await dobPicker?.fill(dobValue);
    await page.getByRole('button', { name: 'Next' }).click();
  
    await page.getByTitle(genderValue).click();
    await page.getByRole('button', { name: 'Next' }).click();
  
    await page.getByRole('button', { name: 'Next' }).click();
  
    await expect(page.getByText(goalValue)).toBeVisible();
    await expect(page.getByText(sizeValue)).toBeVisible();
    await expect(page.getByText(weightValue, {exact: true})).toBeVisible();
    await expect(page.getByText(dobValue)).toBeVisible();
    await expect(page.getByText(genderValue)).toBeVisible();
    await expect(page.getByText(levelValue)).toBeVisible();
  });
