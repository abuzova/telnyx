class Search{

    getSearchInput() {
        return cy.get('input[id="search"]');
    }

    getTitleArticle1() {
        return cy.get('[id="articles"]>div:nth-child(2) a:nth-child(1) h2.Text-sc-5o8owa-0');
    }

    getTitleArticle2() {
        return cy.get('[id="articles"]>div:nth-child(2) a:nth-child(2) h2.Text-sc-5o8owa-0');
    }

    getArticle1() {
        return cy.get('[id="articles"]>div:nth-child(2) a:nth-child(1)');
    }
    
    getArticleNew1() {
        return cy.get('article div.Text-sc-5o8owa-0.sc-39b9d282-1.ijJVSH.bARHnM');
    }

    getArticle2() {
        return cy.get('[id="articles"]>div:nth-child(2) a:nth-child(1)');
    }
    
    getArticleNew2() {
        return cy.get('article div.Text-sc-5o8owa-0.sc-39b9d282-1.ijJVSH.bARHnM');
    }
    

    setSearchInput(searchValue){
        this.getSearchInput()
            .type(searchValue)
            .type('{enter}');
    }

    containSearchWordInTitleArticle1(searchValue){
       this.getTitleArticle1().should('have.text', searchValue)
    }

    containSearchWordInTitleArticle2(searchValue){        
        this.getTitleArticle2().contains(searchValue, { matchCase: false })      
     }

    clickArticle1(){
        this.getArticle1().click();
    }

    clickArticle2(){
        this.getArticle2().click();
    }

    containSearchWordInDescriptionNewArticle1(searchValue){
        this.getArticleNew1()
            .contains(searchValue, { matchCase: false })            
    }

   /*containSearchWordInDescriptionArticle2(searchValue){
        this.clickArticle()
            .should('have.text', searchValue)
    }*/

    containSearchWordInDescriptionNewArticle2(searchValue){
        this.getArticleNew2()
            .contains(searchValue, { matchCase: false })            
    }

    
}

module.exports = Search