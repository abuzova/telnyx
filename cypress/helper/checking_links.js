class CheckingLinks{
    //value = Array('1', '2', '3', '4', '5');

    checkLinks(value){        
        for(let i=0; i<value.length; i++){
            console.log('Hello! ' + value[i]);
            cy.get('main div ul:nth-child(2) li:nth-child(' + i + ')');
        }
    } 


}

module.exports = CheckingLinks


