import { Page, Locator, expect } from "@playwright/test";
import { QA1 } from "../utils/env";
import { LeadInformation, AddressInformation, DescriptionInformation } from "../gettersAndSetters/leadModule.ts";

let LeadInfo = new LeadInformation();
let AddInfo = new AddressInformation();
let DescInfo = new DescriptionInformation();

export class CRMLeadsPage {

    readonly page: Page
    companyTextField: Locator
    LastNameTextField: Locator
    SalutationDropdown: Locator
    SalutationOptions: Locator
    SalutationValue: string
    FirstNameTextField: Locator
    DesignatinTextField: Locator
    EmailTextField: Locator
    PhoneTextField: Locator
    FaxTextField: Locator
    MobileTextField: Locator
    WebSiteTextField: Locator
    LeadSourceDropdown: Locator
    LeadSourceOptions: Locator
    LeadStatusDropdown: Locator
    LeadStatusOptions: Locator
    IndustryDropdown: Locator
    IndustryOptions: Locator
    EmpCountTextField: Locator
    AnnualRevTextField: Locator
    RatingDropdown: Locator
    RatingOptions: Locator
    SkypeTextField: Locator
    SecEmailTextField: Locator
    TwitterTextField: Locator
    StreetTextField: Locator
    CityTextField: Locator
    StateTextField: Locator
    ZipCodeTextField: Locator
    CountryTextField: Locator
    DescriptionTextField: Locator
    EmailOptOutCheckbox: Locator
    CreateLeadButton: Locator
    SaveButton: Locator
    BackButton: Locator
    LeadPageTable: Locator
    LeadPageTableRow: string
    LeadTableDataLastName: string
    LeadTableDataEmail: string
    LeadTableDataPhone: string
    LeadTableDataLeadSource: string
    EditButton: Locator
    SelectRowCheckbox: string
    MoreActionButton: Locator
    DeleteConfirmationButton: Locator
    clickDeleteOptionButton: Locator
    CreateLeadButton1: Locator

