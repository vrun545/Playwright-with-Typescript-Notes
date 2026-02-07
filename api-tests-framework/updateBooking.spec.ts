import { test, expect } from "@playwright/test";
import { testData } from "../api-helpers/testData";
import { bookingSchema, Booking } from "../schemas/booking.schema";
import { validateSchema } from "../api-helpers/schemaValidator";

test("2 Update booking", async ({ request }) => {

  const response = await request.put(`/booking/${testData.bookingId}`, {
    headers: {
      "Content-Type": "application/json",
      "Cookie": `token=${testData.token}`
    },
    data: {
      firstname: "Updated",
      lastname: "User",
      totalprice: 350,
      depositpaid: true,
      bookingdates: {
        checkin: "2024-02-01",
        checkout: "2024-02-10"
      },
      additionalneeds: "Lunch"
    }
  });

  expect(response.status()).toBe(200);

  const body: Booking = await response.json();
  validateSchema<Booking>(bookingSchema, body);
});
