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

const colors = {
  error: 'rgb(220, 71, 85)',
  success: 'rgb(0, 200, 0)',
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

    registerForm.titleInput().should(({ 0: element }) => {
      const style = window.getComputedStyle(element);
      const border = style.getPropertyValue('border-color');
      const icon = style.getPropertyValue('background-image');

      assert.strictEqual(border, colors.error);
      assert.isDefined(icon);
    });
  });
});
