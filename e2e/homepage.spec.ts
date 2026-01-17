import { test, expect } from "@playwright/test"

test.describe("Homepage", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto("/")
  })

  test("should render Hero section", async ({ page }) => {
    // Hero section should be visible
    const heroSection = page.locator("section").first()
    await expect(heroSection).toBeVisible()

    // Should have a main heading
    const heading = page.locator("h1")
    await expect(heading).toBeVisible()
  })

  test("should render CTA button", async ({ page }) => {
    // CTA button should exist
    const ctaButton = page.locator(
      'a:has-text("시작하기"), a:has-text("Get Started")'
    )
    await expect(ctaButton.first()).toBeVisible()
  })

  test("should have responsive layout", async ({ page }) => {
    // Check at mobile viewport
    await page.setViewportSize({ width: 375, height: 667 })
    await expect(page.locator("header")).toBeVisible()

    // Check at desktop viewport
    await page.setViewportSize({ width: 1280, height: 720 })
    await expect(page.locator("header")).toBeVisible()
  })

  test("should have dark mode toggle", async ({ page }) => {
    // Look for theme toggle button
    const themeToggle = page.locator(
      'button[aria-label*="theme"], button:has([class*="moon"]), button:has([class*="sun"])'
    )
    if (await themeToggle.first().isVisible()) {
      await themeToggle.first().click()
      // Page should still be functional after toggle
      await expect(page.locator("header")).toBeVisible()
    }
  })

  test("should load without JavaScript errors", async ({ page }) => {
    const errors: string[] = []
    page.on("pageerror", (error) => {
      errors.push(error.message)
    })

    await page.goto("/")
    await page.waitForLoadState("networkidle")

    expect(errors).toHaveLength(0)
  })
})
