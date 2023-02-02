import Header from "../pages/Header.js"
import SignUp from "../pages/SignUp.js"
import Constants from "../helper/constants.js"

const header = new Header();
const signup = new SignUp();
const constants = new Constants();

describe('template spec', () => {
  context('Verify registering with valid credentials', () =>{
    beforeEach(()=>{
      cy.visit('https://telnyx.com/'); 
      // close "This site uses cookies." pop-up window 
      cy.get('button[aria-label="close and deny"]').click(); // need to check is screen is unlock?       

      header.clickSignUpLink();

    })

    it('Type the correct email into the "Work email" field', () =>{      
      signup.setEmailInput(constants.EMAIL); 
      signup.setFullNameInput(constants.FULLNAME);
      signup.setPasswordInput(constants.PASSWORD); 
      signup.clickTermsAndConditionsInput();
      signup.clickSubscriptionInput();        
    })   

  })

})