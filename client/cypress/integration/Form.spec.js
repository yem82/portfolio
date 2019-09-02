describe('Contact form', () => {
  beforeEach(() => {
    cy.visit('/');
  });

  it('accepts user input', () => {
    const input1 = "John";
    const input2 = "Doe";
    const input3 = "johndoe@email.com";
    const input4 = "We are hiring!";
    const input5 = "It is a long established fact that...";

    cy.get('input[name=firstname]').type(input1)
     .should('have.value', input1);
    cy.get('input[name=lastname]').type(input2)
    .should('have.value', input2);
    cy.get('input[name=email]').type(input3)
    .should('have.value', input3);
    cy.get('input[name=subject]').type(input4)
    .should('have.value', input4);
    cy.get('textarea[name=message]').type(input5)
    .should('have.value', input5);
  });

  it('user is notified of sent message', () => {
    const input1 = "John";
    const input2 = "Doe";
    const input3 = "johndoe@email.com";
    const input4 = "We are hiring!";
    const input5 = "It is a long established fact that...";
    const stub = cy.stub()

    cy.get('input[name=firstname]').type(input1)
    cy.get('input[name=lastname]').type(input2)
    cy.get('input[name=email]').type(input3)
    cy.get('input[name=subject]').type(input4)
    cy.get('textarea[name=message]').type(input5)
    cy.on('window:alert', stub)
    cy.get('form').submit()
    cy.wait(2000)
      .then(() => {
        expect(stub.getCall(0)).to.be.calledWith('message sent!')
      });
  });

  describe('Error messages', () => {
    it('all error messages show when all fields are empty', () => {
      cy.get('input[name=firstname]').invoke('val', '')
      cy.get('input[name=lastname]').invoke('val', '')
      cy.get('input[name=email]').invoke('val', '')
      cy.get('input[name=subject]').invoke('val', '')
      cy.get('textarea[name=message]').invoke('val', '')
      cy.get('form').submit()
      cy.get('#error').contains("name fields can't be empty!");
      cy.get('#error').contains("email can't be empty!");
      cy.get('#error').contains("email should contain '@' and at least one dot");
      cy.get('#error').contains("message can't be empty!");
    });

    it('name error appears when firstname is empty', () => {
      const input2 = "Doe";
      const input3 = "johndoe@email.com";
      const input4 = "We are hiring!";
      const input5 = "It is a long established fact that...";

      cy.get('input[name=firstname]').invoke('val', '')
      cy.get('input[name=lastname]').type(input2)
      cy.get('input[name=email]').type(input3)
      cy.get('input[name=subject]').type(input4)
      cy.get('textarea[name=message]').type(input5)
      cy.get('form').submit()
      cy.get('#error').contains("name fields can't be empty!");
    });

    it('name error appears when lastname is empty', () => {
      const input1 = "John";
      const input3 = "johndoe@email.com";
      const input4 = "We are hiring!";
      const input5 = "It is a long established fact that...";

      cy.get('input[name=firstname]').type(input1)
      cy.get('input[name=lastname]').invoke('val', '')
      cy.get('input[name=email]').type(input3)
      cy.get('input[name=subject]').type(input4)
      cy.get('textarea[name=message]').type(input5)
      cy.get('form').submit()
      cy.get('#error').contains("name fields can't be empty!");
    });

    it('all email errors appears when email is empty', () => {
      const input1 = "John";
      const input2 = "Doe";
      const input4 = "We are hiring!";
      const input5 = "It is a long established fact that...";

      cy.get('input[name=firstname]').type(input1)
      cy.get('input[name=lastname]').type(input2)
      cy.get('input[name=email]').invoke('val', '')
      cy.get('input[name=subject]').type(input4)
      cy.get('textarea[name=message]').type(input5)
      cy.get('form').submit()
      cy.get('#error').contains("email can't be empty!");
      cy.get('#error').contains("email should contain '@' and at least one dot");
    });

    it('invalid email error appears when email is invalid', () => {
      const input1 = "John";
      const input2 = "Doe";
      const input3 = "johndoeemail.com";
      const input4 = "We are hiring!";
      const input5 = "It is a long established fact that...";

      cy.get('input[name=firstname]').type(input1)
      cy.get('input[name=lastname]').type(input2)
      cy.get('input[name=email]').type(input3)
      cy.get('input[name=subject]').type(input4)
      cy.get('textarea[name=message]').type(input5)
      cy.get('form').submit()
      cy.get('#error').contains("email should contain '@' and at least one dot");
    });

    it('message error appears when message is empty', () => {
      const input1 = "John";
      const input2 = "Doe";
      const input3 = "johndoe@email.com";
      const input4 = "We are hiring!";

      cy.get('input[name=firstname]').type(input1)
      cy.get('input[name=lastname]').type(input2)
      cy.get('input[name=email]').type(input3)
      cy.get('input[name=subject]').type(input4)
      cy.get('textarea[name=message]').invoke('val', '')
      cy.get('form').submit()
      cy.get('#error').contains("message can't be empty!");
    });
  });
});