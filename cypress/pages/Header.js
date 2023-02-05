class Header { 

    //Resources submenu 

    getBlogSubMenuItem() {
        return cy.xpath('//header//ul[@class="sc-14c941d7-4 jgxzDd"]/li//span[text()="Blog"]');
    }

    // main menu,  Resources submenu 

    clickBlogSubMenuItem(){
        this.getBlogSubMenuItem().click({ force: true });       
    }
}

module.exports = Header