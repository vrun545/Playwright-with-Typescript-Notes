import { test, expect } from "@playwright/test";

test("Updating Partial Booking Details", async ({ request }) => {

    const authResponse = await request.post("/auth", {
        data: {
            username: "admin",
            password: "password123"
        }
    });

    expect(authResponse.status()).toBe(200);

    const { token } = await authResponse.json();

    const userID = 12;

    const response = await request.patch(`/booking/${userID}`, {
        headers: {
            "Content-Type": "application/json",
            "Accept": "application/json",
            "Cookie": `token=${token}`
        },
        data: {
            firstname: "Jason",
            lastname: "Statham"
        }
    });

    expect(response.status()).toBe(200);

    const res = await response.json();
    console.log(res);

    expect(res.firstname).toBe("Jason");
    expect(res.lastname).toBe("Statham");
});
