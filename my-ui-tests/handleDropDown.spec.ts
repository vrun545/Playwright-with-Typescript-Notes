import {test, expect, Locator} from "@playwright/test";

test("Select Drop down values", async ({page}) => {

    await page.goto("https://www.magupdate.co.uk/magazine-subscription/phrr");

    const countryDropDown: Locator = page.locator("#Contact_CountryCode");

    // 1st Method
    // await page.selectOption("#Contact_CountryCode", { value: "AD" });

    // 2nd Method
    await countryDropDown.selectOption( {value: "AD"} );
    await countryDropDown.selectOption( {label: "Australia"} );
    await countryDropDown.selectOption( {index: 5} );

    // If multi-select allowed
    // await countryDropDown.selectOption([{ value: "java" }, { value: "ts" }])


    // print all values of select dropdown [Modern Method]
    const allOptions2 = await page.locator("#Contact_CountryCode > option").allTextContents();   // allTextContent() returns a list of strings
    console.log("Total countries: " + allOptions2.length);

    for(let i=0; i<allOptions2.length; i++) {
        console.log(allOptions2[i]);
    }


    await page.waitForTimeout(10000);
})