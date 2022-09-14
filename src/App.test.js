import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from './App';

beforeEach(()=>{
  render(<App />);
})

test('renders the landing page', () => {
  render(<App />);
});

it("should pass the placeholder props to the input element which is equal to Search",()=>{
  expect(screen.getByTestId('input').getAttribute("placeholder")).toBe("Search");
})

it("should not show alert indicating insufficient input length, when there is no search button submission",()=>{
  expect(screen.queryByRole('alert')).not.toBeInTheDocument();
})

it("should show alert if there is no input",async()=>{
  userEvent.click(screen.getByRole('searchSubmit'));
  await waitFor(() => expect(screen.queryByRole('alert')).toBeInTheDocument());
})

