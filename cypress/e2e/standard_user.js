beforeEach(() => {
    cy.clearAllCookies();
    cy.clearAllLocalStorage();
    cy.clearAllSessionStorage();
    cy.log('Cache and cookies cleared');
    cy.reload()
  });
describe("THIS IS TO TEST ADD TO CART",()=>{
    it("FIRST TEST TO THE CART",()=>{
     
     cy.visit("https://www.saucedemo.com/")

     cy.get('[data-test="username"]').type("standard_user")
     cy.get('[data-test="password"]').type("secret_sauce")
    
     cy.get('[data-test="login-button"]').click()
    
        
       let sizeButtons =cy.get('div#inventory_container').find('.btn');
       sizeButtons.then((buttons) => {
        const count = buttons.length;
        // numButton= console.log( count);
        for (let i=0;i<count;i+=2){
            buttons.eq(i).click();
         }
      });
     
     
    })
})