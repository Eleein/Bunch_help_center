import {test, expect} from '@playwright/test';

test.beforeEach(async ({page}) => {
    await page.goto('/');
});

test.describe('Search', () => {
    test('should search for an article using dropdown menu', async ({page}) => {
        await page.getByPlaceholder('Search for articles...').type('angel');

        await expect(page.getByTestId('search-popup')).toBeVisible();

        await page.locator('a[href*="/en/articles/"]').first().click()

        await expect(page).toHaveURL(/.*angel/);
        await expect(page.getByTestId('article-section')).toBeVisible();

        const headerArticle = page.locator('header:text("angel")');

        await expect(headerArticle).toBeVisible();
        await expect(page.getByRole('article')).toContainText('angel');
    });
    test('should search for article using full list of results', async ({page}) => {
        const searchInput = page.getByPlaceholder('Search for articles...');
        await searchInput.type('bunch');
        await page.keyboard.press('Enter');

        await expect(page.getByText('Search results for:')).toBeVisible();

        await page.locator('a[href*="/en/articles/"]').first().click();

        await expect(page).toHaveURL(/.*bunch/);
        await expect(page.getByTestId('breadcrumb-1')).toContainText('bunch')
        await expect(page.getByTestId('article-section')).toBeVisible();

        const headerArticle = page.locator('header:text("bunch")');

        await expect(headerArticle).toBeVisible();
        await expect(page.getByRole('article')).toContainText('bunch');
    })
});



