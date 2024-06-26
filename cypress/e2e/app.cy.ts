const registerForm = {
  titleInput: () => cy.get('#title'),
  titleFeedback: () => cy.get('#titleFeedback'),
  imageUrlInput: () => cy.get('#imageUrl'),
  imageUrlFeedback: () => cy.get('#urlFeedback'),
  submitButton: () => cy.get('#btnSubmit'),
};

const input = {
  title: '',
  url: '',
};

describe('Form submission', () => {
  beforeEach(() => {
    cy.clearAllLocalStorage();
  });

  it('should give errors when submitting empty inputs', () => {
    cy.visit('/');

    registerForm.submitButton().click();

    registerForm
      .titleFeedback()
      .should('contain.text', 'Please type a title for the image');

    registerForm
      .imageUrlFeedback()
      .should('contain.text', 'Please type a valid URL');
  });
});
