import {test, expect} from "@playwright/test";

test("Delete a Booking", async({request}) => {

    const token = btoa("admin:password123");
    const userID: number = 7;

    const response = await request.delete(`/booking/${userID}`, {
        headers: {
            "Content-Type": "application/json",
            "Authorization": `Basic ${token}`
        }
    });

    expect(response.status()).toBe(201);
    const res = await response.text();
    console.log(res);

})