    constructor(page: Page) {
        this.page = page;
        this.companyTextField = page.locator('#Crm_Leads_COMPANY #inputId');
        this.LastNameTextField = page.locator('#Crm_Leads_LASTNAME_LInput');
        this.SalutationDropdown = page.getByLabel('Salutation').locator('lyte-drop-button');
        this.SalutationOptions = page.getByRole('option', { name: LeadInfo.Salutation });
        this.FirstNameTextField = page.locator('#Crm_Leads_FIRSTNAME_LInput');
        this.DesignatinTextField = page.locator('#Crm_Leads_DESIGNATION_LInput');
        this.EmailTextField = page.locator('#Crm_Leads_EMAIL_LInput');
        this.PhoneTextField = page.locator('#Crm_Leads_PHONE_LInput');
        this.FaxTextField = page.locator('#Crm_Leads_FAX_LInput');
        this.MobileTextField = page.locator('#Crm_Leads_MOBILE_LInput');
        this.WebSiteTextField = page.locator('#Crm_Leads_WEBSITE_LInput');
        this.LeadSourceDropdown = page.getByLabel('Lead Source').locator('lyte-drop-button');
        this.LeadSourceOptions = page.getByRole('option', { name: LeadInfo.LeadSource });
        this.LeadStatusDropdown = page.getByLabel('Lead Status').locator('lyte-drop-button');
        this.LeadStatusOptions = page.getByRole('option', { name: LeadInfo.LeadStatus });
        this.IndustryDropdown = page.getByLabel('Industry').locator('lyte-drop-button');
        this.IndustryOptions = page.getByRole('option', { name: LeadInfo.Industry });
        this.EmpCountTextField = page.locator('#Crm_Leads_EMPCT_LInput');
        this.AnnualRevTextField = page.getByLabel('Annual Revenue');
        this.RatingDropdown = page.getByLabel('Rating').locator('lyte-drop-button');
        this.RatingOptions = page.getByRole('option', { name: LeadInfo.rating });
        this.SkypeTextField = page.locator('#Crm_Leads_SKYPEIDENTITY_LInput');
        this.SecEmailTextField = page.locator('#Crm_Leads_ADDN_EMAIL_LInput');
        this.TwitterTextField = page.locator('#Crm_Leads_TWITTER_LInput');
        this.StreetTextField = page.locator('#Crm_Leads_LANE_LInput');
        this.CityTextField = page.locator('#Crm_Leads_CITY_LInput');
        this.StateTextField = page.locator('#Crm_Leads_STATE_LInput');
        this.ZipCodeTextField = page.locator('#Crm_Leads_CODE_LInput');
        this.CountryTextField = page.getByLabel('Address Information').locator('#inputId');
        this.DescriptionTextField = page.locator('textarea');
        this.EmailOptOutCheckbox = page.locator('#Crm_Leads_EMAILOPTOUT_FValue span');
        this.CreateLeadButton = page.getByLabel('Create Lead');
        this.CreateLeadButton1 = page.getByRole('button', { name: 'Create a Lead' });
        this.SaveButton = page.getByRole('button', { name: 'Save', exact: true });
        this.BackButton = page.getByLabel('Back');
        this.LeadPageTable = page.locator("//lyte-exptable[@class='lyteExpOriginalTable']");
        this.LeadPageTableRow = "//lyte-yield[@class='lyteExpTableRowGroup']//lyte-exptable-tr";
        this.EditButton = page.getByLabel('Edit', { exact: true });
        this.SelectRowCheckbox = "//input[@type='checkbox']";
        this.MoreActionButton = page.getByRole('button', {name: 'More Options'});
        this.DeleteConfirmationButton = page.getByRole('button', { name: 'Delete' });
        this.clickDeleteOptionButton = page.locator("//lyte-menu-item[contains(@id,'drop_action_delete')]");
    }
    /**
     * 
     * @param Company Company Name, use fakerJs to generate realtime company example
     * @param LastName Last Name, use fakerJS to generate realtime LastName
     * @param options LeadInformation: pass it as true only if user wants to fill other fields inthe create Lead page using getters and setters.
     *                AddressInfo: pass it as true only if user wants to fill address information
     *                DescriptionInfo: pass it as true only if user wants to fill DescriptionInfor
     *                EmailOptOut: pass it as true only if user wans to opt for email
     */
     //Note: Needs Improvement. For now, Lead can be created by filling only mandatory information like CompanyName and LastName
    async createNewLead(Company: string, LastName: string, options?: { LeadInformation?: true, AddressInfo?: true, DescriptionInfo?: true, EmailOptOut?: true }) {

        await this.companyTextField.fill(Company);
        await this.LastNameTextField.fill(LastName);

        if (options?.LeadInformation) {
            await this.SalutationDropdown.click();
            await this.SalutationOptions.click();
            await this.FirstNameTextField.fill(LeadInfo.FirstName);
            await this.DesignatinTextField.fill(LeadInfo.Title);
            await this.EmailTextField.fill(LeadInfo.Email);
            await this.PhoneTextField.fill(LeadInfo.Phone);
            await this.FaxTextField.fill(LeadInfo.Fax);
            await this.MobileTextField.fill(LeadInfo.Mobile);
            await this.WebSiteTextField.fill(LeadInfo.WebSite);
            await this.LeadSourceDropdown.click();
            await this.LeadSourceOptions.click();
            await this.LeadStatusDropdown.click();
            await this.LeadStatusOptions.click();
            await this.IndustryDropdown.click();
            await this.IndustryOptions.click();
            await this.EmpCountTextField.fill(LeadInfo.NoOfEmp);
            await this.AnnualRevTextField.fill(LeadInfo.AnnualRev);
            await this.RatingDropdown.click();
            await this.RatingOptions.click();
            await this.SkypeTextField.fill(LeadInfo.SkypeId);
            await this.SecEmailTextField.fill(LeadInfo.SecEmail);
            await this.TwitterTextField.fill(LeadInfo.Twitter);
        }

        if (options?.AddressInfo) {
            await this.StreetTextField.fill(AddInfo.Street);
            await this.CityTextField.fill(AddInfo.City);
            await this.StateTextField.fill(AddInfo.State);
            await this.ZipCodeTextField.fill(AddInfo.ZipCode);
            await this.CountryTextField.fill(AddInfo.Country);
        }

        if (options?.DescriptionInfo) {
            await this.DescriptionTextField.fill(DescInfo.Description);


        }
        if (options?.EmailOptOut) {
            await this.EmailOptOutCheckbox.first().click();
        }
    }

    /**
     * Use this method to click on Create Lead button on the Lead Page
     */
    async clickCreateLead() {
        const createButton = this.CreateLeadButton;
        const createButton1 = this.CreateLeadButton1;
        await createButton.or(createButton1).click();

    }
    /**
     * use this method to click on Save button on the CreateLead Page
     */
    async clickOnSaveButton() {
        await this.SaveButton.click();
    }
    /**
     * 
     * @param companyNameLeadName Pass the CompanyName and LastName to verify if the Lead is shown after clicking on Save button on the create Lead Page
     */
    async verifyLeadCreationSuccess(companyNameLeadName: string) {
        await expect(this.page.getByText(companyNameLeadName)).toBeVisible();
    }

    /**
     * Use this method to click on Back button on the Create Lead Page
     */
    async clickBackButton() {
        await this.BackButton.click();
    }

