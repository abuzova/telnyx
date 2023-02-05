import Header from "../pages/Header.js"
import FAQ from "../pages/FAQ.js"

const header = new Header();
const faq = new FAQ();

describe('Checking correct the Main menu work', () => {
  context('Checking correct the "Products" menuitem in the Footer', () =>{

    beforeEach(()=>{
      cy.visit('https://telnyx.com/'); 
      // close "This site uses cookies." pop-up window 
      cy.get('button[aria-label="close and deny"]').click(); // need to check is screen is unlock? 

      header.clickElastic_SIP_TrunkingSubMenuItem();            
      cy.url().should('include', '/products/sip-trunks');  

    })

    it('Click on the "How many SIP trunks do I need?" block', () =>{ 
      faq.clickSecondBlock();  
      faq.shouldSecondDescriptionBlock();
    })

    it('Click on the "How much does SIP trunking cost?" block', () =>{     
      faq.clickThirdBlock();      
      faq.shouldThirdDescriptionBlock()    
    })

    it('Click on the "How many SIP trunks do I need?" block', () =>{     
      faq.clickFourthBlock();      
      faq.shouldFourthDescriptionBlock();     
    })

    it('Click on the "How can I get started with SIP trunking?" block', () =>{     
      faq.clickFifthBlock();
      faq.shouldFifthDescriptionBlock();
    })

    it('Click on the "How do I configure SIP trunks?" block', () =>{     
      faq.clickSixthBlock(); 
      faq.shouldSixthDescriptionBlock(); 
    })

    it('Click on the "What is SIP trunking?" block', () =>{ 
      faq.clickFirstBlock();
      faq.shouldFirstDescriptionBlock();
            
    })
  })
})