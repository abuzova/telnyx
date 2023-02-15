import Header from "../pages/Header.js"
import DownloadForm from "../pages/DownloadForm.js"
import Constants from "../helper/constants.js"
import Footer from "../pages/Footer.js";

const header = new Header();
const downloadForm = new DownloadForm();
const constants = new Constants();
const footer = new Footer();


describe('Verify Download SIP Trunking pricing form with valid credentials', () => {
  context('Verify Download SIP Trunking pricing form with valid credentials', () =>{

    beforeEach(()=>{
      cy.visit('https://telnyx.com/'); 
      // close "This site uses cookies." pop-up window 
      cy.get('button[aria-label="close and deny"]').click(); // need to check is screen is unlock? 

    }) 

    it('Verify Download SIP Trunking pricing form with valid credentials', ()=>{      
      header.clickElasticSIPTrunkingSubMenuItem();
      
      
      cy.wait(3000);  // waiting for full loading the https://telnyx.com/pricing/elastic-sip page 
      footer.getFooterBlock().scrollIntoView({ duration: 2000 });  // scroll for load "Download form"  
          
      downloadForm.setFirstNameInput(constants.FULLNAME);
      downloadForm.setLastNameInput(constants.LASTNAME);
      downloadForm.setEmailInput(constants.EMAIL);
      downloadForm.checkSubscriptionInput();          
      downloadForm.getDownloadCSVButton();
    })
  })
 })