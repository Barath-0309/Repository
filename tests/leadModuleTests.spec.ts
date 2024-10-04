import { expect, Page, test } from "@playwright/test";
import { LoginPage } from "../pages/loginPage";
import { CRMHomePage } from "../pages/zohoCRM_HomePage";
import { QA1 } from "../utils/env";
import { CRM_Modules } from "../constants/CRMPageConstants";
import { CRMLeadsPage } from "../pages/leadsPage.ts";
import { faker } from '@faker-js/faker';


let page: Page
let loginPage: LoginPage
let crmHomePage: CRMHomePage
let leadsPage: CRMLeadsPage



test.beforeAll(async ({ browser }) => {
  page = await browser.newPage();
  loginPage = new LoginPage(page);
  crmHomePage = new CRMHomePage(page);
  leadsPage = new CRMLeadsPage(page);


  await test.step(`Login to Zoho CRM application with EmailAdd: ${QA1.email} and password ${QA1.password}`, async () => {
    await loginPage.goToUrl(`${QA1.URL}`);
    await loginPage.LoginToApplication(`${QA1.email}`, `${QA1.password}`);
  await test.step(`Click on Lead Module `, async () => {
      await crmHomePage.verifyCRMHomePageTitle();
    });
  });


});

test.describe(`Lead Module Testing`, async () => {
  test.describe.configure({mode: "serial"});
  const companyName = faker.company.name();
  const lastName = faker.person.lastName();
  const companyLastName = lastName + " - " + companyName + "  Add Tags";

  test('Verify the creation of New Lead', async ({ }) => {

    await test.step(`Navigate to Lead Module`, async () => {
      await crmHomePage.clickOnMenu(`${CRM_Modules.Leads}`);
    });

    await test.step(`Click on CreateLead button`, async () => {
      await leadsPage.clickCreateLead();
    });

    await test.step(`Fill all the required details in Create Lead Page`, async () => {
      await leadsPage.createNewLead(companyName, lastName);
    });

    await test.step(`click on Save button`, async () => {
      await leadsPage.clickOnSaveButton();
    });

    await test.step(`Verify Lead creation is successful`, async () => {
      await leadsPage.verifyLeadCreationSuccess(companyLastName);
    });

    await test.step(`click on Back button`, async () => {
      await leadsPage.clickBackButton();
    });

    await test.step(`Verify the Lead created above is shown in the List Page`, async () => {
      await leadsPage.verifyLeadsInListPanel(lastName);
    });
  });

  test(`Select the Lead from list panel, click on Edit and update few fields and save it`, async ({ }) => {
    await test.step(`Navigate to Lead Module`, async () => {
      await crmHomePage.clickOnMenu(`${CRM_Modules.Leads}`);
    });

    await test.step(`Click on  Lead ${lastName} hyperlink, click on Edit button `, async () => {
      await leadsPage.verifyLeadsInListPanel(lastName, { clickLeadName: true });
      await leadsPage.clickEditButton();
    });

    await test.step(`Update few field in the Edit Lead Page and click on Save button`, async () => {
      await leadsPage.EditLeadFields({ LeadInformation: true });
      await leadsPage.clickOnSaveButton();
    });

    await test.step(`click on Back button and verify updated value is shown in the list panel `, async () => {
      await leadsPage.clickBackButton();
      await leadsPage.verifyLeadsInListPanel(lastName, { LeadTableColumn: true });
    });    

  });

  test(`Select the Lead from list panel and Delete the Delete`, async ({ }) => {

    await test.step(`Navigate to Lead Module`, async () => {
      await crmHomePage.clickOnMenu(`${CRM_Modules.Leads}`);
    });

    await test.step(`Select the checkbox and click on Delete button`, async () => {
      await leadsPage.verifyLeadsInListPanel(lastName, {clickLeadName:true});
      await leadsPage.clickOnMoreOption();
      await leadsPage.clickDeleteOption();
      await leadsPage.verifyDeleteAction(lastName);
    });

    await test.step(`Navigate to Lead Module`, async () => {
      await crmHomePage.clickOnMenu(`${CRM_Modules.Leads}`);
    });
    
    await test.step(`Verify deleted Lead is not shown in the list panel`, async () => {
      await leadsPage.verifyLeadsNotShownInListPanel(lastName);
    });
    
  })
  



});
