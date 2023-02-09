import Header from "../pages/Header.js"
import ProductsPage from "../pages/ProductsPage.js"
import CheckingLinks from "../helper/checking_links.js"

const header = new Header();
const productsPage = new ProductsPage();
const checkingLinks = new CheckingLinks();

describe('Testing Products block on the Product page', () => {  // need loop
  context('Testing Products block on the Product page', () =>{

    beforeEach(()=>{
      cy.visit('https://telnyx.com/'); 
      // close "This site uses cookies." pop-up window 
      cy.get('button[aria-label="close and deny"]').click(); // need to check is screen is unlock? 

    }) 

    it.skip('Testing Products block on the Product page', ()=>{
      //footer.clickElasticSIPTrunkingMenuItem();
      //cy.url().should('include', '/products/sip-trunks'); 
      header.clickSeeAllProductsSubMenuItem();
      //cy.wait(2000);
      //cy.go('back');
    })

    it('test', ()=>{
      value = Array('1', '2', '3', '4', '5');
      checkingLinks.checkLinks(value);
    })
  })
})