class TalkToExpert{
    getReportAbuseForm(){
        return cy.xpath('//main//ul//following-sibling::li/following-sibling::li/p/a');
    }

    clickReportAbuseForm(){
        this.getReportAbuseForm().click();
    }

}

module.exports = TalkToExpert