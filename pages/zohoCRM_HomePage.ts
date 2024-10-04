import { Page, Locator, expect } from "@playwright/test";
import { QA1 } from "../utils/env";


export class CRMHomePage{
    readonly page: Page
    
    
    constructor(page:Page){
        this.page = page;
    }

    /**
     * Use this method to verfiy the CRMHome Page Title
     */
    async verifyCRMHomePageTitle(){
       await expect(this.page).toHaveTitle(`${QA1.CRMPageTitle}`);
    }

    /**
     * 
     * @param moduleName Use this method to cick on Module from CRM Home Page. pass CRMPageConstants class in the parameter
     */
    async clickOnMenu(moduleName: string){
        await this.page.getByRole('link', { name: moduleName }).click();
    }

}