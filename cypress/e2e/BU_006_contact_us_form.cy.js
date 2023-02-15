import ContactUs from "../pages/ContactUs.js"
import Header from "../pages/Header.js"
import Constants from "../helper/constants.js"

const contactUs = new ContactUs();
const header = new Header();
const constants = new Constants();


describe('Verify contact us form with valid credentials', () => {
  context('Verify contact us form with valid credentialsr', () =>{

    beforeEach(()=>{
      cy.visit('https://telnyx.com/'); 
      // close "This site uses cookies." pop-up window 
      cy.get('button[aria-label="close and deny"]').click(); // need to check is screen is unlock? 

    }) 

    it('Verify contact us form with valid credentialsr', ()=>{     
      header.clickTalkToAnExpertButton();
      cy.url().should('include', '/contact-us');
      contactUs.setReasonContactSelect(constants.REASON_FOR_CONTACT); 
      contactUs.setFirstNameInput(constants.FULLNAME);
      contactUs.setLastNameInput(constants.LASTNAME);
      contactUs.setEmailInput(constants.EMAIL);
      contactUs.setContactPhoneNumberSelect(constants.COUNTRY_PHONE_NUMBER); 
      contactUs.setPhoneNumberInput(constants.PHONE) 
      contactUs.setWebsiteInput(constants.WEBSITE);
      contactUs.setPrimaryInterestSelect(constants.PRIMARY_INTEREST); 
      contactUs.setAdditionalInformationInput(constants.ADDITIONAL_INFORMATION);
      contactUs.checkSubscriptionInput();  // should be the assertion that the checkbox is checked
      contactUs.getSubmitButton();

    })

  })
})