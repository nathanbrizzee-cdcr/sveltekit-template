import { expect, test } from './baseFixtures';

test('index page has expected anchor tag', async ({ page }) => {
	await page.goto('/');
	expect(await page.textContent('span')).toBe('CDCR Layout');
});
