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
      contactUs.setReasonContactSelect();  // can bee random
      contactUs.setFirstNameInput(constants.FULLNAME);
      contactUs.setLastNameInput(constants.LASTNAME);
      contactUs.setEmailInput(constants.EMAIL);
      contactUs.setContactPhoneNumberSelect(); // can bee random
      contactUs.setPhoneNumberInput(constants.PHONE) // can bee random
      contactUs.setWebsiteInput(constants.WEBSITE);
      contactUs.setPrimaryInterestSelect(constants.PRIMARY_INTEREST); // can bee random
      contactUs.setAdditionalInformationInput(constants.ADDITIONAL_INFORMATION);
      contactUs.checkSubscriptionInput();
      contactUs.getSubmitButton();

    })

  })
})