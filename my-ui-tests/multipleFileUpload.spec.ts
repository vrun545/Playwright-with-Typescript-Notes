import {test, expect, Locator} from "@playwright/test";
import path from "path";

test("Upload Mutltiple File", async({page}) => {

        await page.goto("https://davidwalsh.name/demo/multiple-file-upload.php");

        // multiple file upload
        const fileUploader: Locator = page.locator("#filesToUpload");

        await fileUploader.setInputFiles([
            path.join("C:/Users/varunbajpai/Videos/New folder/1.png"), 
            path.join("C:/Users/varunbajpai/OneDrive - Nagarro/Pictures/Screenshots/dnt.png"),
            path.join("C:/Users/varunbajpai/Downloads/uploaded/DSA.pdf")]);

        await page.waitForTimeout(4000);
        
        // deselct files
        await fileUploader.setInputFiles([]);

        await page.waitForTimeout(3000);
});
