import getUserName from './getAdminName';

test('getUserName utility should give right name', () => {
  const jon = {
    name: 'Jon Snow',
  };
  const myName = getUserName(jon);
  expect(myName).toBe('Jon Snow'); //! Aegon Targaryen (BUG!!)
});





test('user can visit about page from home', () => {
  visit('/');
  expect(screen.getByText(/you are home/i)).toBeInTheDocument();

  const leftClick = { button: 0 };
  userEvent.click(screen.getByText(/about/i), leftClick);
  expect(screen.getByText(/you are on the about page/i)).toBeInTheDocument();
});
