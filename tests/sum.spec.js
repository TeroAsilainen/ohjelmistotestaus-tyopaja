import { test, expect } from '@playwright/test';

[
  { a: '0', b: '0', tulos: '0' },
  { a: '1', b: '-1', tulos: '0'},
  { a: '1.1', b: '1.2', tulos: '2.3'},
  { a: 'a', b: '0', tulos: 'Virhe!' },
].forEach(({ a, b, tulos}) =>{
  test(`sum ${a} + ${b}`, async ({ page }) => {
  await page.goto('/');

  // Test for a + b
  await page.getByLabel('a').fill(`${a}`);
  await page.getByLabel('b').fill(`${b}`);
  // Click sum
  await page.getByText('a + b').click();

  // Locate output
  const output = page.getByTitle('tulos');

  // Expect sum to be 'tulos'
  await expect(output).toHaveText(`${tulos}`);
  });
});



