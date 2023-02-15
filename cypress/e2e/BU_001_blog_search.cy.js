import Header from "../pages/Header.js"
import Search from "../pages/Search.js"
import Constants from "../helper/Constants.js"
//import { it } from "node:test";

const header = new Header();
const search = new Search();
const constants = new Constants();

describe('Verify search in the Blog page', () => {
  context('', () =>{

    beforeEach(()=>{
      //cy.visit('https://telnyx.com/'); 
      // close "This site uses cookies." pop-up window 
      //cy.get('button[aria-label="close and deny"]').click(); // need to check is screen is unlock? 

      // Click on the "Resources --> Blog" menu item	
      //header.clickBlogSubMenuItem();            
      //cy.url().should('include', '/resources');  

      cy.fixture('q1pass.json').as('qpasses')
      cy.fixture('users-admins.json').as('admins')

    })

    it.skip('Enter search word in the Search field and press the "Enter"', () =>{ 
        search.setSearchInput(constants.SEARCH_WORD);
        search.containSearchWordInTitleArticle1(constants.SEARCH_WORD);
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

    it.skip('is doing something very important', (done) => {
      cy.on('uncaught:exception', (err, runnable) => {
        expect(err.message).to.include('something about the error')
    
        // using mocha's async done callback to finish
        // this test so we prove that an uncaught exception
        // was thrown
        done()
    
        // return false to prevent the error from
        // failing this test
        return false
      })

      search.setSearchInput(constants.SEARCH_WORD);
      search.containSearchWordInTitleArticle1(constants.SEARCH_WORD);
      
      // this event will automatically be unbound when this
      // test ends because it's attached to 'cy'
     
      search.clickArticle1();
      search.containSearchWordInDescriptionNewArticle1(constants.SEARCH_WORD);
    
      // assume this causes an error
      //cy.get('.sc-592eb4a0-1').should('have.text', 'SMS survey examples and best practices');
    })

    it.skip('Enter search word in the Search field and press the "Enter"', () =>{ 
      search.setSearchInput(constants.SEARCH_WORD);
      search.containSearchWordInTitleArticle2(constants.SEARCH_WORD);
      search.clickArticle2();
      search.containSearchWordInDescriptionNewArticle2(constants.SEARCH_WORD);
    })

    it.skip("softAssert test", function() {
        let actual = _.cloneDeep(json);
        let expected = _.cloneDeep(json);
        jsonAssertion.softAssert(actual, expected, "assertion error for softAssert 1");
        expected.glossary.GlossDiv.GlossList2 = "something";
        jsonAssertion.softAssert(actual, expected, "assertion error for softAssert 2", ["GlossList2"]);
        expected.glossary.GlossDiv.GlossList.GlossEntry.GlossDef.GlossSeeAlso = ["some2"];
        delete expected.glossary.GlossDiv.GlossList.GlossEntry.GlossDef.para;
        jsonAssertion.softAssert(actual, expected, "assertion error for softAssert 3");
        jsonAssertion.softAssert(actual, expected, "assertion error for softAssert 4");
        jsonAssertion.softAssertAll();
      })

      it("new example", function (){
         
          const qExpected = ['q1Passed', 'q2Passed', 'q3Passed']
          const qPassed = []

          // isElementVisible receives the css locator required to find the element, in this case saved into the variable fixture.errorAlert. Then if the element is present you put one element of the first array within the second one.
         
          
         
          console.log('Hello! : ' + this.admins[0].admin);
          cy.log(`There are ${this.qpasses.length} administrators.`);
          console.log('Hello: ' + this.qpasses[0].q1Passed);

          if (cy.isElementVisible(this.qpasses)) {
                  qPassed.push(qExpected[0])
                  qPassed.push(qExpected[1])
                  qPassed.push(qExpected[2])
          }

          // Thereafter, you repeat the same condition as many time as needed and according the number of element defined in your array.

          // Finally, you if compare the first array contains all the element that you were expected. So that your test does not fail until this point.
          //expect(qPassed).to.have.members(qExpected)
      })

  })
})