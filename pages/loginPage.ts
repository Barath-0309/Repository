import { Page, Locator, expect } from "@playwright/test";
import { QA1 } from "../utils/env";

export class LoginPage {
    readonly page: Page
    SignInLink: Locator;
    emilAddInputField: Locator;
    nextButton: Locator;
    passwordInputField: Locator;
    signInButton: Locator;
    passwordFieldLocatorString: string
    

    constructor(page: Page) {
        this.page = page;
        this.SignInLink = page.getByRole('link', { name: 'Sign In' });
        this.emilAddInputField = page.locator("//input[@id='login_id']");
        this.nextButton = page.getByRole('button', { name: 'Next' });
        this.passwordInputField = page.locator("//input[@id='password']");
        this.passwordFieldLocatorString = "//input[@id='password']";
        this.signInButton = page.getByRole('button', {name: 'Sign In'});
        
    }

    /**
     * 
     * @param url - Expected URL from env.ts file. Ex: QA1.URL
     */
    async goToUrl(url: string) {
        await this.page.goto(url);
        await expect(this.page).toHaveTitle(`${QA1.Title}`);
    }

    /**
     * 
     * @param userEmail Pass the UserEmail from .env file. Ex: QA1.email
     * @param userPassword Pass the userPassword from .env file. Ex: QA1.password
     */
    async LoginToApplication(userEmail: string, userPassword: string) {
        await expect(this.SignInLink).toBeVisible();
        await this.SignInLink.click();
        await expect(this.emilAddInputField).toBeVisible();
        await this.emilAddInputField.fill(userEmail);
        await this.nextButton.click();
        await this.page.waitForTimeout(1000);
        await this.page.waitForSelector(this.passwordFieldLocatorString);
        await expect(this.passwordInputField).toBeVisible();
        await this.passwordInputField.fill(userPassword, {timeout:10000});
        await this.signInButton.click();
        await this.page.waitForTimeout(1000);
        const elemntCount  = await this.page.getByRole('link', { name: 'I Understand' }).count();
        console.log(elemntCount);
        if (elemntCount == 1){
            await this.page.getByRole('link', { name: 'I Understand' }).click();
        }


    }
}