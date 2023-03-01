import Header from "../pages/Header.js"
import Search from "../pages/Search.js"
import Constants from "../helper/Constants.js"

const header = new Header();
const search = new Search();
const constants = new Constants();

describe('Describe Verify search in the Blog page', () => {
   
    let count = 0;       
      
    context('It Verify search in the Blog page', ()=>{

        const numberArticlesLoop = constants.NUMBER_ARTICLES +1;  
                    
        for(let i=1; i<numberArticlesLoop; i++){ 

            it('Title in the ' + i + ' article', ()=>{

                count = 0;
                
                cy.visit('https://telnyx.com/');                
                // close "This site uses cookies." pop-up window 
                cy.get('button[aria-label="close and deny"]').click();  // !!!! make if x button - true, then click        
                // Click on the "Resources --> Blog" menu item	
                header.clickBlogSubMenuItem();            
                cy.url().should('include', '/resources');
                
                search.setSearchInput(constants.SEARCH_WORD);   
                cy.wait(3000);  
            
                search.containSearchWordInTitleArticle(constants.SEARCH_WORD, i);  
                    
                cy.on('fail', (e, runnable) => {                    
                    if (e.name === 'AssertionError') {        
                    count++;
                    console.log('count ' + count);
                    return false         
                    }                
                })
            }) 
            
            it('Description ' + i + ' article', ()=>{ 
                cy.visit('https://telnyx.com/');
                
                // close "This site uses cookies." pop-up window 
                cy.get('button[aria-label="close and deny"]').click();        
                // Click on the "Resources --> Blog" menu item	
                header.clickBlogSubMenuItem();            
                cy.url().should('include', '/resources'); 
                
                search.setSearchInput(constants.SEARCH_WORD);   
                cy.wait(3000);

                search.clickArticle(i);
                search.containSearchWordInDescriptionFullArticle(constants.SEARCH_WORD);
        
                cy.on('fail', (e, runnable) => {        
                    if (e.name === 'AssertionError') {         
                        count++;
                        console.log('count ' + count);
                        return false;        
                    }      
                })
            })                  
                            
            it('is count == 0 or 1?', ()=>{
                cy.softAssert(count < 2, true, 'The title and article do not have the search word');
                cy.softAssertAll();
            }) 
                                    
        } 
    })
  
})