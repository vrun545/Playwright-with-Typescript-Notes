import { test, expect } from "@playwright/test";
import { testData } from "../api-helpers/testData";

test("4 Delete booking", async ({ request }) => {

  const basicAuth = Buffer
    .from("admin:password123")
    .toString("base64");

  const response = await request.delete(`/booking/${testData.bookingId}`, {
    headers: {
      "Authorization": `Basic ${basicAuth}`
    }
  });

  expect(response.status()).toBe(201);
});
