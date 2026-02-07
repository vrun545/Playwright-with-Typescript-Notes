import {test, expect} from "@playwright/test";

test("Autheticate valid credentials and extract Token", async({request}) => {

    const response = await request.post("/auth", {
        headers:{
            "Content-Type": "application/json",
        },
        data: {
            "username" : "admin",
            "password" : "password123"
        }
    })
    
    const res:any = await response.json();
    console.log(res);

    expect(response.status()).toBe(200);
    console.log("Token: " + res.token);


});