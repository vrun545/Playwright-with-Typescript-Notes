import { test, expect } from "@playwright/test";

test("Create new Booking", async ({ request }) => {

    const response = await request.post("/booking", {
        headers: {
            "Content-Type": "application/json",
            "Accept": "application/json"
        },
        data: {
            "firstname": "HAL",
            "lastname": "Jordan",
            "totalprice": 639,
            "depositpaid": true,
            "bookingdates": {
                "checkin": "2026-01-01",
                "checkout": "2026-03-01"
            },
            "additionalneeds": "Dinner"
        }
    });

    const res  = await response.json();

    expect(response.status()).toBe(200);
    expect(res.bookingid).toBeTruthy();

    console.log("Your ID: " + res.bookingid);
    console.log(res);

})