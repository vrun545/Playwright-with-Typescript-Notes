import { test, expect } from "@playwright/test";
import { testData } from "../api-helpers/testData";
import { bookingSchema, Booking } from "../schemas/booking.schema";
import { validateSchema } from "../api-helpers/schemaValidator";

test("3 Partial update booking", async ({ request }) => {

  const response = await request.patch(`/booking/${testData.bookingId}`, {
    headers: {
      "Content-Type": "application/json",
      "Cookie": `token=${testData.token}`
    },
    data: {
      firstname: "Jason",
      lastname: "Statham"
    }
  });

  expect(response.status()).toBe(200);

  const body: Booking = await response.json();
  validateSchema<Booking>(bookingSchema, body);
});
