class FAQ {     

    getFirstBlock() {
        return cy.get('button[aria-controls="faq1_description"]');
    } 
    
    getSecondBlock() {
        return cy.get('button[aria-controls="faq2_description"]');
    } 

    getThirdBlock() {
        return cy.get('button[aria-controls="faq3_description"]');
    } 

    getFourthBlock() {
        return cy.get('button[aria-controls="faq4_description"]');
    } 

    getFifthBlock() {
        return cy.get('button[aria-controls="faq5_description"]');
    } 

    getSixthBlock() {
        return cy.get('button[aria-controls="faq6_description"]');
    }
    
    getFirstDescriptionBlock() {
        return cy.xpath('//button[@aria-controls="faq1_description"]/../following-sibling::dd[@class="sc-fec4993d-8 iSMUTp"]');
    } 
    
    getSecondDescriptionBlock() {
        return cy.xpath('//button[@aria-controls="faq2_description"]/../following-sibling::dd[@class="sc-fec4993d-8 iSMUTp"]');
    } 

    getThirdDescriptionBlock() {
        return cy.xpath('//button[@aria-controls="faq3_description"]/../following-sibling::dd[@class="sc-fec4993d-8 iSMUTp"]');
    } 

    getFourthDescriptionBlock() {
        return cy.xpath('//button[@aria-controls="faq4_description"]/../following-sibling::dd[@class="sc-fec4993d-8 iSMUTp"]');
    } 

    getFifthDescriptionBlock() {
        return cy.xpath('//button[@aria-controls="faq5_description"]/../following-sibling::dd[@class="sc-fec4993d-8 iSMUTp"]');
    } 

    getSixthDescriptionBlock() {
        return cy.xpath('//button[@aria-controls="faq6_description"]/../following-sibling::dd[@class="sc-fec4993d-8 iSMUTp"]');
    } 
    
    //.should('have.css', 'font-family') 

    clickFirstBlock(){
        this.getFirstBlock().click();       
    } 

    clickSecondBlock(){
        this.getSecondBlock().click();       
    } 

    clickThirdBlock(){
        this.getThirdBlock().click();       
    } 

    clickFourthBlock(){
        this.getFourthBlock().click();       
    } 

    clickFifthBlock(){
        this.getFifthBlock().click();       
    } 

    clickSixthBlock(){
        this.getSixthBlock().click();       
    }

    shouldFirstDescriptionBlock(){
        this.getFirstBlock()
        .should('have.css', 'padding-bottom', '28px')       
        .should('have.css', 'opacity', '1');       
    } 

    shouldSecondDescriptionBlock(){
        this.getSecondDescriptionBlock()
        .should('have.css', 'padding-bottom', '28px')       
        .should('have.css', 'opacity', '1');         
    } 

    shouldThirdDescriptionBlock(){
        this.getThirdDescriptionBlock()
        .should('have.css', 'padding-bottom', '28px')       
        .should('have.css', 'opacity', '1');        
    } 

    shouldFourthDescriptionBlock(){
        this.getFourthDescriptionBlock()
        .should('have.css', 'padding-bottom', '28px')       
        .should('have.css', 'opacity', '1');        
    } 

    shouldFifthDescriptionBlock(){
        this.getFifthDescriptionBlock()
        .should('have.css', 'padding-bottom', '28px')       
        .should('have.css', 'opacity', '1');        
    } 

    shouldSixthDescriptionBlock(){
        this.getSixthDescriptionBlock()
        .should('have.css', 'padding-bottom', '28px')       
        .should('have.css', 'opacity', '1');       
    }
}

module.exports = FAQ