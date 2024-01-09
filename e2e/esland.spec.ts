import { test, expect } from "@playwright/test";

test.describe("check app component", () => {
  test("check logo", async ({ page }) => {
    await page.goto("http://localhost:4321/");
    await expect(page).toHaveTitle(
      "Premios ESLAND 2024 - Celebrando lo mejor del streaming y los creadores de contenido"
    );
    const image = await page.getByAltText("Logo Ubiq");
    const buttonJoin = await page.getByRole("button");
    const imageAlt = await image.getAttribute("alt");
    expect(imageAlt).toContain("Logo Ubiq");
  });
});
test("check copyright text", async ({ page }) => {
  await page.goto("http://localhost:4321/");
  const copyrightText = await page.getByText("© 2024 Premios ESLAND");
  expect(await copyrightText.isVisible()).toBeTruthy();
});
