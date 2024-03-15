import { test, expect } from "@playwright/test";

test("open filters", async ({ page }) => {
  await page.goto("http://localhost:3000");
  await page.getByTestId("filter-button").click();
  expect(await page.getByTestId("close-filter-modal-button")).toBeVisible();
});
