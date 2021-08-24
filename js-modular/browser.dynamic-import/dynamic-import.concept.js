// Imports can now (ES10) be assigned to a variable:

element.addEventListener('click', async () => {
  const module = await import(`./api-scripts/button-click.js`);
  module.clickEvent();
});
