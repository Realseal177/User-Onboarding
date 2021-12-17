describe('User Onboarding', () => {
    beforeEach(() {
        cy.visit('http://localhost:3000')
    })

    const firstName = () => cy.get('input[name=first_name]');
    const lastName = () => cy.get('input[name=last_name]');
    const eMail = () => cy.get('input[name=email]');
    const passWord = () => cy.get('input[name=password]');
    const submitBtn = () => cy.get('button[id="submitButton"]');
    const checkBox = () => cy.get('checkbox[name=terms]');

})