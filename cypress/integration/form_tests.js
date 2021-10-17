
describe('Lambda Eats App', () =>{
   beforeEach(() =>{
      cy.visit('http://localhost:3000/pizza')
   })

   const nameInput = () => cy.get('input[id=name-input]');
   const specialT = () => cy.get('input[id=special-text]');
   const sizeDrop = () => cy.get('select[id=size-dropdown]');
   // const toppings = () => cy.get('div[class=toppings]');
   const submitBtn = () => cy.get('button[id=order-submit]');

   it('sanity check', () => {
      expect(1 + 2).to.equal(3)
      expect(2 + 2).not.to.equal(5);
   })

   describe('test that you can add text to the box', () => {
      it('can add text to Name', () =>{
         nameInput().should('exist');
         nameInput().type('David Fletcher');
         nameInput().should('have.value', 'David Fletcher');
      })
      it('can add value to text to Special Instructions', () => {
         specialT().should('exist')
           .type('hello my name is david')
         specialT().should('have.value', 'hello my name is david')
      })
   })

   describe('test that you can select multiple toppings', () => {
      it('can select peps and olives', () => {
         cy.get('input[name=pepperoni]').should('not.have.value');
         cy.get('input[name=pepperoni]').check()
            .should('have.value', 'on');
         cy.get('input[name=pepperoni]').should('not.have.value');
         cy.get('input[name=olives]').check()
            .should('have.value', 'on');
      })
      it('can select peps, olives, and chicken', () => {
         cy.get('input[name=pepperoni]').should('not.have.value');
         cy.get('input[name=pepperoni]').check()
            .should('have.value', 'on');
         cy.get('input[name=pepperoni]').should('not.have.value');
         cy.get('input[name=olives]').check()
            .should('have.value', 'on');
         cy.get('input[name=chicken]').should('not.have.value');
         cy.get('input[name=chicken]').check()
               .should('have.value', 'on');
      })
      it('can select peps, olives, chicken, and pineapple', () => {
         cy.get('input[name=pepperoni]').should('not.have.value');
         cy.get('input[name=pepperoni]').check()
         .should('have.value', 'on');
         cy.get('input[name=pepperoni]').should('not.have.value');
         cy.get('input[name=olives]').check()
         .should('have.value', 'on');
         cy.get('input[name=chicken]').should('not.have.value');
         cy.get('input[name=chicken]').check()
         .should('have.value', 'on');
         cy.get('input[name=pineapple]').should('not.have.value');
         cy.get('input[name=pineapple]').check()
         .should('have.value', 'on');
      })
   })
   
   describe('Form should submit', () =>{
      it('Submit button is disabled without Name and Size filled', () => {
         submitBtn().should('be.disabled');
         specialT().type('gluten free');
         cy.get('input[name=pepperoni]').check()
         cy.get('input[name=olives]').check()
         cy.get('input[name=chicken]').check()
         cy.get('input[name=pineapple]').check()
         submitBtn().should('be.disabled');
      })
      it('Submit button becomes clickable when size and Name are filled', () => {
         nameInput().type('Tony Stark');
         submitBtn().should('be.disabled')
         sizeDrop().select('Small')
         submitBtn().should('not.be.disabled')
         sizeDrop().select('Large')
         submitBtn().should('not.be.disabled')
         sizeDrop().select('Medium')
         submitBtn().should('not.be.disabled')
      })
   })


})