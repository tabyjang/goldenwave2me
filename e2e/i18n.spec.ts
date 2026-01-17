import { test, expect } from "@playwright/test"

test.describe("Internationalization (i18n)", () => {
  test("should default to Korean locale", async ({ page }) => {
    await page.goto("/")
    // Check Korean content is displayed
    const content = await page.textContent("body")
    expect(content).toContain("시작하기")
  })

  test("should switch to English locale", async ({ page }) => {
    await page.goto("/")

    // Click language switcher
    const languageSwitcher = page.locator('button:has-text("🇰🇷")')
    if (await languageSwitcher.isVisible()) {
      await languageSwitcher.click()
      // Select English
      await page.click('text="🇺🇸 English"')
      await expect(page).toHaveURL(/.*\/en/)
    }
  })

  test("should access English locale directly via URL", async ({ page }) => {
    await page.goto("/en")
    const content = await page.textContent("body")
    expect(content).toContain("Get Started")
  })

  test("should preserve locale when navigating", async ({ page }) => {
    await page.goto("/en")
    await page.click('a[href*="/about"]')
    await expect(page).toHaveURL(/.*\/en\/about/)
  })

  test("should show correct language in header after switching", async ({
    page,
  }) => {
    await page.goto("/en")
    // English page should show US flag in language switcher
    const languageSwitcher = page.locator('button:has-text("🇺🇸")')
    await expect(languageSwitcher).toBeVisible()
  })
})
