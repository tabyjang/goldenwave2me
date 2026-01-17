import { test, expect } from "@playwright/test"

test.describe("Authentication Pages", () => {
  test("should access login page", async ({ page }) => {
    await page.goto("/signin")
    await expect(page).toHaveURL(/.*signin/)

    // Page should have a heading
    const heading = page.locator("h1, h2")
    await expect(heading.first()).toBeVisible()
  })

  test("should access signup page", async ({ page }) => {
    await page.goto("/signup")
    await expect(page).toHaveURL(/.*signup/)

    // Page should have a heading
    const heading = page.locator("h1, h2")
    await expect(heading.first()).toBeVisible()
  })

  test("should render OAuth buttons on login page", async ({ page }) => {
    await page.goto("/signin")

    // Look for OAuth provider buttons
    const oauthButtons = page.locator(
      'button:has-text("Google"), button:has-text("GitHub"), button:has-text("Discord")'
    )
    // At least one OAuth button should be visible
    const count = await oauthButtons.count()
    expect(count).toBeGreaterThan(0)
  })

  test("should render OAuth buttons on signup page", async ({ page }) => {
    await page.goto("/signup")

    // Look for OAuth provider buttons
    const oauthButtons = page.locator(
      'button:has-text("Google"), button:has-text("GitHub"), button:has-text("Discord")'
    )
    // At least one OAuth button should be visible
    const count = await oauthButtons.count()
    expect(count).toBeGreaterThan(0)
  })

  test("should have link to switch between signin and signup", async ({
    page,
  }) => {
    await page.goto("/signin")
    // Should have link to signup
    const signupLink = page.locator('a[href*="signup"]')
    await expect(signupLink).toBeVisible()

    await page.goto("/signup")
    // Should have link to signin
    const signinLink = page.locator('a[href*="signin"]')
    await expect(signinLink).toBeVisible()
  })

  test("should redirect unauthenticated users from protected routes", async ({
    page,
  }) => {
    // Try to access a protected route (if any)
    await page.goto("/dashboard")
    // Should redirect to signin or show unauthorized
    const url = page.url()
    const isRedirected = url.includes("signin") || url.includes("404")
    expect(isRedirected).toBeTruthy()
  })
})
