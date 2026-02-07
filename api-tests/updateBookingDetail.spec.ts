import { test, expect } from "@playwright/test";

test("Updating Booking Details", async ({ request }) => {

    const username = "admin";
    const password = "password123";

    const base64Creds = Buffer
        .from(`${username}:${password}`)
        .toString("base64");

    // Need to validate first and get token before updating any resource info
    const authResponse = await request.post("/auth", {
        data: {
            username: "admin",
            password: "password123"
        }
    });

    const authData = await authResponse.json();
    expect(authResponse.status()).toBe(200);
    const token = authData.token;
    console.log(token);


    const userID: number = 2;
    const response = await request.put(`/booking/${userID}`, {
        headers: {
            "Content-Type": "application/json",
            "Accept": "application/json",
            "Cookie": `token=${token}`,
            // "Authorization": `Basic ${base64Creds}`
        },
        data: {
            firstname: "David",
            lastname: "Beckam",
            totalprice: 321,
            depositpaid: true,
            bookingdates: {
                checkin: "2021-01-01",
                checkout: "2021-03-01"
            },
            additionalneeds: "Dinner"
        }
    });

    expect(response.status()).toBe(200);

    const res = await response.json();
    console.log(res);

})