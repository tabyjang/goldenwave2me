import { test, expect } from "@playwright/test"

test.describe("Navigation", () => {
  test("should load homepage", async ({ page }) => {
    await page.goto("/")
    await expect(page).toHaveTitle(/next-starter-kit/i)
  })

  test("should navigate to About page", async ({ page }) => {
    await page.goto("/")
    await page.click('a[href*="/about"]')
    await expect(page).toHaveURL(/.*about/)
    await expect(page.locator("h1")).toBeVisible()
  })

  test("should navigate to Contact page", async ({ page }) => {
    await page.goto("/")
    await page.click('a[href*="/contact"]')
    await expect(page).toHaveURL(/.*contact/)
    await expect(page.locator("h1")).toBeVisible()
  })

  test("should navigate to Pricing page", async ({ page }) => {
    await page.goto("/")
    await page.click('a[href*="/pricing"]')
    await expect(page).toHaveURL(/.*pricing/)
    await expect(page.locator("h1")).toBeVisible()
  })

  test("should have working header navigation", async ({ page }) => {
    await page.goto("/")
    const header = page.locator("header")
    await expect(header).toBeVisible()

    // Check navigation links exist
    await expect(header.locator('a[href*="/about"]')).toBeVisible()
    await expect(header.locator('a[href*="/contact"]')).toBeVisible()
    await expect(header.locator('a[href*="/pricing"]')).toBeVisible()
  })

  test("should have working footer", async ({ page }) => {
    await page.goto("/")
    const footer = page.locator("footer")
    await expect(footer).toBeVisible()
  })
})
