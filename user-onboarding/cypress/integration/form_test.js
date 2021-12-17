describe('User Onboarding', () => {
    beforeEach(() => {
        cy.visit('http://localhost:3000')
    })

    const firstName = () => cy.get('input[name=first_name]');
    const lastName = () => cy.get('input[name=last_name]');
    const eMail = () => cy.get('input[name=email]');
    const passWord = () => cy.get('input[name=password]');
    const submitBtn = () => cy.get('button[id="submitButton"]');
    const checkBox = () => cy.get('[type="checkbox"]');

    it('sanity check to make sure tests work', () => {
        // 'it' is a test
        // expect is an assertion
        expect(1 + 2).to.equal(3);
        expect(2 + 2).not.to.equal(5) // strict equality ===
        expect({}).not.to.equal({}); // strict equality {} !== {}
        expect({}).to.eql({}); // not strict ==
    })

    it('proper elements showing', () => {
        firstName().should('exist');
        lastName().should('exist');
        eMail().should('exist');
        passWord().should('exist');
        submitBtn().should('exist');
        checkBox().should('exist');
    })

    describe('Filling out inputs and clearing when submitted', () => {
        it('can navigate to the site', () => {
            cy.url().should('include', 'localhost');
        })

        it('can type in text inputs', () => {
            firstName()
                .should('have.value', '')
                .type('Bitcoin is hope')
                .should('have.value', 'Bitcoin is hope')

            lastName()
                .should('have.value', '')
                .type('Snoobles and Baboo')
                .should('have.value', 'Snoobles and Baboo')
            
            eMail()
                .should('have.value', '')
                .type('dudeBro@gmail.com')
                .should('have.value', 'dudeBro@gmail.com')

            passWord()
                .should('have.value', '')
                .type('boopbeepbop')
                .should('have.value', 'boopbeepbop')
        })

        it('can check the checkbox', () => {
            checkBox()
                .check({ force: true })
        })
    })

})