
describe('Lambda Eats App', () =>{
   beforeEach(() =>{
      cy.visit('http://localhost:3000/pizza')
   })

   const nameInput = () => cy.get('input[id=name-input]');
   const specialT = () => cy.get('input[id=special-text]');
   const sizeDrop = () => cy.get('input[id=size-dropdown]');
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


})