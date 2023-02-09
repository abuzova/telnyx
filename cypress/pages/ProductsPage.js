class ProductsPage{

    // VOICE

    getSIPTrunkingBlock(){
        return cy.get('main div ul:nth-child(2) li:nth-child(1)');
    }

    getVoiceAPIBlock(){
        return cy.get('main div ul:nth-child(2) li:nth-child(2)');
    }

    getOutboundCallingBlock(){
        return cy.get('main div ul:nth-child(2) li:nth-child(3)');
    }

    getTelnyxVideoAPIBlock(){
        return cy.get('main div ul:nth-child(2) li:nth-child(4)');
    }

    getGlobalCloudCommunicationsPlatformBlock(){
        return cy.get('main div ul:nth-child(2) li:nth-child(5)');
    }

    getDirectRoutingMicrosoftTeamsBlock(){
        return cy.get('main div ul:nth-child(2) li:nth-child(6)');
    }

    getWebRTCBlock(){
        return cy.get('main div ul:nth-child(2) li:nth-child(7)');
    }

    getSHAKENSTIRBlock(){
        return cy.get('main div ul:nth-child(2) li:nth-child(8)');
    }

    getBrandedCallingBlock(){
        return cy.get('main div ul:nth-child(2) li:nth-child(9)');
    }

    // MESSAGING


    /*getSIPTrunkingBlock(){
        return cy.get('main div ul:nth-child(2) li:nth-child(1)');
    }

    getSIPTrunkingBlock(){
        return cy.get('main div ul:nth-child(2) li:nth-child(1)');
    }

    getSIPTrunkingBlock(){
        return cy.get('main div ul:nth-child(2) li:nth-child(1)');
    }

    getSIPTrunkingBlock(){
        return cy.get('main div ul:nth-child(2) li:nth-child(1)');
    }*/

}

module.exports = ProductsPage