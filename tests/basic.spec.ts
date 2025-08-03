import { test, expect } from '@playwright/test'

test('首页文案', async ({ page }) => {
  await page.goto('http://localhost:5173/')
  await expect(page.locator('text=DU10 冒险')).toBeVisible()
})
