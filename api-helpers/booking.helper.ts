import { APIRequestContext, expect } from "@playwright/test";

export async function createBooking(request: APIRequestContext) {
  const response = await request.post("/booking", {
    data: {
      firstname: "Temp",
      lastname: "User",
      totalprice: 200,
      depositpaid: true,
      bookingdates: {
        checkin: "2024-01-01",
        checkout: "2024-01-05"
      },
      additionalneeds: "Breakfast"
    }
  });

  expect(response.status()).toBe(200);
  return response.json();
}
