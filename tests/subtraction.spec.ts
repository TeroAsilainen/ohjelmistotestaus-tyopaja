import { test, expect } from '@playwright/test';

[
  { a: '0', b: '0', tulos: '0' },
  { a: '1', b: '-1', tulos: '2'},
  { a: '1.10', b: '1.20', tulos: '-0.1'},
  { a: 'a', b: '0', tulos: 'Virhe!' },
].forEach(({ a, b, tulos}) => {
  test(`subtraction ${a} - ${b}`, async ({ page }) => {
  await page.goto('/');
  await page.getByRole('textbox', { name: 'a' }).click();
  await page.getByRole('textbox', { name: 'a' }).fill(a);
  await page.getByRole('textbox', { name: 'b' }).click();
  await page.getByRole('textbox', { name: 'b' }).fill(b);
  await page.getByRole('button', { name: 'a - b' }).click();
  await expect(page.locator('#tulos')).toContainText(tulos);
});
});