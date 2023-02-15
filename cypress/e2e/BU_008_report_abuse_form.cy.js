import Header from "../pages/Header.js"
import SipTrunks from "../pages/SipTrunks.js"
import TalkToExpert from "../pages/TalkToExpert.js"
import ReportAbuse from "../pages/ReportAbuse.js"
import Constants from "../helper/constants.js"

const header = new Header();
const siptrunks = new SipTrunks();
const talkToExpert = new TalkToExpert();
const reportAbuse = new ReportAbuse();
const contants = new Constants();


describe('Verify Report Abuse form with valid credentials', () => {
  context('Verify Report Abuse form with valid credentials', () =>{

    beforeEach(()=>{
      cy.visit('https://telnyx.com/'); 
      // close "This site uses cookies." pop-up window 
      cy.get('button[aria-label="close and deny"]').click(); // need to check is screen is unlock?
      header.clickElastic_SIP_TrunkingSubMenuItem();
      cy.url().should('include', '/products/sip-trunks');
      siptrunks.clickTalkToExpertButton();
      cy.url().should('include', '/contact-us');
      talkToExpert.clickReportAbuseForm();
      cy.url().should('include', '/report-abuse');     

    }) 

    it('Verify Report Abuse form with valid credentials', ()=>{
      reportAbuse.setSubjectInput(contants.SUBJECT);
      reportAbuse.setAbusivePhoneNumberInput(contants.ABUSIVE_PHONE_NUMBER);
      reportAbuse.setAbusedPhoneNumberInput(contants.ABUSED_PHONE_NUMBER);
      reportAbuse.setDateTimeInput(contants.DAY_NUMBER);
      reportAbuse.clickServiceAbusedVoiceInput();
      reportAbuse.clickServiceAbusedSmsInput();
      reportAbuse.setLastNameInput(contants.LASTNAME);
      reportAbuse.setEmailInput(contants.EMAIL);
      reportAbuse.setLongDescriptionInput(contants.LONG_DESCRIPTION);
    })

  })

})
