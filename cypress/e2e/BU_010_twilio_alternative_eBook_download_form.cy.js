import Header from "../pages/Header.js"
import Blog from "../pages/Blog.js"
import EBookDownload from "../pages/EBookDownload.js"
import Constants from "../helper/constants.js";

const header = new Header();
const blog = new Blog();
const eBookDownload = new EBookDownload();
const constants = new Constants();


describe('Verify "Twilio Alternative eBook Download" form with valid credentials', () => {
  context('Verify "Twilio Alternative eBook Download" form with valid credentials', () =>{

    beforeEach(()=>{
      cy.visit('https://telnyx.com/'); 
      // close "This site uses cookies." pop-up window 
      cy.get('button[aria-label="close and deny"]').click(); // need to check is screen is unlock? 

    }) 

    it('Verify "Twilio Alternative eBook Download" form with valid credentials', ()=>{
      //footer.clickElasticSIPTrunkingMenuItem();
      //cy.url().should('include', '/products/sip-trunks');
      header.clickBlogSubMenuItem();
      cy.wait(2000);
      blog.clickGeteBookButton();

      eBookDownload.setFirstNameInput(constants.FULLNAME);
      eBookDownload.setLastNameInput(constants.LASTNAME);
      eBookDownload.setCompanyNameInput(constants.COMPANY);
      eBookDownload.setEmailInput(constants.EMAIL);
      eBookDownload.checkReceiveEmailsTelnyxInput();      
      eBookDownload.getSendMyContentButton();
    })

  })
})