import Header from "../pages/Header.js"
import Search from "../pages/Search.js"
import Constants from "../helper/Constants.js"

const header = new Header();
const search = new Search();
const constants = new Constants();


describe('Verify search in the Blog page', () => {
    context('', () =>{

        beforeEach(() => {
            cy.fixture('users-admins.json').as('admins')
        })
        
        it('the users fixture is bound to this.admins', function () {
            console.log('Hello! : ' + this.admins[0].admin);
            cy.log(`There are ${this.admins.length} administrators.`)
        })


    
    })
})