import {test, expect} from '@playwright/test';
import {pageNotFoundText} from './help_enums';

test.beforeEach(async ({page}) => {
    await page.goto('/');
});

test.describe('Navigation', () => {
    test('Should Navigate from general collections to article', async ({page}) => {
        await page.locator('#general').click();

        await expect(page).toHaveTitle('General | bunch Help Center');
        await expect(page.getByTestId('collection-photo')).toBeVisible();

        const generalHeader = page.locator('#general header:has-text("General")');

        await expect(generalHeader).toBeVisible();
        await expect(page.locator('#about-bunch')).toBeVisible();

        await page.getByTestId('article-link').first().click();

        await expect(page).toHaveTitle('Why was bunch founded? | bunch Help Center');
        await expect(page).toHaveURL(/articles\/75085-why-was-bunch-founded$/);
        await expect(page.getByTestId('article-section')).toBeVisible();

    });
    test('user inserts wrong url', async ({page}) => {

        const wrongUrl= 'brunchesss';
        await page.goto(wrongUrl);


        const pageDoesNotExist = page.getByText(pageNotFoundText.pageDoesNotExist);
        const pageIsNotHere = page.getByText(pageNotFoundText.pageIsNotHere);
        const trySearching = page.getByText(pageNotFoundText.trySearching);
        const sendUsMessage = page.getByText(pageNotFoundText.sendUsMessage);

        await expect(pageDoesNotExist).toBeVisible();
        await expect(pageIsNotHere).toBeVisible();
        await expect(trySearching).toBeVisible();
        await expect(sendUsMessage).toBeVisible();
    });
});
