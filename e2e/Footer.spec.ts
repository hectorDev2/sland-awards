import { test, expect } from "@playwright/test";

test.describe("check footer component", () => {
  test("check logo", async ({ page }) => {
    await page.goto("http://localhost:4321/");
    await expect(page).toHaveTitle(
      "Premios ESLAND 2024 - Celebrando lo mejor del streaming y los creadores de contenido"
    );
    const image = await page.getByAltText("Logo Ubiq");
    const imageSrc = await image.getAttribute("alt");
    expect(imageSrc).toContain("Logo Ubiq");
  });
});
