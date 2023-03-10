import Header from "../pages/Header.js"
import Search from "../pages/Search.js"
import Constants from "../helper/constants.js"

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
                            
            it('If passed than title and/or description of the '+ i +' article have the "'+ constants.SEARCH_WORD +'" word, if failed than title and description of the '+ i +' article do not  have the "' + constants.SEARCH_WORD +'" word' , ()=>{
                cy.softAssert(count < 2, true, 'The title and article do not have the search word');
                cy.softAssertAll();
            }) 
                                    
        } 
    })
  
})