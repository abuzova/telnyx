class Header { 

    //Products submenu

    getElastic_SIP_TrunkingSubMenuItem() {
        return cy.get("header .sc-14c941d7-7 ul>li:nth-child(1) div:nth-child(1)>a");
    }    

    // main menu,  Products submenues

    clickElastic_SIP_TrunkingSubMenuItem(){
        this.getElastic_SIP_TrunkingSubMenuItem().click({ force: true });       
    } 
}

module.exports = Header