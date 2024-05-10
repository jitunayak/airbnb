import { test } from "@playwright/test";
import { ai } from "@zerostep/playwright";

test("open filters", async ({ page }) => {
  await page.goto("http://localhost:3000");
  // await page.getByTestId("filter-button").click();
  // expect(await page.getByTestId("close-filter-modal-button")).toBeVisible();

  const aiArgs = { page, test };
  await ai("click on filter button", aiArgs);
  await ai("validate close button visible", aiArgs);
  // const headerText = await ai("Get the header text", aiArgs);
  // await page.goto("https://google.com/");
  // await ai(`Type "${headerText}" in the search box`, aiArgs);
  // await ai("Press enter", aiArgs);
});
