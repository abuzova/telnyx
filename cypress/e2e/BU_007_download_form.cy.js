import Header from "../pages/Header.js"
import DownloadForm from "../pages/DownloadForm.js"
import Constants from "../helper/constants.js"


const header = new Header();
const downloadForm = new DownloadForm();
const constants = new Constants();


describe('Verify Download SIP Trunking pricing form with valid credentials', () => {
  context('Verify Download SIP Trunking pricing form with valid credentials', () =>{

    beforeEach(()=>{
      cy.visit('https://telnyx.com/'); 
      // close "This site uses cookies." pop-up window 
      cy.get('button[aria-label="close and deny"]').click(); // need to check is screen is unlock? 

    }) 

    it('Verify Download SIP Trunking pricing form with valid credentials', ()=>{      
      header.clickElasticSIPTrunkingSubMenuItem(); 
      //cy.get('#pricing_download_form>div>div>div>.Text-sc-5o8owa-0:nth-child(1)').scrollIntoView();     
      //cy.get('#pricing_download_form div .Text-sc-5o8owa-0').scrollIntoView();
      cy.wait(50000); 
      cy.get('footer[class="sc-7b6c9f9b-0 dKHwUU"]').scrollIntoView({ duration: 2000 });
      
      //cy.get('#pricing_download_form>div>div>div>.Text-sc-5o8owa-0:nth-child(1)').scrollIntoView({ duration: 2000 });    
      downloadForm.setFirstNameInput(constants.FULLNAME);
      downloadForm.setLastNameInput(constants.LASTNAME);
      downloadForm.setEmailInput(constants.EMAIL);
      downloadForm.checkSubscriptionInput();
      downloadForm.getDownloadCSVButton();

    })

  })
 })