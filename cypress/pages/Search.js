class Search{

    getSearchInput() {
        return cy.get('input[id="search"]');
    }

    getTitleArticle(i) {
        return cy.get('[id="articles"]>div:nth-child(2) a:nth-child('+ i +') h2');
    }    

    getArticle(i) {
        return cy.get('[id="articles"]>div:nth-child(2) a:nth-child(' + i + ')');
    }
    
    getArticleFull() {
        return cy.get('article div.Text-sc-5o8owa-0.sc-39b9d282-1.ijJVSH.bARHnM');
    }

    setSearchInput(searchValue){
        this.getSearchInput()
            .type(searchValue)
            .type('{enter}');
    }

    containSearchWordInTitleArticle(searchValue, i){
        cy.wait(3000)
        this.getTitleArticle(i)
            .contains(searchValue, { matchCase: false })
           
    }   

    clickArticle(i){
        this.getArticle(i).click();
    }
    
    containSearchWordInDescriptionFullArticle(searchValue){
        //cy.get('.sc-39b9d282-8.lktGIL').scrollIntoView()
        cy.wait(3000)
        this.getArticleFull()
            .contains(searchValue, { matchCase: false }) 
                       
    }
    
}

module.exports = Search