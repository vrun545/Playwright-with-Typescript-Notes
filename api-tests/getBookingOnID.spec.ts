import {test, expect} from "@playwright/test";

test("Getting Book Details on Book-ID", async ({request}) => {

    let userID: number = 12; 
    const response = await request.get(`/booking/${userID}`, {
        headers: {
            "Content-Type": "application/json"
        }
    });

    expect(response.status()).toBe(200);

    const res = await response.json();

    expect(res.firstname).toBe("Josh");

    console.log(res);
    console.log(`Full Name: ${res.firstname} ${res.lastname}`);
    console.log(`Price: ${res.totalprice}`);
    console.log(`Dates: Check-In -> ${res.bookingdates.checkin} And Check-Out -> ${res.bookingdates.checkout}`);

});