import { test, expect } from "@playwright/test";

test.describe("Validting API response based on Filters", () => {

    test("Validting API response based on name filter", async ({ request }) => {

        const response = await request.get("/booking", {
            headers: {
                "Content-Type": "application/json"
            },
            params: {
                "firstname": "sally",
                "lastname": "brown"
            }
        });

        expect(response.status()).toBe(200);

        const res: any = await response.json();
        console.log(res.length);
        console.log(res);

    });


    test("Validting API response based on date filter", async ({ request }) => {

        const response = await request.get("/booking", {
            headers: {
                "Content-Type": "application/json"
            },
            params: {
                "checkin": "2014-03-13",
                "checkout": "2018-05-21"
            }
        });

        expect(response.status()).toBe(200);

        const res: any = await response.json();
        console.log(res.length);
        console.log(res);

    });

})
