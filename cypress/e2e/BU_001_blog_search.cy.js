import Header from "../pages/Header.js"
import Search from "../pages/Search.js"
import Constants from "../helper/Constants.js"

const header = new Header();
const search = new Search();
const constants = new Constants();

describe('Verify search in the Blog page', () => {
  context('', () =>{

    beforeEach(()=>{
      cy.visit('https://telnyx.com/'); 
      // close "This site uses cookies." pop-up window 
      cy.get('button[aria-label="close and deny"]').click(); // need to check is screen is unlock? 

      // Click on the "Resources --> Blog" menu item	
      header.clickBlogSubMenuItem();            
      cy.url().should('include', '/resources');  

    })

    it('Enter search word in the Search field and press the "Enter"', () =>{ 
        search.setSearchInput(constants.SEARCH_WORD);
        //search.containSearchWordInTitleArticle1(constants.SEARCH_WORD);
        search.clickArticle1();
        search.containSearchWordInDescriptionNewArticle1(constants.SEARCH_WORD);

       /* let zeroOrOneError = true;
        for (let i = 1; i < 21; i += 2) {
          const previousErrorsCount = test.info().errors.length; // 

          let searchResultTitle = page.locator('dl#search-results :nth-child('+ i +').wiki-page'); 
          let searchResultDescription = page.locator('dl#search-results :nth-child('+ (i + 1) +') span.description');   
          await expect.soft(searchResultTitle).toHaveText(searchWordRegExp, {ignoreCase:true} );
          await expect.soft(searchResultDescription).toHaveText(searchWordRegExp, {ignoreCase:true} );
          
          // 
          const newErrorsCount = test.info().errors.length - previousErrorsCount; // 0, 1, 2    

          if (newErrorsCount > 1) {
            zeroOrOneError = false;
          }
        }
        test.fail(zeroOrOneError, 'Failing because more than one error');

        */
        
    })

    it.skip('Enter search word in the Search field and press the "Enter"', () =>{ 
      search.setSearchInput(constants.SEARCH_WORD);
      search.containSearchWordInTitleArticle2(constants.SEARCH_WORD);
      search.clickArticle2();
      search.containSearchWordInDescriptionNewArticle2(constants.SEARCH_WORD);
    })

  })
})