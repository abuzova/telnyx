class SipTrunks{
    getTalkToExpertButton(){
        return cy.xpath('//main//h1//following-sibling::div/div/a');
    }

    clickTalkToExpertButton(){
        this.getTalkToExpertButton().click();
    }

}

module.exports = SipTrunks