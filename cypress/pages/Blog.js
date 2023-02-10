class Blog{

    getGeteBookButton(){
        return cy.get('main div>div:nth-child(3)>a');
    }

    clickGeteBookButton(){
        this.getGeteBookButton().click();
    }


}

module.exports = Blog