    /**
     * 
     * @param LastName Pass LastName to check if Lead is not shown in the list page post deletion
     */
    async verifyLeadsNotShownInListPanel(LastName: string) {
        const LeadsTable = this.LeadPageTable;
        const LeadTableRow = LeadsTable.locator(this.LeadPageTableRow);
        const LeadTableData = LeadTableRow.filter({
            hasNot: this.page.getByRole('cell', { name: LastName }),
        });

    }

    /**
     * 
     * @param LastName Pass LastName to verify if Lead is shown in the list page
     * @param options clickLeadName: pass is as true to click on the any lead and verify the detailed view of Lead
     *                LeadTalecolumn: pass it as true, if user wants to verify if Email, Phone and LeadSource value in list panel is correct
     */
    async verifyLeadsInListPanel(LastName: string, options?: { clickLeadName?: true, LeadTableColumn?: true}) {
        const LeadsTable = this.LeadPageTable;
        const LeadTableRow = LeadsTable.locator(this.LeadPageTableRow);
        const LeadTableData = LeadTableRow.filter({
            has: this.page.getByRole('cell', { name: LastName }),
            hasText: LastName,

        });
        if (options?.clickLeadName) {
            await LeadTableData.getByRole('cell', { name: LastName }).click();
        }
        if (options?.LeadTableColumn) {
            await expect(LeadTableData.getByRole('cell', { name: LeadInfo.Email })).toContainText(LeadInfo.Email);
            await expect(LeadTableData.getByRole('cell', { name: LeadInfo.Phone })).toContainText(LeadInfo.Phone);
            await expect(LeadTableData.getByRole('cell', { name: LeadInfo.LeadSource })).toContainText(LeadInfo.LeadSource);
        }

    }

    /**
     * use this method to click on Edit button
     */
    async clickEditButton() {
        await this.EditButton.click();

    }

    /**
     * Use this method to edit the field
     * @param options LeadInformation: pass it as true to edit LeadInformation section field
     *                  DescriptionInfo: pass it as true to edit Description Information section fields 
     *                  EmailOptOut: pass it as true to opt for email
     * 
     */
    //Note: Needs Improvement
    async EditLeadFields(options?: { LeadInformation?: true, AddressInfo?: true, DescriptionInfo?: true, EmailOptOut?: true }) {
        if (options?.LeadInformation) {
            // await this.SalutationDropdown.click();
            // await this.SalutationOptions.click();
            // await this.FirstNameTextField.fill(LeadInfo.FirstName);
            // await this.DesignatinTextField.fill(LeadInfo.Title);
            await this.EmailTextField.fill(LeadInfo.Email);
            await this.PhoneTextField.fill(LeadInfo.Phone);
            // await this.FaxTextField.fill(LeadInfo.Fax);
            // await this.MobileTextField.fill(LeadInfo.Mobile);
            // await this.WebSiteTextField.fill(LeadInfo.WebSite);
            await this.LeadSourceDropdown.click();
            await this.LeadSourceOptions.click();

            // await this.LeadStatusDropdown.click();
            // await this.LeadStatusOptions.click();
            // await this.IndustryDropdown.click();
            // await this.IndustryOptions.click();
            // await this.EmpCountTextField.fill(LeadInfo.NoOfEmp);
            // await this.AnnualRevTextField.fill(LeadInfo.AnnualRev);
            // await this.RatingDropdown.click();
            // await this.RatingOptions.click();
            // await this.SkypeTextField.fill(LeadInfo.SkypeId);
            // await this.SecEmailTextField.fill(LeadInfo.SecEmail);
            // await this.TwitterTextField.fill(LeadInfo.Twitter);
        }

        if (options?.AddressInfo) {
            await this.StreetTextField.fill(AddInfo.Street);
            await this.CityTextField.fill(AddInfo.City);
            await this.StateTextField.fill(AddInfo.State);
            await this.ZipCodeTextField.fill(AddInfo.ZipCode);
            await this.CountryTextField.fill(AddInfo.Country);
        }

        if (options?.DescriptionInfo) {
            await this.DescriptionTextField.fill(DescInfo.Description);


        }
        if (options?.EmailOptOut) {
            await this.EmailOptOutCheckbox.first().click();
        }
    }
    /**
     * use this method to clickonMoreOption in Lead Detail View page
     */
    async clickOnMoreOption() {
        await this.MoreActionButton.click();
    }

    /**
     * Use this method to click on Delete button from Lead Detail View page
     */
    async clickDeleteOption(){
    await this.clickDeleteOptionButton.click();
    }

    /**
     * Use this method to verify the Delete action
     * @param lastName pass LastName to verify the text shown in DeleteConfirmation popup
     */
    async verifyDeleteAction(lastName: string) {

        await expect(this.page.getByText(`Are you sure you want to delete "${lastName}"?`)).toBeVisible();
        await this.DeleteConfirmationButton.click();        
    }

}