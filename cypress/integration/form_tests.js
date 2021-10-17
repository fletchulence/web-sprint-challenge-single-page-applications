
describe('Lambda Eats App', () =>{
   beforeEach(() =>{
      cy.visit('http://localhost:3000/pizza')
   })

   const nameInput = () => cy.get('input[id="name-input"]');
   const specialT = () => cy.get('input[id="special-text"]');
   const sizeDrop = () => cy.get('select[id="size-dropdown"]');
   const submitBtn = () => cy.get('button[id="order-button"]');

   it('sanity check', () => {
      expect(1 + 2).to.equal(3)
      expect(2 + 2).not.to.equal(5);
   })

   describe('all elements exist how expected at first render', () =>{
      it('test for all elements to exist', ()=>{
         cy.get('input[name=olives]').should('exist');
         cy.get('input[name=pineapple]').should('exist');
         cy.get('input[name=chicken]').should('exist');
         cy.get('input[name=pepperoni]').should('exist');
         nameInput().should('exist');
         specialT().should('exist');
         sizeDrop().should('exist');
         submitBtn().should('exist');
      })
      it('submit Button is disabled ', () =>{
         submitBtn().should('be.disabled')
      })
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
         cy.get('input[name=pepperoni]').should('not.be.checked');
         cy.get('input[name=pepperoni]').check()
            .should('have.value', 'on');
         cy.get('input[name=olives]').should('not.be.checked');
         cy.get('input[name=olives]').check()
            .should('have.value', 'on');
      })
      it('can select peps, olives, and chicken', () => {
         cy.get('input[name=pepperoni]').should('not.be.checked');
         cy.get('input[name=pepperoni]').check()
            .should('have.value', 'on');
         cy.get('input[name=olives]').should('not.be.checked');
         cy.get('input[name=olives]').check()
            .should('have.value', 'on');
         cy.get('input[name=chicken]').should('not.be.checked');
         cy.get('input[name=chicken]').check()
               .should('have.value', 'on');
      })
      it('can select peps, olives, chicken, and pineapple', () => {
         cy.get('input[name=pepperoni]').should('not.be.checked');
         cy.get('input[name=pepperoni]').check()
            .should('have.value', 'on');
         cy.get('input[name=olives]').should('not.be.checked');
         cy.get('input[name=olives]').check()
            .should('have.value', 'on');
         cy.get('input[name=chicken]').should('not.be.checked');
         cy.get('input[name=chicken]').check()
            .should('be.checked');
         cy.get('input[name=pineapple]').should('not.be.checked');
         cy.get('input[name=pineapple]').check()
            .should('have.value', 'on');
      })
   })
   
   describe('Form should submit when proper things are filled', () =>{
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
      it('all from Elements Submit', () => {
         nameInput().type('david fletcher');
         cy.get('input[name=pepperoni]').check();
         cy.get('input[name=olives]').check();
         cy.get('input[name=chicken]').check();
         cy.get('input[name=pineapple]').check();
         sizeDrop().select('Small')
         specialT().type('add hot honey please');
         submitBtn().click();
         
         cy.contains('david fletcher').should('exist')
         cy.contains('pepperoni').should('exist')
         cy.contains('olives').should('exist')
         cy.contains('chicken').should('exist')
         cy.contains('pineapple').should('exist')
         cy.contains('small').should('exist')
         cy.contains('add hot honey please').should('exist')
      })
   })


})