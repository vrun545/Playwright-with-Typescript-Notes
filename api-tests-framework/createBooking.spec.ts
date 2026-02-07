import { test, expect } from "@playwright/test";
import { authenticate } from "../api-helpers/auth.helper";
import { createBooking } from "../api-helpers/booking.helper";
import { testData } from "../api-helpers/testData";
import { bookingSchema, Booking } from "../schemas/booking.schema";
import { validateSchema } from "../api-helpers/schemaValidator";

test.describe("1 Create booking", () => {

  test.beforeAll(async ({ request }) => {
    testData.token = await authenticate(request);

    const bookingResponse = await createBooking(request);
    testData.bookingId = bookingResponse.bookingid;

    validateSchema<Booking>(bookingSchema, bookingResponse.booking);
  });

  test("Booking created successfully", () => {
    expect(testData.bookingId).toBeGreaterThan(0);
    expect(testData.token).toBeTruthy();
  });
});
