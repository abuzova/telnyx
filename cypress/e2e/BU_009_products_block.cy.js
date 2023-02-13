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

    it.skip('Work with json file', ()=>{
      //cy.writeFile('path/to/message.txt', 'Hello World')
      //cy.readFile('path/to/message.txt').then((text) => {
      //  expect(text).to.equal('Hello World') // true
      //})
      cy.readFile('D:/Progects/cypress/telnyx/cypress/fixtures/products_url.json')
      .then((text) => {
          //expect(text).to.equal('Hello World') // true
          console.log(text);
      });
      cy.readFile('D:/Progects/cypress/telnyx/cypress/fixtures/products_url.json')
      //.its('VOICE.SIP_Trunking').should('eq', '/products/sip-trunks');
      cy.readFile('D:/Progects/cypress/telnyx/cypress/fixtures/example.json')
      .its('0.name').should('eq', 'Using fixtures to represent data');
    })


    it.skip('loop for links', ()=>{
      header.clickSeeAllProductsSubMenuItem();
      cy.wait(3000); 
     
      //console.log( '@elem'.valueOf );    
      const fruits = [];
      fruits.push("banana", "apple", "peach");
      console.log('fruits.length: ' + fruits.length + '   ' + 'fruits: ' + fruits[0]); // 3
      //checkingLinks.checkLinks(fruits);  
      /*for(let i=0; i<fruits.length; i++){
        console.log('Hello! ' + fruits[i]);
      }*/ 
      
     /* beforeEach(() => {
        cy.fixture('users.json').as('users')
      }) */     
      
        // access the array of users
        cy.get('main div ul:nth-child(2)').as('elems'); 
        cy.get('@elems').then((elems) => {
          // get the first user
          const elem = elems[0];
          console.log(elem);  // html structure
      
          //cy.get('header').contains(elem.name)
       
      })
    })
     
      
    it.skip('disables on click', () => {
        header.clickSeeAllProductsSubMenuItem();
        cy.wait(3000); 
        cy.fixture('products_url.json').as('products_url')
        // access the array of users
        cy.get('@products_url').then((users) => {
          // get the first user
          const user = users[1]
          console.log(user);
      
          cy.get('main div ul:nth-child(2) li:nth-child(1) a').should('have.attr', 'href', user.VOICE.SIP_Trunking)
          
       
      })


    })

      it('first block', ()=>{
        header.clickSeeAllProductsSubMenuItem();
        cy.wait(3000); 
          cy.fixture('products_url.json').as('products_url')
          // access the array of users
          cy.get('@products_url').then((productsUrl) => {
            // get the first user
            const block_1 = productsUrl[0] // VOICE
            console.log(block_1.VOICE);
            for(let i = 0; i<block_1.VOICE.length; i++){
              cy.get('main div ul:nth-child(2) li:nth-child(' + (i+1) +') a').should('have.attr', 'href', block_1.VOICE[i]);
              console.log(cy.get('main div ul:nth-child(2) li:nth-child(' + (i+1) +') a') + "   " + block_1.VOICE[i]);
              //console.log('Hello!' + block_1.VOICE.length);
            } 
          })
      })
  })
})