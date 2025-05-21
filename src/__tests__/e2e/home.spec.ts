import { test, expect } from '@playwright/test';

test.describe('Home Page', () => {
  test('should display the main sections', async ({ page }) => {
    await page.goto('/');

    // Check hero section
    await expect(page.getByText('Empowering Minds with AI Robotics')).toBeVisible();
    await expect(page.getByText('Join us on a journey')).toBeVisible();

    // Check navigation
    await expect(page.getByRole('link', { name: 'Programs' })).toBeVisible();
    await expect(page.getByRole('link', { name: 'Curriculum' })).toBeVisible();
    await expect(page.getByRole('link', { name: 'Resources' })).toBeVisible();
    await expect(page.getByRole('link', { name: 'Contact' })).toBeVisible();
    await expect(page.getByRole('link', { name: 'Donate' })).toBeVisible();
  });

  test('should navigate to programs page', async ({ page }) => {
    await page.goto('/');
    await page.getByRole('link', { name: 'Programs' }).click();
    await expect(page).toHaveURL('/programs');
  });

  test('should navigate to contact page', async ({ page }) => {
    await page.goto('/');
    await page.getByRole('link', { name: 'Contact' }).click();
    await expect(page).toHaveURL('/contact');
  });

  test('should display footer information', async ({ page }) => {
    await page.goto('/');

    // Check footer content
    await expect(page.getByText('InnovateAI Robotics')).toBeVisible();
    await expect(page.getByText('Phone: +1 (650) 619-4676')).toBeVisible();
    await expect(page.getByText(/© \d{4} InnovateAI Robotics/)).toBeVisible();
  });
}); 