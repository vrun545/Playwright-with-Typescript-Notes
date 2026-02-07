import {test, expect, request} from "@playwright/test";

// Base URL already set for api tests in config file

test("API Testing Getting all Booking Records", async ({request}) => {

    const response = await request.get("/booking");
    console.log(await response.json());


})
