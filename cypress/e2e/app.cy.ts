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

describe('Submitting an image with invalid inputs', () => {
  after(() => {
    cy.clearAllLocalStorage();
  });
  it('should be on the image registration page', () => {
    cy.visit('/');
  });

  it('should click the submit button', () => {
    registerForm.submitButton().click();
  });

  it('should show "Please type a title for the image" message above the title field', () => {
    registerForm
      .titleFeedback()
      .should('contain.text', 'Please type a title for the image');
  });

  it('should show "Please type a valid URL" message above the imageUrl field', () => {
    registerForm
      .imageUrlFeedback()
      .should('contain.text', 'Please type a valid URL');
  });

  it('should see an exclamation icon in the title and imageUrl fields', () => {
    registerForm.titleInput().should(({ 0: element }) => {
      const style = window.getComputedStyle(element);
      const border = style.getPropertyValue('border-color');
      const icon = style.getPropertyValue('background-image');

      assert.strictEqual(border, colors.error);
      assert.isDefined(icon);
    });
  });
});
