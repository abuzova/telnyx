import Header from "../pages/Header.js"
const header = new Header();

describe('Testing Products block on the Product page', () => {  
  context('Testing Products block on the Product page', () =>{

    beforeEach(()=>{
      cy.visit('https://telnyx.com/'); 
      // close "This site uses cookies." pop-up window 
      cy.get('button[aria-label="close and deny"]').click();
      header.clickSeeAllProductsSubMenuItem();
      cy.wait(3000);
    }) 

    it('VOICE block', ()=>{
     
        cy.fixture('products_url.json').as('products_url')
        // access the array of links
        cy.get('@products_url').then((productsUrl) => {          
          
          console.log('Hello it is arrays' + productsUrl[1].MESSAGING);

          // get the first block
          const block_1 = productsUrl[0]; // VOICE
          //console.log(block_1.VOICE);
          
          for(let i = 0; i<block_1.VOICE.length; i++){
            cy.get('main div ul:nth-child(2) li:nth-child(' + (i+1) +') a').as('subBlock')
            cy.get('@subBlock').should('have.attr', 'href', block_1.VOICE[i]);            
            //console.log("   " + block_1.VOICE[i]);          
          } 
        })
    })

    it('MESSAGING block', ()=>{
        cy.fixture('products_url.json').as('products_url');
        // access the array of links
        cy.get('@products_url').then((productsUrl) => { 

          // get the second block
          const block_2 = productsUrl[1]; // MESSAGING
          //console.log(block_2.MESSAGING);
          
          for(let i = 0; i<block_2.MESSAGING.length; i++){
            cy.get('main div ul:nth-child(4) li:nth-child(' + (i+1) +') a').as('subBlock2'); 
            cy.get('@subBlock2').should('have.attr', 'href', block_2.MESSAGING[i]);            
            //console.log("   " + block_2.MESSAGING[i]);            
          } 
        })
    })
    it('FAX block', ()=>{
      cy.fixture('products_url.json').as('products_url');
        // access the array of links
        cy.get('@products_url').then((productsUrl) => { 

          // get the second block
          const block_3 = productsUrl[2]; // FAX
          //console.log(block_3.FAX);
          
          for(let i = 0; i<block_3.FAX.length; i++){
            cy.get('main div ul:nth-child(6) li:nth-child(' + (i+1) +') a').as('subBlock3'); 
            cy.get('@subBlock3').should('have.attr', 'href', block_3.FAX[i]);            
            //console.log("   " + block_3.FAX[i]);            
          } 
        })
    })
    it('NUMBERS block', ()=>{
      cy.fixture('products_url.json').as('products_url');
        // access the array of links
        cy.get('@products_url').then((productsUrl) => { 

          // get the second block
          const block_4 = productsUrl[3]; // NUMBERS
          //console.log(block_4.NUMBERS);
          
          for(let i = 0; i<block_4.NUMBERS.length; i++){
            cy.get('main div ul:nth-child(8) li:nth-child(' + (i+1) +') a').as('subBlock4'); 
            cy.get('@subBlock4').should('have.attr', 'href', block_4.NUMBERS[i]);            
            //console.log("   " + block_4.NUMBERS[i]);            
          } 
        })
    })
    it('WIRELESS block', ()=>{
      cy.fixture('products_url.json').as('products_url');
      // access the array of links
      cy.get('@products_url').then((productsUrl) => { 

        // get the second block
        const block_5 = productsUrl[4]; // WIRELESS
        //console.log(block_5.WIRELESS);
        
        for(let i = 0; i<block_5.WIRELESS.length; i++){
          cy.get('main div ul:nth-child(10) li:nth-child(' + (i+1) +') a').as('subBlock5'); 
          cy.get('@subBlock5').should('have.attr', 'href', block_5.WIRELESS[i]);            
          //console.log("   " + block_5.WIRELESS[i]);            
        } 
      })
    })
    it('IDENTITY_and_DATA block', ()=>{
      cy.fixture('products_url.json').as('products_url');
      // access the array of links
      cy.get('@products_url').then((productsUrl) => { 

        // get the second block
        const block_6 = productsUrl[5]; // IDENTITY_and_DATA
        //console.log(block_6.IDENTITY_and_DATA);
        
        for(let i = 0; i<block_6.IDENTITY_and_DATA.length; i++){
          cy.get('main div ul:nth-child(12) li:nth-child(' + (i+1) +') a').as('subBlock6'); 
          cy.get('@subBlock6').should('have.attr', 'href', block_6.IDENTITY_and_DATA[i]);            
          //console.log("   " + block_6.IDENTITY_and_DATA[i]);            
        } 
      })
    })
    it('NETWORKING block', ()=>{
      cy.fixture('products_url.json').as('products_url');
      // access the array of links
      cy.get('@products_url').then((productsUrl) => { 

        // get the second block
        const block_7 = productsUrl[6]; // NETWORKING
        //console.log(block_7.NETWORKING);
        
        for(let i = 0; i<block_7.NETWORKING.length; i++){
          cy.get('main div ul:nth-child(14) li:nth-child(' + (i+1) +') a').as('subBlock7'); 
          cy.get('@subBlock7').should('have.attr', 'href', block_7.NETWORKING[i]);            
          //console.log("   " + block_7.NETWORKING[i]);            
        } 
      })
    }) 
  })
})