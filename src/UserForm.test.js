import { render, screen } from "@testing-library/react";
import user from "@testing-library/user-event";
import UserForm from "./UserForm";

test("renders two inputs & a button", () => {
  // render the component
  render(<UserForm />);

  // manipulate the component or find an element in it
  const inputs = screen.getAllByRole("textbox");
  const button = screen.getByRole("button");

  // Assertion - make sure the component is doing something
  // What we expect it to do
  expect(inputs.length).toBe(2);
  expect(button).toBeInTheDocument();
});

test("it calls when form is submitted", () => {
  // creating a mock function
  const mockFunction = jest.fn();

  // render the component
  render(<UserForm onUserAdd={mockFunction} />);

  // Find two inputs
  const nameInput = screen.getByLabelText("Name");
  const emailInput = screen.getByLabelText("Email");

  // simulating typing in name
  user.click(nameInput);
  user.keyboard("John Doe");

  // simulating typing in email
  user.click(emailInput);
  user.keyboard("john@hotmail.com");

  // find the button that submits the form
  const button = screen.getByRole("button");

  // simulate clicking the submit button
  user.click(button);

  // Assertion to make sure on user add is called with email and the name
  // expect(nameInput).toHaveValue("John Doe");
  // expect(emailInput).toHaveValue("john@hotmail.com");
  // expect(button).toBeInTheDocument();
  expect(mockFunction).toHaveBeenCalled();
  expect(mockFunction).toHaveBeenCalledWith({
    name: "John Doe",
    email: "john@hotmail.com",
  });
});
