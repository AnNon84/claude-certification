import { test, expect } from "@playwright/test";

test("shows empty state on load", async ({ page }) => {
  await page.goto("/");
  await expect(
    page.getByText("Start a conversation to generate React components")
  ).toBeVisible();
});

test("empty state is vertically centered in the chat panel", async ({ page }) => {
  await page.goto("/");

  const container = page.getByTestId("empty-state");
  await expect(container).toBeVisible();

  const content = page.getByText("Start a conversation to generate React components");
  const containerBox = await container.boundingBox();
  const contentBox = await content.boundingBox();

  expect(containerBox).not.toBeNull();
  expect(contentBox).not.toBeNull();

  const contentCenterY = contentBox!.y + contentBox!.height / 2;
  const containerCenterY = containerBox!.y + containerBox!.height / 2;

  // Allow 10% of container height as tolerance
  const tolerance = containerBox!.height * 0.10;
  expect(Math.abs(contentCenterY - containerCenterY)).toBeLessThan(tolerance);
});
