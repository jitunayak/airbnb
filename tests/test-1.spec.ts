import { test } from "@playwright/test";

test("test", async ({ page }) => {
  await page.goto("http://localhost:3000/");
  await page.getByTestId("filter-button").click();
  await page.getByTestId("close-filter-modal-button").click();
});
