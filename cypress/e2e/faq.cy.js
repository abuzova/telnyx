import Header from "../pages/Header.js"
import FAQ from "../pages/FAQ.js"

const header = new Header();
const faq = new FAQ();

describe('Testing "Frequently Asked Questions" block work', () => {
  context('Testing "Frequently Asked Questions" block work', () =>{

    //beforeEach(()=>{
      before(()=>{
      cy.visit('https://telnyx.com/'); 
      // close "This site uses cookies." pop-up window 
      cy.get('button[aria-label="close and deny"]').click(); // need to check is screen is unlock? 

      header.clickElastic_SIP_TrunkingSubMenuItem();            
      cy.url().should('include', '/products/sip-trunks');  

    })

    it('Testing "Frequently Asked Questions" block work', () =>{
      //'Click on the "How many SIP trunks do I need?" block' 
      faq.clickSecondBlock();  
      faq.shouldSecondDescriptionBlock();
      //'Click on the "How much does SIP trunking cost?" block'
      faq.clickThirdBlock();      
      faq.shouldThirdDescriptionBlock()
      //'Click on the "How many SIP trunks do I need?" block'
      faq.clickFourthBlock();      
      faq.shouldFourthDescriptionBlock(); 
      //'Click on the "How can I get started with SIP trunking?" block'
      faq.clickFifthBlock();
      faq.shouldFifthDescriptionBlock();
      //'Click on the "How do I configure SIP trunks?" block' 
      faq.clickSixthBlock(); 
      faq.shouldSixthDescriptionBlock();
      //'Click on the "What is SIP trunking?" block' 
      faq.clickFirstBlock();
      faq.shouldFirstDescriptionBlock();

    })   
  })
})